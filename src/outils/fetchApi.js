import { useState,useEffect } from "react"

function FetchApi (url){
    const [data, setDatas] = useState({})
    const [isLoading, setLoading]=useState(true)
    useEffect(() => {
        async function fetchData() {
        try{
            const response = await fetch(url)
            const datas = await response.json()
            setDatas(datas)
            setLoading(false)

        }catch(err){
            console.log(err)
           
        }}
        setLoading(true)
        fetchData()
    }, [url])

    return {data,isLoading}
}

export default FetchApi