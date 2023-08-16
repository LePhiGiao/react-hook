import './AddNewBlog.scss'
import { useState } from 'react';

const AddNewBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = () => {
        if (!title) {
            alert('empty title');
            return;
        }
        if (!content) {
            alert('empty content');
            return;
        }
        console.log('>>>>>check: ', title, content)
    }

    return (
        <div>
            <div className="add-blog-container">
                <div className='add-blog-text'>-------Add New Blog---------</div>
                <div className='input-data'>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className='input-data'>
                    <label>Content:</label>
                    <input type="text" value={content} onChange={e => setContent(e.target.value)} />
                </div>
                <button type="submit" onClick={() => handleSubmit()}> Add</button>
            </div>

        </div>
    )
}

export default AddNewBlog;