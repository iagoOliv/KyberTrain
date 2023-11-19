import React from 'react';
import './Card.scss';
import Button from '../Buttons/Button';
import { Star, StarFill } from 'react-bootstrap-icons';

interface CardProps {
    name:string,
    description:string,
    rating:number,
    isTrending:boolean
}

export default function Card({name, description, rating, isTrending}:CardProps) {
    const stars = []
    
    for (let i = 0; i < Math.round(rating); i++) {
        stars.push(<StarFill fill="#3b82f6" />)
    } for (let i = stars.length; i < 5; i++) {
        stars.push(<Star />)
    }

    return (
        <article className="card">
            { isTrending ? <span className="label card__label">Trending</span> : null}
            <div className="card__image">
                <img className="card__image--source" src="https://iptrust.com.br/wp-content/uploads/2023/10/phishing.png" alt="Course banner"></img>
            </div>
            <div className="card__header">
                <h3 className="card__title">{name}</h3>
                <div className="rating">
                    <span className="rating__text"> {rating} </span>
                    <div className="rating__stars">
                        stars
                    </div>
                </div>
            </div>
            <p className="card__description">
                {description}
            </p>
            <div className="card__buttons">
                <Button size="XL" buttonText="Começar"></Button>
                <Button size="XL" buttonText="" info={true}></Button>
            </div>
        </article>
    )
}