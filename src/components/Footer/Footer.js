import React from "react";
import "./Footer.css";
import Typography from "@mui/material/Typography";

import resumeDate from "../../utils/resumeDate";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeDate.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and Developed by{" "}
          <a href="/" target={"_blank"}>
            {" "}
            Salman Fazal
          </a>
          <br />
          Clone idea from{" "}
          <a href="https://themeforest.net/" target={"_blank"}>
            Travonline
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
