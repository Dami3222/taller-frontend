import Image from "next/image";
import styles from "./page.module.css";
import Lista from "./componentes/lista";
import Boton from "./componentes/boton";
import Registrar from "./componentes/registrar";
import RegistroUsuario from'../components/RegistroUsuario';
import ListaUsuarios from "./componentes/ListaUsuarios";


export default function Home() {
  const user ="Javier";

  const aUser =[
    {id:1,nombre:"Jhon Smith",user:"jj"},
    {id:2,nombre:"Maria",user:"mm"}
  ]
  

  return (
    <>
      Hola Mundo!
      <hr/>
      <Boton/>
      <hr/>
      <Lista/>
      <hr/>
      <Registrar/>
      <hr/>
      <RegistroUsuario/>
      <hr/>
      <ListaUsuarios/>
    </>
  );
}
