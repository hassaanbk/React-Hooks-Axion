import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(res => setPosts(res.data))
        .catch(err => console.error(err))
    }, [])
    return (
        <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul>
    )
}

export default Posts;