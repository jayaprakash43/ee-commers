
import React from "react";
import { fragrances } from "../data/perfumes";


const PerfumeMap = ()=>{
    return (
        <div style={{display : 'flex', justifyContent : 'space-around',textAlign : 'center',marginTop : '50px'}}>
            {
                fragrances.map((item)=>{
                    return (
                        <div>
                            <img src={item.image} alt="PerfumBottel" style={{width : '250px',height : '300px'}} />
                            <h3>{item.brand} </h3>
                            <p>{item.valumme}ml</p>
                            <em>$  {item.price}.00</em>
                         
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PerfumeMap;
