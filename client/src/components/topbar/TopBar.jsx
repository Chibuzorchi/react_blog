import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
import './topbar.css'

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
            </li>

            <li className="topListItem">
            <Link className="link" to="/about"></Link>
            </li>

            <li className="topListItem">
            <Link className="link" to="/contact"></Link>
            </li>

            <li className="topListItem">
            <Link className="link" to="/write">POST</Link>
            </li>

            <li className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>

        </ul>
      </div>

      <div className="topRight">
        {user? (
          <img className="topImg" src={user.profilePic} 
          alt="jpeg" 
          />
        ) : (
          <ul className="topList">
    
            <li className="topListItem">
            <Link className="link" to="/login">LOGIN</Link>
            </li>

            <li className="topListItem">
            <Link className="link" to="/register">REGISTER</Link>
            </li>
          </ul>
        )
      }
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
