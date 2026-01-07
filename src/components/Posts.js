import React, { useEffect, useState } from 'react'
import axios from 'axios'

// MOCK API URL
const API_URL = "https://jsonplaceholder.typicode.com/posts"

function Posts() {

  // State to store posts
  const [posts, setPosts] = useState([])
  const [title,setTitle]=useState("")
  const [body,setBody]=useState("")

  // Runs once when component loads
  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        setPosts(res.data)
      })
  }, [])
  const addPost = () => {
    if(!title || !body)
    {
        alert("Field should not be empty")
        return;
    }
    axios.post(API_URL,{
        title,
        body,
        userId:1
    })
    .then(res =>{
        setPosts([...posts,res.data]);
        setTitle("");
        setBody("");
        alert("Post Added Succesfully")
    })  
}
const deletePost = (postDel) => {
    setPosts(posts.filter(p => p !== postDel))
    }
  return (
    <div>
      <h3>Post List</h3>

      <table className="table table-bordered">
        <thead>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
        </thead>

        <tbody>
          {posts.map(post => (
            <tr key={post}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            <td>
            <button onClick={() => deletePost(post)} className='btn btn-primary'>
                Delete
            </button>
            </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td>
                    <input
                    className='form-control'
                    placeholder='Enter Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </td>
                <td>
                    <input
                    className='form-control'
                    placeholder='Enter body'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    />
                </td>
                <td>
                    <button className='btn btn-primary' onClick={addPost}>Add</button>
                </td>
            </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Posts
