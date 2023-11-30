import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './style.scss'

const DescContent = [
    {
        id: 1,
        name: "Malwares, Ransomwares e outros vírus",
        teacher: ["Julia Beatriz", "Camilly Souza"],
        dataRelease: "26/11/2023",
        bannerTitle: "Curso completo de Malwares, Ransomwares e outros vírus",
        bannerText: "Aulas Completas de Malwares. Saiba como se proteger e mitigar tais ataques em ambientes empresariais.",
        card_content: [
            {
                topico: 1,
                content: "Aprenda a importância de se ter um ambiente seguro",
            },
            {
                topico: 2,
                content: "Aprenda a identificar os tipos de Malware",
            },
            {
                topico: 3,
                content: "Aprenda os danos que um Malware pode causar",
            },
            {
                topico: 4,
                content: "Aprenda a identificar e solucionar vulnerabilidades de Malware em um ambiente corporativo",
            }
        ]
    }
];

const PreviewCourse = () => {
    return (
        <>
            <Header />
            <div className="banner">
                <div className="banner__title">
                    <p>Aprenda {DescContent[0].name}</p>
                </div>
                <div className="banner__subtitle">
                    <p>{DescContent[0].bannerText}</p>
                </div>

               <div className="banner__description">
                    <p>Criado por <span>{DescContent[0].teacher[0]}</span> e <span>{DescContent[0].teacher[1]}</span></p>
                    <br />
                <section className='banner__description__lang'>
                    <p>Última atualização em {DescContent[0].dataRelease}</p>
                    <p>Idioma: Português [Brasil]</p>
                </section>
               </div>
            </div>

            {/* <div className="card">
                <div className="card__title">
                    O que você aprenderá
                </div>
                <div className="card__description">
                    {DescContent[0].card_content.map((item) => (
                        <div key={item.topico}>
                            <p>{`Tópico ${item.topico}: ${item.content}`}</p>
                        </div>
                    ))}
                </div>
            </div> */}
        <Footer />
        </>
    );
};

export default PreviewCourse;