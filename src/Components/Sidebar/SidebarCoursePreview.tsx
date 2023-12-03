import './style.scss'
import React from 'react'
import DescContent from '../../Pages/PreviewCourse/PlaceholderDesc'
import { Heart, Cart, Share } from 'react-bootstrap-icons'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import Button from '../Buttons/Button'

export const SidebarCoursePreview = (props: any) => {

    const [price, setPrice] = useState('');

    useEffect(() => {
      if (!isNaN(props.price)) {
        const priceAsFloat = parseFloat(props.price);
  
        const formattedPrice = priceAsFloat.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        });
  
        setPrice(formattedPrice);
      }
    }, [props.price]);
    
    return (
        <>
            <div className="sidebar">
                <div className="sidebar__cover">
                    <img src={props.image} alt="Capa do curso" />
                </div>

                <div className="sidebar__title">
                    <h3>{props.title}</h3>
                </div>

                <div className="sidebar__price">
                    <p>{price}</p>
                </div>

                
                <div className="sidebar__buttons">
                    <div className="sidebar__cart">
                        <Cart />
                    </div>
                    <div className="sidebar__buttons__heart">
                        <Heart />
                    </div>
                    <div className="sidebar__buttons__share">
                        <Share />
                    </div>
                </div>
            </div>
        </>
    )
}