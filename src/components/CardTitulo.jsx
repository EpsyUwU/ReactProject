import "../assets/styles/titulo.css"

export default function CardPreparacion({desc}){
	return(
		<div className="PadreDesc">
			<div><h1 className="Desc">{desc}</h1></div>
		</div>
	)
}

