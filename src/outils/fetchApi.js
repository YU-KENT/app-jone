import { useState,useEffect } from "react"

function FetchApi (url){
    const [datas, setDatas] = useState({})

    useEffect(() => {
        async function fetchData() {
        try{
            const response = await fetch(url)
            const data = await response.json()
            setDatas(data)


        }catch(err){
            console.log(err)
           
        }}
      
        fetchData()
    }, [url])

    return datas
}

export default FetchApi