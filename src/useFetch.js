import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);

   
        useEffect(()=> {
        fetch(url)
            .then(res => {
                return res.json();
            }).then((data) => {
                console.log(data)
                setData(data);
                setError(null);
                setIsPending(false);
            })
            .catch(err => {
                setError(err.message);
                console.log("issue in this")
                setIsPending(false);
            })
    },[url]);

    return {data,isPending,error}
}
 
export default useFetch;