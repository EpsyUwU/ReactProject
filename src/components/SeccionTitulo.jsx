import CardTitulo from "./CardTitulo"
import "../assets/styles/titulo.css"

function SeccionTitulo() {

  const Title = [
    {
      descripcion: "Delicioso,"
    },
    {
      descripcion: " Platillo,"
    },
    {
      descripcion: " Tradicional Mexicano"
    }
  ]

  return (
    <div className="BordeTit">
		<h1 className="TituloTit">COCHINITA PIBIL</h1>
		{Title.map((desc)=>{
			return<CardTitulo desc={desc.descripcion}/>;
		})}
    </div>
  );
}

export default SeccionTitulo;