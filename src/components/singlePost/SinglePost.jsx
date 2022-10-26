import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <h1 className="singlePostTitle">
            Welcome to my World
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
        </h1>

        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Chinonso Chibuzor</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>

        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur itaque quae alias vel nihil, illum, magni laudantium laboriosam perspiciatis voluptatem doloribus assumenda illo quas officiis consequuntur, reprehenderit error sit velit?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur itaque quae alias vel nihil, illum, magni laudantium laboriosam perspiciatis voluptatem doloribus assumenda illo quas officiis consequuntur, reprehenderit error sit velit?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur itaque quae alias vel nihil, illum, magni laudantium laboriosam perspiciatis voluptatem doloribus assumenda illo quas officiis consequuntur, reprehenderit error sit velit?
            </p>
      </div>
    </div>
  )
}
