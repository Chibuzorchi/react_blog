import { useState } from "react"
import "./write.css"
import axios from "../../../utils/axios"
import { useContext } from "react"
import { Context } from "../../../context/Context"
import { useNavigate } from "react-router-dom"


export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc
    };

    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        const fileRes = await axios.post("/upload", data);
        const { url, success } = fileRes.data;
 
        console.log(url);
        if(success){
          newPost.photo = url
        }
        const res = await axios.post("/posts", newPost);
        console.log(res.data)
        if(res.data.success) {

          navigate("/post/" + res.data.data._id, {state: res.data.data})
        }

        
      } catch (err) {
        console.error(err);
      }
    }
   };

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
        
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">

            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>

            <input type="file" id="fileInput" 
            style={{display: "none"}}
            onChange={(e) => setFile(e.target.files[0])}
            />
            <input type="text" placeholder="Title" 
            className="writeInput" autoFocus={true} 
            onChange = {e => setTitle(e.target.value)}
            />
        </div>

        <div className="writeFormGroup">
            <textarea placeholder="Let the world hear your story..." type="text"
            className="writeInput writeText"
            onChange = {e => setDesc(e.target.value)}
            ></textarea>
        </div>

        <button className="writeSubmit" type="submit">Post</button>
      </form>
    </div>
  );
}
