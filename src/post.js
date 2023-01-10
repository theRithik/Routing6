import React from 'react';
import {Link } from 'react-router-dom'
const Post =()=>{
    return(
        <div>
             <div className="card ">
  <h5 className="card-header bg-primary">Post</h5>
  <div className="card-body">
    <h5 className="card-title">Post</h5>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   
    <h3>Java Script</h3>
                <Link to ={`/post/javascript?page=1`} className='btn btn-success'>Details</Link>
                <h3>Node Js</h3>
                <Link to={`/post/node?page=2`}  className='btn btn-success'>Details</Link>
                <h3>React Js</h3>
                <Link to={`/post/React?page=3`} className='btn btn-success'>Details</Link>
                </div>
            </div>
        </div>
    )
}
export default Post;