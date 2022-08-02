import React from "react";
import "./Profile.css";
import { Typography } from "@mui/material";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";

// ====================Component=========================
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../Timeline/CustomTimeline";
import resumeDate from "../../utils/resumeDate";
import CustomButton from "../Button/Button";

// ======================Icon===============================
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GetAppIcon from "@mui/icons-material/GetApp";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile ">
      <div className="profile_name">
        <Typography className="name">{resumeDate.name}</Typography>
        <Typography className="title">{resumeDate.title}</Typography>
      </div>

      <figure className=" profile_image">
        <img src={require("../../assets/images/user.png")} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={resumeDate.name} />
          <CustomTimelineItem title="Title" text={resumeDate.title} />
          <CustomTimelineItem title="Email" text={resumeDate.email} />

          {Object.keys(resumeDate.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeDate.socials[key].text}
              link={resumeDate.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="button_container" sx={{ display: "flex" }}>
          <CustomButton text={"Download Cv"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
