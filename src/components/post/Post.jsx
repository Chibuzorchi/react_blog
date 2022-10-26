import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://images.pexels.com/photos/5795040/pexels-photo-5795040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life Style</span>
        </div>

        <span className="PostTitle">
            Lorem ipsum dolor sit amet consectetur.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
    </div>

    <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim perferendis maxime sunt eveniet nostrum vitae minima eligendi officia debitis corporis, nulla quia earum non modi quaerat vero omnis molestiae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim perferendis maxime sunt eveniet nostrum vitae minima eligendi officia debitis corporis, nulla quia earum non modi quaerat vero omnis molestiae.</p>
    </div>
  )
}
