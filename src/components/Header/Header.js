import React from "react";
import "./Header.css";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram,
} from "@mui/icons-material";
// =============================component==================================
import resumeDate from "../../utils/resumeDate";
import CustomButton from "../Button/Button";

import { Link, NavLink, withRouter } from "react-router-dom";
import { keys } from "@mui/system";

const Header = (props) => {
  const pathName = props?.location?.pathName;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* Home link  */}
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link  */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          {/* Portfolio Link  */}
          <Nav.Link
            as={NavLink}
            to="/Portfolio"
            className={
              pathName == "/Portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeDate.socials).map((key) => (
            <a href={resumeDate.socials[key].link} target="_blank">
              {resumeDate.socials[key].icon}
            </a>
          ))}
        </div>
        <CustomButton text={"Hire Me"} icon={<Telegram />} />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
