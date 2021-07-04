import {useContext} from 'react';
import {createContext} from "react";

const images = ["C:\Tech-carrer\React-Jacob\frontfolio\public\Haim.jpeg"]
export const ImagesContext = createContext(images);
export const ImagesContextProvider = ImagesContext.Provider;

export function SetImagesContext(){
  return useContext(ImagesContext);
}

const coverImages = [
"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
]
export const CoverImagesContext = createContext(coverImages);
export const CoverImagesContextProvider = CoverImagesContext.Provider;

const digitalCv = "Wrote and designed marketing projects.";
const programCv = "Learn programming in many programming languages like: HTML, CSS, JavaScript, React";
const fitnessCv = "Experience in fitness industry as a personal trainer and gym instructor";
const cvContext = [digitalCv,programCv,fitnessCv];

export function SetCoverImagesContext(){
  return  useContext(CoverImagesContext);
}

export const CvContext = createContext(cvContext);
export const CvContextProvider = CoverImagesContext.Provider;

export function SetCvContext(){
  return useContext(CvContext);
}

const subjects = [
  { 
     header:"Client", 
     titles: ["HTML", "CSS", "javascript"],
     image:coverImages[0],
     progress:[50,80,40]
  }
,
  {
      header:"Server",
      titles:["CSharp", "NodeJs", "MVC"],
      image:coverImages[1],
      progress:[90,80,60]
  }
,
  {
      header:"Social-Media",
      titles:["FacebookAds", "InstagramAds", "YoutubeAds"],
      image:coverImages[2],
      progress:[80,85,70]
  },

  {
    header:"Fitness",
    titles:["Personal-Trainer", "Gym-Insturctor"],
    image:coverImages[3],
    progress:[80,85,70]
},

{
  header:"Volunteer",
  titles:["Bne Akiva", "field-nation-society"],
  image:coverImages[4],
  progress:[80,85]
},
{
  header:"Hobbies",
  titles:["play soccer", "Exercise"],
  image:coverImages[5],
  progress:[100,100]
}
];

export const SkillsContext = createContext(subjects);
export const SkillsContextProvider = SkillsContext.Provider;

export function SetSkillsContext(){
  return useContext(SkillsContext);
}

const ProjectParagraph = {
  movies:"My first movie app I using props, use-state and events",
  office:"Office app using react-router-dom, useState and UseContext. ",
  HallOfFame:"The Hall of Fame of football world cups. using HTML5 and CSS3 only"
}

export const PortfolioContext = createContext(ProjectParagraph);
export const PortfolioContextProvider = PortfolioContext.Provider;

export function SetPortfolioContext(){
  return useContext(PortfolioContext);
}





