import useFetch from "../Customize/fetch"
import './Blog.scss'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Blog = () => {
    const { data: dataBlogs, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts')
    const navigate = useNavigate()

    const handleAddBlog = () => {
        navigate('/add-new-blog')
    }

    let newDataBlogs = []
    if (dataBlogs && dataBlogs.length > 0) {
        newDataBlogs = dataBlogs.slice(91)
    }
    return (
        <>
            <div><button className="btn-add-new" onClick={() => handleAddBlog()}>Add new Blog</button></div>
            <div className="blog-container">
                {newDataBlogs && newDataBlogs.length > 0 && newDataBlogs.map(item => {
                    return (
                        <div className="blog" key={item.id}>
                            <div className="title">{item.title}</div>
                            <div className="content">{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>Views Details</Link>
                            </button>
                        </div>
                    )
                })}
            </div>
            {isLoading === true &&
                <div style={{ textAlign: 'center', width: '100&' }}>Loading data ...</div>
            }

        </>
    )
}

export default Blog