import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);

   
        useEffect(()=> {
        
        const abortCont = new AbortController();
        fetch(url,{signal: abortCont.signal})
            .then(res => {
                return res.json();
            }).then((data) => {
                console.log(data)
                setData(data);
                setError(null);
                setIsPending(false);
            })
            .catch(err => {
                if (err.name === 'AbortError')
                {
                    console.log("error occured")
                }
                else{
                setError(err.message);
                console.log("issue in this")
                setIsPending(false);
                }
            })
            return () => abortCont.abort()
    },[url]);

    return {data,isPending,error}
}
 
export default useFetch;