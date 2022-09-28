import imgIngredientes from "../assets/imgs/ingredientes.jpg"
import CardIngredientes from "./CardIngredientes";
import "../assets/styles/ingredientes.css"



function SeccionIngredientes(){

	const ingredientes = [
		
		{
		ingrediente:"- 1 Kg de maciza de cerdo"
		},
		{
		img:imgIngredientes
		},
		{
		ingrediente:"- 1 Taza d jugo de naranja"
		},
		{
		ingrediente:"- 3 Chiles habaneros"
		},
		{
		ingrediente:"- 1 Taza de vinagre"
		},
		{
		ingrediente:"- 1/2 Taza de hojas de cilantro"
		},
		{
		ingrediente:"- 1 Cda. de oregano"
		},
		{
		ingrediente:"- 1 Cda. de hojas de laurel seco"
		},
		{
		ingrediente:"- 4 Limones"
		},
		{
		ingrediente:"- 1 Cebolla morada",
		},
		
	];
	
	
	return(
		<div className="BordeIng">
		<h1 className="TituloIng">INGREDIENTES</h1>
		{ingredientes.map((ingredientes)=>{
			return<CardIngredientes ingrediente={ingredientes.ingrediente} img={ingredientes.img}/>;
		})}
    </div>
	)
}

export default SeccionIngredientes;
