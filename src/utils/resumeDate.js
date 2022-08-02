import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";

export default {
  name: "Salman Fazal",
  title: "Full stack developer",

  birthday: "06th December 1999",
  email: " sam@gmail.com",
  address: "123 Test St",
  phone: " 123 456 789",

  socials: {
    Facebook: {
      link: "https://web.facebook.com/",
      text: "SamIsCoding",
      icon: <FacebookIcon />,
    },
    Twitter: {
      link: "https://th.linkedin.com/",
      text: "MyTwitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://web.facebook.com/",
      text: "MyLinkedin",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
  },
  about:
    "Nostrud dolore quis sit consectetur Lorem aliquip nisi dolor cupidatat dolor mollit sint. Et et do in incididunt reprehenderit id voluptate nisi id voluptate aliquip enim. Ex aliquip incididunt veniam exercitation cupidatat velit. Laboris ea laboris irure ut exercitation ea do ea non ullamco sunt. Exercitation occaecat id commodo id enim aute laborum aute deserunt mollit laboris sint. Ut aliqua sit ea dolor cupidatat nulla reprehenderit dolore adipisicing laborum aliquip non aute. Aute exercitation consequat non magna excepteur eu velit amet ad deserunt Lorem duis duis.\n\nNostrud dolore quis sit consectetur Lorem aliquip nisi dolor cupidatat dolor mollit sint. Et et do in incididunt reprehenderit id voluptate nisi id voluptate aliquip enim. Ex aliquip incididunt veniam exercitation cupidatat velit. Laboris ea laboris irure ut exercitation ea do ea non ullamco sunt. Exercitation occaecat id commodo id enim aute laborum aute deserunt mollit laboris sint. Ut aliqua sit ea dolor cupidatat nulla reprehenderit dolore adipisicing laborum aliquip non aute. Aute exercitation consequat non magna excepteur eu velit amet ad deserunt Lorem duis duis.",
  experiences: [
    {
      title: "Work 1",
      date: " 2018 Persent",
      description:
        "Enim consectetur nostrud amet duis nostrud aute fugiat occaecat consequat nostrud dolor aute enim.",
    },
    {
      title: "Work 2",
      date: " 2014 - 2015",
      description:
        "Enim consectetur nostrud amet duis nostrud aute fugiat occaecat consequat nostrud dolor aute enim.",
    },
    {
      title: "Work 3",
      date: "Aug 2016 - Sept 2018",
      description:
        "Enim consectetur nostrud amet duis nostrud aute fugiat occaecat consequat nostrud dolor aute enim.",
    },
  ],
  educations: [
    {
      title: "Education 1",
      date: " 2018 Persent",
      description:
        "Enim consectetur nostrud amet duis nostrud aute fugiat occaecat consequat nostrud dolor aute enim.",
    },
    {
      title: "Education 2",
      date: " 2014 - 2015",
      description:
        "Enim consectetur nostrud amet duis nostrud aute fugiat occaecat consequat nostrud dolor aute enim.",
    },
    {
      title: "education 3",
      date: "Aug 2016 - Sept 2018",
      description:
        "Enim consectetur nostrud amet duis nostrud aute fugiat occaecat consequat nostrud dolor aute enim.",
    },
  ],

  services: [
    {
      title: "Web Development",
      description: "I have a been a badass web developer for 10 years",
      icon: <WebOutlinedIcon />,
    },
    {
      title: "Branding Identity",
      description:
        "We will make you a brand that is catchy and leaves a trace.",
      icon: <AssignmentOutlinedIcon />,
    },
    {
      title: "Illustrator",
      description: "I have been working on illustrator design for 6 years.",
      icon: <WebOutlinedIcon />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJS",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "Java", "Python", "Solidity"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "My SQL Server", "MY SQL", "MogoDB"],
    },
    {
      title: "SouRCE CONTROL",
      description: ["Git", "GitHub", "SCRUM/Agile"],
    },
  ],

  projects: [
    {
      tag: "React",
      image: [
        "https://media.istockphoto.com/photos/watercolor-textured-background-picture-id887755698?k=20&m=887755698&s=612x612&w=0&h=UcvMcQg07D_WfBT88iOWWXMV5WMRXRM8nqJRXcySUNA=",
        "https://i.pinimg.com/originals/44/f3/ed/44f3ed6f2d1f2a6a3fe82ee58a045134.jpg",
      ],
      title: "React Project 1",
      caption: "A short description",
      description: "The is my project description. Please fill it in.",
      links: [
        { link: "https://www.google.com", icon: <YouTubeIcon /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "React",
      image: [
        "https://media.istockphoto.com/photos/watercolor-textured-background-picture-id887755698?k=20&m=887755698&s=612x612&w=0&h=UcvMcQg07D_WfBT88iOWWXMV5WMRXRM8nqJRXcySUNA=",
      ],
      title: "React Project 2",
      caption: "A short description",
      description: "The is my project description. Please fill it in.",
      links: [
        { link: "https://www.google.com", icon: <YouTubeIcon /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "Python",
      image: [
        "https://media.istockphoto.com/photos/watercolor-textured-background-picture-id887755698?k=20&m=887755698&s=612x612&w=0&h=UcvMcQg07D_WfBT88iOWWXMV5WMRXRM8nqJRXcySUNA=",
      ],
      title: "Python Project 1",
      caption: "A short description",
      description: "The is my project description. Please fill it in.",
      links: [
        { link: "https://www.google.com", icon: <YouTubeIcon /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "Java",
      image: [
        "https://media.istockphoto.com/photos/watercolor-textured-background-picture-id887755698?k=20&m=887755698&s=612x612&w=0&h=UcvMcQg07D_WfBT88iOWWXMV5WMRXRM8nqJRXcySUNA=",
      ],
      title: "Java Project 1",
      caption: "A short description",
      description: "The is my project description. Please fill it in.",
      links: [
        { link: "https://www.google.com", icon: <YouTubeIcon /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },
  ],
};
