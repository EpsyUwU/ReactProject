import logoApp from '../assets/imgs/microsoft.svg'
import '../assets/styles/header.css'

function Header() {
    return (
        <header>
            <img src={logoApp} alt="Logo oficial del sitio" />
            <span>Titulo</span>
        </header>
      );
}

export default Header;