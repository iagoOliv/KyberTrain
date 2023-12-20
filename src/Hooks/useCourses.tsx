import { useState, useEffect } from 'react';

function useCourses() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/courses`);
                if (!res.ok) {
                    throw new Error(`404: Couldn't fetch the courses data.`)
                }
                const resolve = await res.json();
                setData(resolve);
            } catch (e) {
                console.log("Couldn't fetch the courses data.")
            }
        }
        fetchData();
    }, []);
    return data;
}

export default useCourses;