import { render, screen } from "@testing-library/react"
import Card from "."
import userEvent from "@testing-library/user-event"
import { useState } from "react"

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

   // img elementini çağır
   // get ile çağırdığımzda ekranda var mı kontrolü de yapmış oluruz
   const img = screen.getByAltText("dondurma")

   // resmin kaynağı doğrumu kontrol edelim
   expect(img).toHaveAttribute("src", "/images/vanilla.png")

})

// Prop olarak parent bileşenden gönderilen orjijinal fonk.ları gönderemediğimizden yapmamız gereken test;
// fokn.lar çağrıldı mı, doğru parametreler yollandı mı tetsleri olacaktır.
// Bunun için mock işlevini kullanırız 
test("Butonlara tıklanınca fonksiyonlar doğru parametrelerle çağrılır", () => {
   // sahte fonk.lar oluştururuz
   const addMockFn = jest.fn()
   const delMockFn = jest.fn()

   // ilk adım bileşeni render et
   render(<Card item={item} addItem={addMockFn} delItem={delMockFn} amount={5} />)

   // elementleri çağır

})