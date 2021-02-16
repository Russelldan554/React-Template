import axios from 'axios';

export const getArticle = async () => {
    try {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random() * Math.floor(100))}`);
        if (data?.data) return data.data;
        throw new Error('No data recieved')
        
    } catch (error) {
       throw new Error('Api failure')
    }    
}