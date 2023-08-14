import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        setTimeout(() => {

            axios.get(url, { cancelToken: source.token })
                .then(res => {
                    console.log('>>>>check res', res.data)
                    let data = res.data ? res.data : []
                    setTimeout(() => {
                        setData(data)
                        setIsLoading(false)
                    }, 2000)
                })
                .catch(function (thrown) {
                    if (axios.isCancel(thrown)) {
                        console.log('Request canceled', thrown.message);
                    } else {
                        // handle error
                        setIsError(true)
                        setIsLoading(false)
                    }
                })
        }, 1000)
        return () => {
            source.cancel('Operation canceled by the user.');
        }

    }, [url])

    return {
        data, isLoading, isError
    }
}

export default useFetch;