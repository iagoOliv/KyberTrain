import React from 'react'
import Header from "../../Components/Header/Header";
import FooterMini from "../../Components/Footers/FooterMini";
import "./Explore.scss";

function Explore() {
  return (
    <>
      <Header />
      <div className="sub__header">
            {/* fazer a estrutura do cabeçalho onde se encontram os tópicos de cursos */}
      </div>
      <main>
        <section className="container__text">
            <span>Selecione o curso que melhor se <br /><span> encaixa com você</span></span>
        </section>

        <section className="container__main">
            <div className="container__main__title">
                <h1>Para iniciantes</h1>
            </div>
            <div className="container__main__content">
                {/* cards */}
                <div className="container__main__content__cards">
                    
                </div>
            </div>
        </section>

        <section className="container__main">
            <div className="container__main__title">
                <h1>Para empresas</h1>
            </div>
            <div className="container__main__content">
                {/* cards */}
                <div className="container__main__content__cards">
                    
                </div>
            </div>
        </section>
      </main>
      <FooterMini />
    </>
  )
}

export default Explore