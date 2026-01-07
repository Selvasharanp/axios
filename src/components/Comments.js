import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API="https://jsonplaceholder.typicode.com/comments"
function Comments() {

  const [comments,setComment]=useState([]);

  useEffect(() =>{
    axios.get(API)
      .then(res =>{
        setComment(res.data)
      })
  },[])
  return (
    <div>
        <h3>Comments</h3>

        <table className='table table-bordered'>
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>BODY</th>
            </thead>
            <tbody>
                {comments.map(comment => (
                    <tr key={comment}>
                        <td>{comment.id}</td>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Comments