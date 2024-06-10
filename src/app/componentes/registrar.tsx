'use client'
import React, { useState } from 'react';

const Registrar: React.FunctionComponent =()=>{
    const [nombre, setNombre] = useState("Javier");
    const [usuario, setUsuario] =useState("jj");
   
    React.useEffect(() => {
        console.log('in useEffect')
      })

    function guardar(){
        //llamar a las variables
        //mandaras en un servicio rest
        console.log("se llamo a guardar con los datos" +nombre+", "+usuario)
        //llamar al servicio rest
    }

    return (
        <>
            <div>
                Nombre: {nombre}
                <br/>
                <input type='text' name='nombre' 
                onChange={(e)=>{setNombre(e.target.value)}}/>
            </div>
            <div>
                Usuario: 
                <input type='text' name='usuario' 
                onChange={(e)=>{setUsuario(e.target.value)}}/>
            </div>
            <button onClick={guardar}>Guardar</button>
        </>
    );
}

export default Registrar;