import { useState, useEffect, useRef } from 'react';
import DescContent from './PlaceholderDesc';
import { SidebarCoursePreview } from '../../Components/Sidebar/SidebarCoursePreview';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExclamationCircleFill, Globe, Star, StarFill, StarHalf } from 'react-bootstrap-icons';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './PreviewCourse.scss';

function generateStars(rating: number) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);

    for (let i = 0; i < fullStars; i++) {
    stars.push(<StarFill fill="#3b82f6" />);
    }

    if (halfStars === 1) {
    stars.push(<StarHalf fill="#3b82f6" />);
    }

    for (let i = stars.length; i < 5; i++) {
    stars.push(<Star />);
    }

  return stars;
}

const PreviewCourse = () => {
    
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isExpanded && cardRef.current) {
            const newHeight = cardRef.current.scrollHeight;
            cardRef.current.style.height = `${newHeight}px`;

            // se altura de card ultrapassar 1000px, setar overflow-y: scroll
            if (newHeight > 1000) {
                cardRef.current.style.overflowY = 'scroll';
            }

        } else if (cardRef.current) {
            cardRef.current?.style.removeProperty('height');
        }
    }, [isExpanded]);

    const { id: courseId } = useParams<{ id: string }>();
    const [descContent, setDescContent] = useState<any>(null);
    const stars = generateStars(descContent?.rating || 0);
  
  useEffect(() => {
      if (courseId) {
      const course = DescContent.find(course => course.id === parseInt(courseId, 10));

      if (course) {
          setDescContent(course);
        }
    }
  }, [courseId]);

    if (!descContent || Object.keys(descContent).length === 0) {
        return <h1>Curso não encontrado</h1>;
    }

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="banner">
          <div className="banner__title">
            <p>Aprenda {descContent.name}</p>
          </div>
          <div className="banner__subtitle">
            <p>{descContent.bannerText}</p>
          </div>
          <div className="banner__description">
            <p>
              Criado por <span>{descContent.teacher[0]}</span> e <span>{descContent.teacher[1]}</span>
            </p>
            <div className="banner__ratings">
              <div className="banner__ratings__stars">{stars}</div>
                    {descContent.rating}
              </div>
            <br />
            <section className="banner__description__lang">
              <p>
                <ExclamationCircleFill /> Última atualização em {descContent.dataRelease}
              </p>
              <p>
                <Globe /> Português [Brasil]
              </p>
            </section>
          </div>
        </div>
        <aside>
          <SidebarCoursePreview image={descContent.image} price={descContent.price} />
        </aside>
      </div>
      <motion.div layout style={{ height: 'auto' }} transition={{ height: { ease: 'easeInOut' }, layout: { duration: '0.3' } }}>
        <div className={`card ${isExpanded ? 'expanded' : ''}`} ref={cardRef}>
          <div className="card__title">O que você aprenderá</div>
          <hr />
          <br />
          <div className="card__expand" onClick={handleExpand}>
            <a>{isExpanded ? 'Mostrar menos' : 'Mostrar mais'}</a>
          </div>
          {isExpanded && (
            <div className="card__description">
              <ul>
                {descContent.learnings.map((item: any) => (
                  <li key={item.content}>* {item.content}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default PreviewCourse;