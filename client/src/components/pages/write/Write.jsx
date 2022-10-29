import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>

        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text"
            className="writeInput writeText"
            ></textarea>
        </div>

        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
