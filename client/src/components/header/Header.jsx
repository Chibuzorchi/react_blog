import  './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">Tech-Life</span>
        <span className="headerTitleLg">Blog</span>
      </div>
        <img src="https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="headerImg" />
    </div>
  )
}
