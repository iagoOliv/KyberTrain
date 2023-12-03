import "./Explore.scss";
import placeholderCoursesData from "../../PlaceholderData";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";

function Explore() {
    return (
        <>
            <Header/>
            <div className="sub__header">
                {/* fazer a estrutura do cabeçalho onde se encontram os tópicos de cursos */}
            </div>
            <main>
                <section className="container__hero">
                    <span>Selecione o curso que melhor se<br/>encaixa com você</span>

                    <section className="categorypicker">
                        <div className="categorypicker__course categorypicker__course--blue">
                            <div className="categorypicker--blue categorypicker__course--sidebar"></div>
                            <span>Proteção Online</span>
                        </div>
                        <div className="categorypicker__course categorypicker__course--red">
                            <div className="categorypicker--red categorypicker__course--sidebar"></div>
                            <span>Malwares</span>
                        </div>
                        <div className="categorypicker__course categorypicker__course--yellow">
                            <div className="categorypicker--yellow categorypicker__course--sidebar"></div>
                            <span>Engenharia Social</span>
                        </div>
                        <div className="categorypicker__course categorypicker__course--violet">
                            <div className="categorypicker--violet categorypicker__course--sidebar"></div>
                            <span>Engenharia Reversa</span>
                        </div>
                    </section>
                </section>

                <section className="container__main">
                    <div className="container__main__title">
                        <h1>Para inciantes e estudantes</h1>
                    </div>
                    <div className="container__main__content">
                        <div className="container__main__content__cards">
                            {
                                placeholderCoursesData.map((course) => (
                                    <Card
                                        id={course.id}
                                        name={course.name}
                                        description={course.description}
                                        rating={course.rating}
                                        isTrending={course.isTrending}
                                        bannerImg={course.bannerImg}/>
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section className="container__main">
                    <div className="container__main__title">
                        <h1>Para empresas</h1>
                    </div>
                    <div className="container__main__content">
                        <div className="container__main__content__cards">
                            {
                                placeholderCoursesData.map((course) => (
                                    <Card
                                        id={course.id}
                                        name={course.name}
                                        description={course.description}
                                        rating={course.rating}
                                        isTrending={course.isTrending}
                                        bannerImg={course.bannerImg}/>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Explore