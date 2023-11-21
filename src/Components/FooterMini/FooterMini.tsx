import React from "react";
import './FooterMini.scss';

const FooterMini = () => {
    return (
        <footer className="footer-mini">
            <div className="util__wrapper--8rem">
                <span>Copyright CyCad © 2023</span>
                <span>Made with 💙 in Brazil in IFPB</span>
            </div>
            <div className="util__wrapper--8rem">
                <span>Política de Privacidade</span>
                <span>/</span>
                <span>Termos de Uso</span>
                <span>/</span>
                <span>Ética</span>
            </div>
        </footer>
    )
}

export default FooterMini;