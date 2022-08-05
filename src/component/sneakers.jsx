import React from 'react'

const sneakers = ({spadriet, chaine, handlePrice}) => {
  console.log(spadriet);
  return(
<div>
      {
      spadriet.map((el)=>
        (
          <div>
           <h1>{el.id}</h1>
           <h1>{el.model}</h1>
           <button onClick={()=> handlePrice(el.brand, el.price)}>PRICE</button>
           </div>
          )
          )
        }
</div>
       )
}

export default sneakers