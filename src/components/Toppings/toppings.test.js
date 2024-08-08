import { render, screen } from "@testing-library/react"
import Toppings from "."
import userEvent from "@testing-library/user-event"

test("Sosları eklem çıkarma işleminin toplam fiyata etkisi", async () => {

   const user = userEvent.setup()

   // 1- ilk olarak bişelen render
   render(<Toppings />)

   // 2- element seçimi (tüm checkboxlar ve toplam spanı)
   const checkboxes = await screen.findAllByRole("checkbox")
   const total = screen.getByTestId("sos-ucret")

   // 3- sos ucreti 0 mı kontrol et
   expect(total.textContent).toBe("0")

   // 4- tikli olan yok kontrolü
   checkboxes.forEach(item => expect(item).not.toBeChecked())

   // 5- birini tıkla
   await user.click(checkboxes[1])

   // 6- sos ucreti 5 mı kontrol et
   expect(total.textContent).toBe("5")

   // 7- birini daha tikle
   await user.click(checkboxes[4])

   // 8- sos ucreti 10 mı kontrol et
   expect(total.textContent).toBe("10")

   // 9- tiki kaldır
   await user.click(checkboxes[1])

   // 10- sos ucreti 5 mı kontrol et
   expect(total.textContent).toBe("5")

   // 11- tiki kaldır
   await user.click(checkboxes[4])

   // 12- sos ucreti 0 mı kontrol et
   expect(total.textContent).toBe("0")


})