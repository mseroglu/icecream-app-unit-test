import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Scoops from "."

/*
 ! Seçiciler > 3 ana parçadan oluşur
 1) Method Tipi 2) All İfadesi 3) Seçici Method

 * get > başlangıçta domda olan elemtleri almak için kullanılır | elemnt bulunamazsa test başarısı olur

 * query > elementin ekranda olma durumu kesin olmadığı durumlarda kullanılır get ile bezner çalışır | element bulunamazsa hata vermez null döndürür test devam eder

 * find > elementin ne zaman ekrana basılıcağı belli değise (api isteklerinde) kullanılır
 * not: find methodu kullanırsak promise döndürdüğünden async await ile kullanmalıyız
 
 * eğer methoda all eklersek seçici koşuluna uyan bütün elemanları getirir
 * all kullanırsak dönen değer her zaman dizidir 
*/

test("API den alınan verilerle kartlar ekrana basılır", async () => {
   // renderla
   await render(<Scoops />)

   // elementleri çağır
   const images = await screen.findAllByAltText("dondurma")

   // gelen resimlerin (kartların) sayısı sıfırdan büyük mü
   expect(images.length).toBeGreaterThan(0)
})

test("Çeşitlerin eklenme ve sıfırlanma özellikleri toplam fiyatı etkiler", async () => {
   // fireEvent yerine daha kullanıcı yaklaşımlı bir olay tetikleyici
   const user = userEvent.setup()

   // ilk olarak bileşen render edilir
   render(<Scoops />)

   // bileşenler çağrılır
   //!    /ekle/i regex ifadesi büyük küçük harf duyarlığını ortadan kaldırır
   const addButtons = await screen.findAllByRole("button", { name: /ekle/i })
   const delButtons = await screen.findAllByRole("button", { name: /sıfırla/i })

   // toplam fiyat etiketini çağır
   const total = screen.getByTestId("total")

   // toplam fiyat 0 mı kontrol edelim
   expect(total.textContent).toBe("0")

   // ekle butonlarından birine basalım
   await user.click(addButtons[0])

   // toplam fiyat 25 mi kontrol edelim
   expect(total.textContent).toBe("25")

   // başka bir butona iki keer tıkla
   await user.dblClick(addButtons[3])

   // toplam fiyat 75 mi kontrol edelim
   expect(total.textContent).toBe("75")

   // sıfırla tuşuna basıyoruz
   await user.click(delButtons[0])

   // toplam fiyat 50 mi kontrol edelim
   expect(total.textContent).toBe("50")

   // ikinci eklediğmizi de sıfırlıyoruz
   await user.click(delButtons[3])

   // toplam fiyat 0 mi kontrol edelim
   expect(total.textContent).toBe("0")
})


