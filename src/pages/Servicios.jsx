import React from 'react'
import { Link } from 'react-router-dom'

function Servicios() {
  return (
    <>
    <h1>Servicios</h1>
            <hr />
    <div style={{ width: '85%', margin: '0 auto' }}>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequatur alias repudiandae vitae harum, odio error expedita velit quod! Est aliquid obcaecati, dolores architecto dicta vero qui quis voluptate natus.</p>
        <Link to="/"><button>Volver al Inicio</button></Link>
    </div>
    </>
  )
}

export default Servicios