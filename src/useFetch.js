import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        const abortcontroller = new AbortController();
        setTimeout(() => {
            fetch(url,{signal:abortcontroller.signal}).then(response => {
                if(!response.ok){
                    throw Error("Data fetching is not Found");
                }
                return response.json();
            }).then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            }).catch((e)=>{
               if(e.name ==='AbortError'){
                console.log("fetch absorted")
               }else{
                setIsPending(false);
                setError(e.message);
               }
            })
        },1000);
        return ()=>abortcontroller.abort();
    }, [url]);
    return {data, isPending, error};
}
 
export default useFetch ;