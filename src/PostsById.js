import React, {useEffect, useState} from "react";
import axios from 'axios';

function PostsById() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setPost(res.data))
        .catch(err => console.error(err))
    })
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <div>{post.title}</div>
        </div>
    )
}

export default PostsById;