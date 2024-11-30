import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="mainFooter">
      <Link to="https://www.instagram.com">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
          alt="instagram"
        />
      </Link>
      <Link to="https://www.facebook.com">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
          alt="facebook"
        />
      </Link>
      <Link to="https://x.com/?lang=en">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png"
          alt="twitter"
        />
      </Link>
    </div>
  );
}

export default Footer;
