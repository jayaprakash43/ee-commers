
import React from 'react'

function Navbar() {
  return (
    <div style={ {backgroundColor : 'black',gap : '50px',display : 'flex',justifyContent : 'space-around',color : "white",padding : '3PX'}}>
        <ul style={{listStyle : 'none',display : 'flex',gap : '80px'}}>
            <li>Home</li>
            <li>Category</li>
            <li>New Arrival</li>
            <li>Whistele list</li>
            <li>Contanct</li>
        </ul>
        <input type="search"  placeholder='search' style={{width : '150px',borderRadius : '15px'}}/>
      
    </div>
  )
}

export default Navbar

