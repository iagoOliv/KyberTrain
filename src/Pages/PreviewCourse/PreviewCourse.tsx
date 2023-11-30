import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import DescContent from './PlaceholderDesc'
import { ExclamationCircleFill, Star, StarFill, Globe, Check } from 'react-bootstrap-icons'
import './style.scss'

const PreviewCourse = () => {
    const stars = []
    
    for (let i = 0; i < Math.round(DescContent[0].rating); i++) {
        stars.push(<StarFill fill="#3b82f6" />)
    } for (let i = stars.length; i < 5; i++) {
        stars.push(<Star />)
    }

    const [isExpanded, setIsExpanded] = useState(false)

    const handleExpand = () => {
        setIsExpanded(!isExpanded)
    }

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

                    <div className="banner__ratings">
                            <div className="banner__ratings__stars">
                                    {stars}
                            </div>
                            {DescContent[0].rating}
                    </div>
                    <br />
                <section className='banner__description__lang'>
                    <p><ExclamationCircleFill /> Última atualização em {DescContent[0].dataRelease}</p>
                    <p><Globe /> Português [Brasil]</p>
                </section>
               </div>
            </div>

            <div className={`card ${isExpanded ? 'expanded' : ''}`}>
                <div className="card__title">
                    O que você aprenderá
                </div>
                <div className="card__description">
                    {DescContent[0].learnings.map((item) => (
                        <div key={item.topico}>
                            <p>{<Check />}{item.content}</p>
                        </div>
                    ))}
                </div>
            <div className="card__expand__blur">
            </div>
                <div className="card__expand"  onClick={handleExpand}>
                    <a>{isExpanded ? 'Mostrar menos' : 'Mostrar mais'}</a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PreviewCourse;