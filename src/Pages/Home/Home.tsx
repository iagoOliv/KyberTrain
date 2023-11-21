import React from 'react';
import Header from '../../Components/Header/Header';
import './Home.scss';
import placeholderCardData from './PlaceholderData';
import Button from "../../Components/Buttons/Button";
import Card from '../../Components/Card/Card';
import Footer from '../../Components/Footer/Footer';

export default function Home()
{
    return (
        <>
        <Header />
        <section className="hero">
            <div className="hero__container">
                <div className="util__wrappercolumn--4rem">
                    <span className="hero__subtitle">Na CyCad você tem</span>
                    <span className="hero__title">Aprendizado que te <span className="hero__feature">protege</span></span>
                </div>
                <div className="util__wrapper--4rem">
                    <Button size="XL" buttonText="Cadastrar" isLink={true} redirects={true} goTo="/login"/>
                    <Button size="XL" buttonText="Entrar" redirects={true} goTo="/login"/>
                </div>
            </div>
        </section>
        <img className="decorator" src="/line-1.svg" alt="Uma linha azul brilhante passa por todo a seção Hero do site"/>
        <section className="partners">
            <h2>Nossos parceiros</h2>
            <div className="util__wrapper--8rem">
                <img className="partners__partner" src="https://www.ifpb.edu.br/en/imagens/logotipos/ifpb.png" alt="Logo do IFPB da Paraíba"/>
            </div>
        </section>
        <section className="courses">
            <div className="courses__wrapper  util__wrappercolumn--2_4rem">
                <h1>Explore nossos cursos</h1>
                <div className="list__overflow">
                {
                    placeholderCardData.map((course) => (
                        <Card 
                            name={course.name}
                            description={course.description}
                            rating={course.rating}
                            isTrending={course.isTrending}/>
                    ))
                }
            </div>
                </div>
        </section>
        <Footer></Footer>
        </>
    )
}