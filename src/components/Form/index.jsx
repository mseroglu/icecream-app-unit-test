import { useState } from "react";

const Form = () => {
   const [isChecked, setIsChecked] = useState(false)
   const [isHover, setIsHover] = useState(false)

   return (
      <form className=" mb-5 d-flex justify-content-center align-items-center gap-1">
         <input type="checkbox" id="terms"
            className="form-check-input"
            onChange={(e) => setIsChecked(e.target.checked)} />
         <label htmlFor="terms">Koşulları okudum, kabul ediyorum.</label>
         <div className="terms-wrapper">
            <p style={{ visibility: isHover && isChecked ? "visible":"hidden"}}>Hover Oldu</p>
            <button
               onMouseEnter={() => setIsHover(true)}
               onMouseLeave={() => setIsHover(false)}
               className="btn btn-primary "
               disabled={!isChecked}>Siparişi Onayla</button>
         </div>
      </form >
   );
};

export default Form;