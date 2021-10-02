import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">About</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="https://drive.google.com/file/d/14MUCM86yyDohUOIUt2Rb2vFCATS84wY3/view?usp=sharing">Resume</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
