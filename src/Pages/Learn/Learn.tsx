import Header from "../../Components/Header/Header.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './Learn.scss'

type chapterProps = {
    topic: number,
    content: string
}

export default function Learn() {
    const { id, chapter, lesson } = useParams();
    const [classContent, setClassContent] = useState({});
    const [data, setData] = useState({
        id: 0,
        name: "",
        description: "",
        chapters: []
    });
    let success = false;

    // Fetch class data
    useEffect(() => {
        try {
            const content = fetch(
                `http://localhost:3000/api/course/${id}/chapter/${chapter}/${lesson}`)
                .then((res) => res.text())
                .catch((e) => console.log("Couldn't fetch because of ", e));
            setClassContent(content)
        } catch (e) {
            console.log("Couldn't fetch the course content.")
        }
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
                success = true;
            } catch (e) {
                console.log("Couldn't fetch the course content.")
            }
        }
        fetchData();
    }, []);


    const chapters = data.chapters.map((chapter: chapterProps) => {
        return <div className="chapters__list--chapter">{chapter.topic + " - " + chapter.content ?? ""}</div>
    })


    return(
        !success ?
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
                            <div>
                                {chapter}
                            </div>
                        )) }
                    </div>
                </section>
                <section className="document">
                    <article className="document__content">
                        <h1>Desvendando o Phishing</h1>

                        <h2>O que exatamente é?</h2>

                        <p>Phishing é uma forma de ataque cibernético sofisticada que se baseia em técnicas de engenharia social para induzir indivíduos a revelarem informações confidenciais, como senhas, dados bancários e informações pessoais. Este método malicioso geralmente se manifesta na forma de mensagens de e-mail, mensagens instantâneas ou páginas da web fraudulentas, que são habilmente projetadas para se assemelhar a comunicações legítimas de entidades confiáveis.</p>
                        <p>O termo "phishing" é derivado da palavra em inglês "fishing" (pesca), refletindo a analogia de lançar iscas para atrair usuários desavisados. Os atacantes empregam uma variedade de táticas persuasivas, como urgência fictícia, alegações de atividades suspeitas em contas online ou solicitações aparentemente legítimas de atualizações de informações, para manipular as vítimas e obter acesso não autorizado a dados sensíveis.</p>
                        <p>A sofisticação crescente das técnicas de phishing torna imperativo que os usuários estejam constantemente vigilantes, adotem práticas de segurança online e estejam cientes dos sinais indicativos desse tipo de ameaça digital. Medidas como verificação cuidadosa de remetentes, análise crítica de mensagens e a utilização de soluções de segurança digital são essenciais para mitigar os riscos associados ao phishing e proteger a integridade das informações pessoais e empresariais.</p>

                        <p>O phishing, uma forma avançada de ataque cibernético, representa uma ameaça crescente na paisagem digital contemporânea. Este método engenhoso explora as vulnerabilidades humanas, empregando técnicas de engenharia social para persuadir indivíduos a divulgar informações confidenciais, como senhas, dados bancários e informações pessoais sensíveis. A origem do termo "phishing" está na palavra em inglês "fishing" (pesca), refletindo a estratégia de lançar iscas digitais para atrair usuários desatentos.</p>
                        <p>Os perpetradores do phishing utilizam uma variedade de abordagens enganosas, como a criação de mensagens de e-mail convincentes, mensagens instantâneas ou até mesmo a construção de páginas da web fraudulentas que se assemelham de maneira extraordinária a comunicações autênticas de instituições confiáveis. Táticas como a criação de uma sensação de urgência fictícia, alegações de atividades suspeitas em contas online ou solicitações aparentemente legítimas para atualizações de informações são frequentemente incorporadas para manipular as vítimas e obter acesso não autorizado a informações sigilosas.</p>
                        <p>À medida que as técnicas de phishing evoluem em complexidade, é imperativo que os usuários adotem uma postura proativa em relação à segurança online. Práticas como a verificação minuciosa de remetentes, uma análise criteriosa de mensagens recebidas e a implementação de soluções de segurança digital robustas são essenciais para mitigar os riscos associados ao phishing. A conscientização constante sobre os sinais reveladores dessas ameaças digitais é crucial para preservar a integridade das informações pessoais e empresariais em um ambiente digital cada vez mais interconectado.</p>

                    </article>

                    <div dangerouslySetInnerHTML={{__html: classContent}}></div>
                </section>
            </main>
        </>
        :
        <h1>Curso não encontrado.</h1>
    )
}