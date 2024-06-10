import * as React from 'react';

const Lista: React.FunctionComponent =()=>{
// export default function List() {
    const arrTest = ["Carlos","Aracely","Jorge","Giovanni","Aaron"];

    arrTest.forEach(u=>{
        console.log(u)
      })

    return (
        <>
            <ul>
                <li>1</li>  
                <li>2</li>  
                <li>3</li>  
            </ul>
            <hr/>

            <ul>
                {arrTest.map(u=>{
                return(
                    <li>{u}</li>
                )
                })}
            </ul>
        </>
    );
}

export default Lista;