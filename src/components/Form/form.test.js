import { fireEvent, render, screen } from "@testing-library/react"
import Form from "./index"

test("Koşulların onaylanmasına göre buton aktifliği", () => {
   // 1-Bileşen render edilir
   render(<Form />)

   // 2- Elemanları çağırma (Button, Checkbox)
   const c_box = screen.getByRole("checkbox")
   const button = screen.getByRole("button")

   // 3- checkbox tiksiz değil mi
   expect(c_box).not.toBeChecked()

   // 4- buton inaktifmi
   expect(button).toBeDisabled()

   // 5- checkbox u tikle
   fireEvent.click(c_box)

   // 6- Buton aktif mi
   expect(button).toBeEnabled()

   // 7- checkbox tiki kaldır
   fireEvent.click(c_box)

   // 8- Buton inaktif mi
   expect(button).not.toBeEnabled()
})


test("Butonun hover durumuna göre bildirim gözükür", ()=>{
   // 1- Bileşen render edilir
   render(<Form />)
   
   // 2- Element çağrılır
   const button = screen.getByText("Siparişi Onayla")
   const checkbox = screen.getByLabelText("Koşulları okudum, kabul ediyorum.")
   const toast = screen.getByText(/Hover Oldu/i)
   
   // 3- ekranda bildirim olmadığı kontrol edilir
   expect(toast).not.toBeVisible()

   // 4- checkbox u tikle
   fireEvent.click(checkbox)

   // 5- Mouse üzerine getirilir
   fireEvent.mouseEnter(button)

   // 6- Bildirim çıktımı diye kontol yapılır
   expect(toast).toBeVisible()

   // 7- Mouse üzerinden çekilir
   fireEvent.mouseLeave(button)

   // 8- Bildirim ekranda kayboldu mu kontrol edilir
   expect(toast).not.toBeVisible()
})