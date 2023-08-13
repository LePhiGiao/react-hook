import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            axios.get(url)
                .then(res => {
                    console.log(res)
                    let data = res.data.data ? res.data.data : []
                    setData(data)
                    setIsLoading(false)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    setIsError(true)
                    setIsLoading(false)
                })

        }, 1000)
    }, [url])
    return {
        data, isLoading, isError
    }
}

export default useFetch;