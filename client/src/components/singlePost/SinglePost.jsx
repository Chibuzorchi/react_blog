import axios from "../../utils/axios";
import { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./singlePost.css";
import { useState } from "react";
import {Link} from "react-router-dom"
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export default function SinglePost() {
  const {state} = useLocation();
  const params = useParams();
  const {user} = useContext(Context);
  const {navigate} = useNavigate();
 
 

  const [post, setPost] = useState(state)
  
  useEffect(() => {
    console.log(post)
    const getPost = async () => {
      const res = await axios.get("/posts/" + params.postId);
      setPost(res.data)
    };
    getPost();
  },[]);


  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      console.log("working");
      navigate("/")
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
           <img src={post.photo} alt="" className="postImg"/>
        )}
       
        <h1 className="singlePostTitle">
           {post.title}
           {post.username === user?.username && (
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
            </div>
            )}
        </h1>

        <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author:
              <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
              </Link>
              </span>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>

        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  )
}
