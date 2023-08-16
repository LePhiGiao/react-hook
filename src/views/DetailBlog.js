import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "../Customize/fetch";
import './DetailBlog.scss'

const DetailBlog = () => {
    let { id } = useParams()
    const navigate = useNavigate();
    const { data: dataBlogDetail, isLoading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log(dataBlogDetail)
    const handleBack = () => {
        navigate('/blog')
    }

    return (
        <>
            <button onClick={() => handleBack()}>Back</button>
            {isLoading === true ? <div>Loading data...</div>
                :
                <div className='blog-detail'>
                    {dataBlogDetail &&
                        <>
                            <div className="title">Title: {dataBlogDetail.title}</div>
                            <div className="content">Content: {dataBlogDetail.body}</div>
                        </>
                    }
                </div>
            }
        </>
    )
}

export default DetailBlog;