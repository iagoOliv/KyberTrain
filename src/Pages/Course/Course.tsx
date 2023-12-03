import {useEffect, useState} from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {useParams} from "react-router-dom";
import PlaceholderCoursesData from "../../PlaceholderData";


const course = () => {
    const [data, setData] = useState({
        id: 0,
        name: "",
        description: "",
    });
    const { id } = useParams();

    useEffect(() => {
        let res:any;
        if (typeof id === "string" && (parseInt(id) >= 0 && parseInt(id) <= PlaceholderCoursesData.length)) {
            res = PlaceholderCoursesData[parseInt(id) - 1];
        } else {
            return;
        }
        setData({
            id: res.id,
            name: res.name,
            description: res.description,
        });
    }, []);

    return (
        <>
            <Header />
            <section className="course">
                <span>{data.id}</span>
                <span>{data.name}</span>
                <span>{data.description}</span>
                <span>{data.name}</span>
                <span>{data.name}</span>
            </section>
            <Footer />
        </>
    )
}

export default course;