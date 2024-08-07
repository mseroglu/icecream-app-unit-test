import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setData] = useState([])
  const [basket, setBasket] = useState([])

  const price = 5

  useEffect(() => {
    axios.get("http://localhost:4050/toppings")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])

  const handleChange = (isChecked, item) => {
    isChecked
      ? setBasket([...basket, item])
      : setBasket(
        basket.filter(i => i.id !== item.id)
      )
  }


  return (
    <div>

      <h1>SOS Çeşitleri</h1>

      <p>Tanesi <span className="text-warning">{price}</span> ₺</p>
      <h3>
        Sos Ücreti <span data-testid="sos-ucret" className="text-warning">{basket.length*price}</span> ₺
      </h3>

      <div className="d-flex gap-3 flex-wrap justify-content-center">
        {data.map((item) => (
          <div key={item.name} className="top-card d-flex flex-column gap-3 p-3 rounded align-items-center justify-content-center border ">
            <label htmlFor={item.name} className="d-flex flex-column gap-3">
              <img style={{ width: "150px" }} src={item.imagePath} alt="soslar" />
              <p className="text-center">{item.name}</p>
            </label>
            <input
              onChange={(e) => handleChange(e.target.checked, item)}
              type="checkbox" id={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;