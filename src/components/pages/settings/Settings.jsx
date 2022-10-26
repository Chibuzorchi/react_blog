import Sidebar from "../../sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://images.pexels.com/photos/10431397/pexels-photo-10431397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>

            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>

          <label>Username</label>
          <input type="text" placeholder="Chinonso" />
          <label>Email</label>
          <input type="email" placeholder="chinonso@gmail.com" />
          <label>Username</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
