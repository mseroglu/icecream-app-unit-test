import { useEffect, useState } from "react";
import Card from "../Card";
import axios from "axios";

const Scoops = () => {
  const [data, setData] = useState([])
  const [basket, setBasket] = useState([])
  const price = 25

  useEffect(() => {
    axios.get("http://localhost:4050/scoops")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])

  const addItem = item => setBasket([...basket, item])

  const delItem = id => setBasket(basket.filter(i => i.id !== id)) 

  return (
    <div>
      <h1>Dondurma Çeşitleri</h1>

      <p>Tanesi <span className="text-warning"> {price} </span> ₺</p>

      <h3>Toplam Ücret <span data-testid="total" className="text-warning">{basket.length * price}</span> ₺</h3>
      <div className="d-flex gap-3 flex-wrap justify-content-center">
        {
          data?.map(item => 
          <Card key={item.id} 
          item={item} 
          addItem={addItem} 
          delItem={delItem} 
          amount={basket.filter(i => i.id === item.id).length} />)
        }
      </div>

    </div>
  );
};

export default Scoops;