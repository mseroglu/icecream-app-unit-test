import { render, screen } from "@testing-library/react"
import Card from "."
import userEvent from "@testing-library/user-event"

const item = {
   "id": 2,
   "name": "Vanilla",
   "imagePath": "/images/vanilla.png"
}

// prop olarak veri alan bir bileşebni test ediyorsak bileşenin aldığı proplarıgöndermemiz gerekir

test("Miktar, başlık ve foto gelen propa göre ekrana basılır", () => {

   // bileşeni render et
   render(<Card item={item} addItem={() => { }} delItem={() => { }} amount={5} />)

   // elementleri al (Miktar spanı, )
   const amount = screen.getByTestId("amount")

   // spamın içerisinde 5 yazıyor mu kontrol edicez
   expect(amount.textContent).toBe("5")

   // get ile çağırdığımzda ekranda var mı kontrolü de yapmış oluruz
   // ekranda yoksa hata alırız, expect yapmaya gerek olmaz.
   screen.getByText("Vanilla")

   // img elementini çağır
   const img = screen.getByAltText("dondurma")

   // resmin kaynağı doğrumu kontrol edelim
   expect(img).toHaveAttribute("src", "/images/vanilla.png")

})

// Prop olarak parent bileşenden gönderilen orjijinal fonk.ları gönderemediğimizden yapmamız gereken test;
// fokn.lar çağrıldı mı, doğru parametreler yollandı mı tetsleri olacaktır.
// Bunun için mock işlevini kullanırız 
test("Butonlara tıklanınca fonksiyonlar doğru parametrelerle çağrılır", async () => {
   // sahte fonk.lar oluştururuz
   const addMockFn = jest.fn()
   const delMockFn = jest.fn()

   const user = userEvent.setup()

   // ilk adım bileşeni render et
   render(<Card item={item} addItem={addMockFn} delItem={delMockFn} amount={3} />)

   // butonu al
   const addBtn = screen.getByRole("button", { name: /ekle/i })
   const delBtn = screen.getByRole("button", { name: /sıfırla/i })

   // ekle butonuna tıkla
   await user.click(addBtn)

   // addItem fonksiyonu doğru parametre ile çağrıldı mı
   expect(addMockFn).toHaveBeenCalledWith(item)

   // sıfırla butonuna tıkla
   await user.click(delBtn)

   // addItem fonksiyonu doğru parametre ile çağrıldı mı
   expect(delMockFn).toHaveBeenCalledWith(item.id)
})