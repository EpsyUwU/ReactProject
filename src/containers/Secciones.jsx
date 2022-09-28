import SeccionTitulo from "../components/SeccionTitulo";
import SeccionIngredientes from "../components/SeccionIngredientes";
import SeccionPreparacion from "../components/SeccionPreparacion";
import "../assets/styles/root.css";

function Secciones() {
    return ( 
        <>
            <div>
                <SeccionTitulo/>
                <SeccionIngredientes/>
                <SeccionPreparacion/>
            </div>
        </>
    );
}

export default Secciones;