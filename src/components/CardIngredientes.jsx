import "../assets/styles/ingredientes.css"
export default function CardIngredientes({ingrediente,img}){
	return(
		<div className="PadreIng">
			<div className="Ingredientes">
				<h1>{ingrediente}</h1>
			</div>
			<div className="ImgIngredientes">
				<img className="ImgI" src={img}/>
			</div>
		</div>
	)
}