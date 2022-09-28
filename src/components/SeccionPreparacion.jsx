import "../assets/styles/preparacion.css"
import imgMin from "../assets/imgs/30min.jpg"
import imgMezclar from "../assets/imgs/Mezclar.png"
import imgTacos from "../assets/imgs/Tacos.jpg"
import Card from './CardPreparacion'
import CardPreparacion from "./CardPreparacion";



function SeccionPreparacion(){

	const info = [
		{
		instruccion:"1.- Licua el jugo de achiote, guajillo, vinagre, oregano, laurel y sal pimienta. Virte la salsa sobre la carne en una olla express durante 30min.",
		img:imgMin
		},
		{
		instruccion:"2.- Mezcla la cebolla, chile, vinagre y oregano en un tazon.",
		img:imgMezclar
		},
		{
		instruccion:"3.- Sirve la cochinita en tacos, acompañado con la cebolla de manzano y termina con hojas de cilantro.",
		img:imgTacos
		}
	];

	return(
	<div className="BordePre">
		<h1 className="TituloPre">PREPARACION</h1>
		{info.map((informacion)=>{
			return<CardPreparacion instruccion={informacion.instruccion} img={informacion.img}/>;
		})}
    </div>
	);
}

export default SeccionPreparacion;
