import { useEffect, useState } from "react"

const FetchData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return data;
}

export default FetchData;