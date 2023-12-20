import Header from '../../Components/Header/Header';
import Button from "../../Components/Buttons/Button";
import Card from '../../Components/Card/Card';
import Footer from '../../Components/Footer/Footer';
import CourseCard from "../../Types/CourseCard.ts";
import './Home.scss';
import useCourses from "../../Hooks/useCourses.tsx";

export default function Home()
{
    const data = useCourses();

    return (
        <>
        <Header />
        <section className="hero">
            <div className="hero__container">
                <div className="util__wrappercolumn--4rem">
                    <span className="hero__subtitle">Na KyberTrain você tem</span>
                    <span className="hero__title">Aprendizado que te <span className="hero__feature">protege</span></span>
                </div>
                <div className="util__wrapper--1_6rem">
                    <Button size="XL" buttonText="Cadastrar" isLink={true} redirects={true} goTo="/login"/>
                    <Button size="XL" buttonText="Entrar" redirects={true} goTo="/login"/>
                </div>
            </div>

            <div className="floating-logo__wrapper">
                <img className="floating-logo" src="/logo-alt.png" alt="Logo flutuante da Kybertrain"/>
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
            <div className="courses__wrapper">
                <div className="util__wrappercolumn--8rem">
                    <h1>Cursos</h1>
                    <h2>Explore nossos cursos</h2>
                </div>
                <div className="list__overflow">
                {
                    data.map((course: CourseCard) => (
                        <Card
                            key={course.id}
                            id={course.id}
                            name={course.name}
                            description={course.description}
                            rating={course.rating}
                            isTrending={course.isTrending}
                            bannerImg={course.bannerImg}
                        />
                    ))
                }
            </div>
                </div>
        </section>
        <Footer></Footer>
        </>
    )
}