import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

const AddArticle = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    return (
        <div>
            <label>Title</label>
            <input onChange={(e) => setTitle(e.target.value) } type='text'/>
            <br /><br />

            <label>Body</label>
            <textarea onChange={(e) => setBody(e.target.value) } />
            <br /><br />
            
            <button onClick={() => dispatch()}>Add</button>
        </div>
    );
}

export default AddArticle;