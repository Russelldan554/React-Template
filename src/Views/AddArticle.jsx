import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from '../Store/Articles/Reducer'
import { useHistory } from 'react-router-dom'

const AddArticle = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleAddArticle = async () => {
        dispatch(addArticle({ title, body }))
        history.push('/');
    }

    return (
        <div>
            <label>Title</label>
            <input onChange={(e) => setTitle(e.target.value) } type='text'/>
            <br /><br />

            <label>Body</label>
            <textarea onChange={(e) => setBody(e.target.value) } />
            <br /><br />
            
            <button onClick={() => handleAddArticle()}>Add</button>
        </div>
    );
}

export default AddArticle;