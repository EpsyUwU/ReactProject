import logoApp from '../assets/imgs/encabezadoSVG.svg'
import '../assets/styles/header.css'

function Header() {
    return (
        <header> 
            <img src={logoApp} alt="Logo oficial del sitio" />
        </header>
    );
}

export default Header;