import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import HeaderLearn from "../../Components/HeaderLearn/HeaderLearn.tsx";
import Button from "../../Components/Buttons/Button.tsx";
import './Learn.scss'

type chapterProps = {
    topic: number | undefined,
    content: string
}

export default function Learn() {
    const { id, chapter  } = useParams();
    const [success, setSuccess] = useState(false);
    const [classContent, setClassContent] = useState({});
    const [data, setData] = useState({
        id: 0,
        name: "",
        description: "",
        chapters: [],
        hasSimulator: false
    });

    // TODO: Make it its own hook
    // Fetch class markdown data
    useEffect(() => {
        const fetchData = async () => {
            try {
                fetch(
                    `http://localhost:3000/api/course/${id}/chapter/${chapter}`)
                    .then((res) => res.text())
                    .then((content) => setClassContent(content))
                    .catch((e) => console.log("Couldn't fetch because of ", e));
                setSuccess(true);
            } catch (e) {
                console.log("Couldn't fetch the course's markdown content.");
                setSuccess(false);
            }
        }
        fetchData();
    }, []);

    // TODO: Make it its own hook
    // Fetch general course data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const content = await fetch(
                    `http://localhost:3000/api/course/${id}`)
                    .then((res) => res.json())
                    .catch((e) => {console.log("Couldn't fetch because of ", e); return;});
                setData({
                    ...data,
                    name: content.name,
                    description: content.description,
                    chapters: content.chapters,
                    hasSimulator: content.hasSimulator
                })
                setSuccess(true);
            } catch (e) {
                console.log("Couldn't fetch the course content.")
                setSuccess(false);
            }
        }
        fetchData();
    }, []);

    const goTo: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const target = e.target as HTMLElement | null;
        window.location.href=`./learn/${id}/${target?.getAttribute("data-chapter") ?? 1}`;
    }

    const chapters = data.chapters.map((lesson: chapterProps) => {
        return <div
            key={lesson.topic}
            className={"chapters__list--chapter" + (lesson.topic == chapter ? " chapters__list--chapter--active" : "")}
            onClick={goTo}
            data-chapter={lesson.topic}
        >{lesson.topic + " - " + lesson.content ?? ""}</div>
    })


    return(
        success ?
        <>
            <HeaderLearn />
            <main className="main-wrapper">
                <section className="chapters">
                    <div className="chapters__overview">
                        <span className="chapters__overview--coursetype">EDUCATION</span>
                        <span className="chapters__overview--title">{data.name}</span>
                        <span className="chapters__overview--description">{data.description}</span>
                    </div>
                    { data.hasSimulator ? 
                        <div className="chapters__interactive">
                            <Button size="XL" buttonText="Iniciar o simulador" />
                        </div>
                        : null
                    }
                    
                    <h2>Capítulos</h2>
                    <div className="chapters__list">
                        {chapters.map((chapter, index) => (
                          <div key={index}>
                              { chapter }
                          </div>
                        )) }
                    </div>
                </section>
                <section className="document">
                    <article className="document__content" dangerouslySetInnerHTML={{__html: classContent}}></article>
                </section>
            </main>
        </>
        :
        <h1 className="notfound">404 : Curso não encontrado.</h1>
    )
}