

const Card = ({ item, basket, setBasket }) => {

   const addItem = () => setBasket([...basket, item])

   const delItem = () => {
      const filtered = basket.filter(i => i.id !== item.id)
      setBasket(filtered)
   }

   return (
      <div style={{ width: "200px" }} className="border rounded p-3 d-flex flex-column align-items-center gap-1">

         <img height={100} src={item.imagePath} alt="dondurma" />
         <span>{item.name}</span>

         <div className="d-flex gap-2 mt-4 align-items-center">
            <button
               onClick={delItem} className="btn btn-sm btn-outline-light">Sıfırla</button>

            <span className="fs-2"> {basket.filter(i => i.id === item.id).length} </span>
            
            <button
               onClick={addItem}
               className="btn btn-sm btn-outline-info">Ekle</button>
         </div>
      </div>
   );
};

export default Card;