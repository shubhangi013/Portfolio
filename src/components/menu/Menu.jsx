import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">About</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="https://drive.google.com/file/d/1JDuBTrE97-R-LUHD4smaXEL-R44JJ9kv/view?usp=sharing">Resume</a>
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
