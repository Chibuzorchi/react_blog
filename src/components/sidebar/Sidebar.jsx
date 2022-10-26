import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <p>My name is Chinonso and I'm a Quality Assurance Engineer with a passion for software development</p>
      </div>

      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Fashion</li>
        <li className="sidebarListItem">Life Style</li>
        <li className="sidebarListItem">Movies</li>
      </ul>
      </div>

    <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
      <i className="sidebarIcon fa-brands fa-square-facebook"></i>
      <i className="sidebarIcon fa-brands fa-square-twitter"></i>
      <i className="sidebarIcon fa-brands fa-square-instagram"></i>
      <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
    </div>
    </div>

    </div>
  )
}
