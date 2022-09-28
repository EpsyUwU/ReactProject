import logoFotter from "../assets/imgs/King-Taco-Logo.png"
import Facebook from "../assets/imgs/facebook.png"
import Intagram from "../assets/imgs/instagram.png"
import Youtube from "../assets/imgs/youtube.png"

import "../assets/styles/footer.css"

function Footer() {
    return(
        <footer>
            <div className="foot">
                <div className="redes">
                    <img className="facebook" src={Facebook} alt="" />
                    <img className="instagram" src={Intagram} alt="" />
                    <img className="youtube" src={Youtube} alt="" /> 
                </div>
                    <h1 className="derechos">Derechos reservados Esteban &#169;</h1>
                <img src={logoFotter} alt="Logo del footer" />
                    
            </div>
        </footer>
    )
}

export default Footer;