

const Card = ({ item, addItem, delItem, amount }) => {


   return (
      <div style={{ width: "200px" }} className="border rounded p-3 d-flex flex-column align-items-center gap-1">

         <img height={100} src={item.imagePath} alt="dondurma" />
         <span>{item.name}</span>

         <div className="d-flex gap-2 mt-4 align-items-center">
            <button
               onClick={() => delItem(item.id)} className="btn btn-sm btn-outline-light">Sıfırla</button>

            <span data-testid="amount" className="fs-2">{amount}</span>

            <button
               onClick={() => addItem(item)}
               className="btn btn-sm btn-outline-info">Ekle</button>
         </div>
      </div>
   );
};

export default Card;