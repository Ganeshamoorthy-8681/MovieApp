// import web from "assets/website-icon-29482.png";
// import linkedIn from "assets/linkedin.png";
import CopyrightIcon from '@mui/icons-material/Copyright';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./app-footer.css";
export const AppFooter = () =>
{

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="company-info">
          <div className="name">CineSphere</div>
          <div className="description">Your Ultimate Destination for Movies & Tv shows </div>
        </div>

        <ul className="quick-links">
          <li className="link-title">Quick Links</li>
          <li> <a href="#">Movies</a> </li>
          <li> <a href="#">Tv Shows</a></li>
          <li> <a href="#">New Release</a></li>
          <li> <a href="#">top Rated</a></li>
        </ul>
        <ul className="quick-links">
          <li className="link-title">Quick Links</li>
          <li> <a href="#">Movies</a> </li>
          <li> <a href="#">Tv Shows</a></li>
          <li> <a href="#">New Release</a></li>
          <li> <a href="#">top Rated</a></li>
        </ul>
        <div className="connect-with-us">
          <div className="link-title"> Connect with us</div>
          <div className="content">
            <a href="#"> <LanguageIcon /> </a>
            <a href="#"> <LinkedInIcon /> </a>
          </div>


        </div>
      </div>
      <div className="footer-bottom">
        <CopyrightIcon></CopyrightIcon>  2025 CineSphere. All Rights Reserved
      </div>
    </div>
  );
};
