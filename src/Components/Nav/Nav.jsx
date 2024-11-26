import navData from "../../Constants/navItems";

import "./Nav.css";

function Nav({ setPath, setSource }) {
  function dataIdentify(path, source, name) {
    setPath(path);
    setSource(source);
    navData.map((elm) =>
      elm.name === name ? (elm.active = true) : (elm.active = false)
    );
  }

  return (
    <div>
      <ul>
        {navData.map((elm, index) => (
          <li
            key={index}
            className={elm.active ? "liSelected" : null}
            onClick={() => dataIdentify(elm.path, elm.source, elm.name)}
          >
            {elm.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
