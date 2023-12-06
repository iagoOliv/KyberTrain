import Header from "../../Components/Header/Header.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './Learn.scss'

type chapterProps = {
    topic: number,
    content: string
}

export default function Learn() {
    /*
        Handle not found pages
    */
    const { id, chapter  } = useParams();
    const [success, setSuccess] = useState(false);
    const [classContent, setClassContent] = useState({});
    const [data, setData] = useState({
        id: 0,
        name: "",
        description: "",
        chapters: []
    });

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
                    chapters: content.chapters
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

    const chapters = data.chapters.map((chapter: chapterProps) => {
        return <div
            className="chapters__list--chapter"
            onClick={goTo}
            data-chapter={chapter.topic}
        >{chapter.topic + " - " + chapter.content ?? ""}</div>
    })


    return(
        success ?
        <>
            <Header></Header>
            <main className="main-wrapper">
                <section className="chapters">
                    <div className="chapters__overview">
                        <span className="chapters__overview--coursetype">EDUCATION</span>
                        <span className="chapters__overview--title">{data.name}</span>
                        <span className="chapters__overview--description">{data.description}</span>
                    </div>
                    <div className="chapters__list">
                        {chapters.map((chapter) => (
                          <>
                              {chapter}
                          </>
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