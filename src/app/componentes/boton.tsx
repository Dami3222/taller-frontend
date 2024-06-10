import * as React from 'react';

const Boton: React.FunctionComponent =()=>{
// export default function List() {
    const arrTest = ["Carlos","Aracely","Jorge","Giovanni","Aaron"];

    arrTest.forEach(u=>{
        console.log(u)
      })

    return (
        <>
            <button>
            {/* <button onClick={()=>alert("hola")}> */}
                {"hola"}
            </button>
        </>
    );
}

export default Boton;