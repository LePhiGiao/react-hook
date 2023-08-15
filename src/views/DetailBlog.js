import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DetailBlog = () => {
    let { id } = useParams()
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/blog')
    }

    return (
        <>
            <div>Hello Detail Blog with id = {id}</div>
            <button onClick={() => handleBack()}>Back</button>
        </>
    )
}

export default DetailBlog;