
import React from "react";
import { jewellery } from "../data/jewellery";

const ListOfJewellery = ()=>{
    return (
      <div style={{display : 'flex',justifyContent : 'space-around',textAlign : 'center',marginTop : '50px'}}>
        {
            jewellery.map((item)=>{
                return (
                    <div>
                        <img src={item.image} alt="Jewellery" style={{width : '300px',height : '350px'}} />
                        <h3>{item.name}</h3>
                        <p> <b>{item.metal} </b></p>
                        <em>$  {item.price}.00</em>
                    </div>
                )
            })
        }
      </div>
    )
}

export default ListOfJewellery;

