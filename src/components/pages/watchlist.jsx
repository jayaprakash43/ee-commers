
import React from "react";
import { watches } from "../data/watches";


const ListOfWatches = (()=>{
    return (
        <div style={{display :'flex' ,justifyContent : 'space-around',textAlign :'center',marginTop : '50px'}}>
            {
                watches.map((item)=>{
                    return (
                        <div>
                            <img src={item.image} alt="Women Watches" style={{width :'250px',height : '300px'}}/>
                            <h3>{item.watchName} </h3>
                            <em>$  {item.price}.00</em>
                        </div>
                    )
                })
            }
        </div>
    )
})

export default ListOfWatches;

