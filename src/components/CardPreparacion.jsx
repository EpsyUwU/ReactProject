import "../assets/styles/preparacion.css"

export default function CardPreparacion({instruccion,img}){
	return(
		<div className="Preparacion">
			<div>
				<p className="Isntrucciones">{instruccion}</p>
			</div>
			<div>
				<img src={img} widht={300} height={300} alt="" />
				<br />
				<br />
			</div>
		</div>
	)
}