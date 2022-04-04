import { useEffect, useState } from "react";

const useReveiws = () => {
    const [reveiws, setReveiws] = useState([]);

    useEffect(() => {
        fetch('reveiws.json')
            .then(res => res.json())
            .then(data => setReveiws(data))
    }, []);

    return [reveiws, setReveiws];
}

export default useReveiws;