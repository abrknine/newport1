import cartapp from "../assets/cartapp.jpg";
import codingbootcamp from "../assets/codingbootcamp.jpg";
import foodhub from "../assets/foodhub.jpg";
// import guessgame from "../assets/guessgame.jpg";
// import textutiles from "../assets/textutiles.jpg";
import piggame from "../assets/piggame.jpg";
import screenshot1 from "../assets/Screenshot (441).png";
import screenshot2 from "../assets/Screenshot (444).png";


const Workcarddata=[ 
  {
    
    imgsrc: screenshot1,
    description: "An spicemen porfolio to gain experience in  tailwindcss i learned making dynamic components here ",
    title:"Porfolio(Spiecemen)",
    
    tags: ["React" ,"Tailwind"],
    demoLink: "https://abhi-e-folio.vercel.app/",
    codeLink: "https://github.com/abrknine/abhi-e-folio"
    
  },
  {
    imgsrc: screenshot2,
    description: "An app for reading daily news, i made this by calling news api in both class as well as functional based componenet i learned componentdid mount methods here",
    title:"News-app",
    tags: ["React" ,"Bootstrap"],
    demoLink: "https://github.com/abrknine/piggame.github.io",
    codeLink: "https://github.com/abrknine/news-app",
    
  },
  {   
      
      imgsrc: cartapp,
       title:"Cart-app",
       description: "An cart app to add and remove items we can add prices ang quantity to items too and get the total amount to pay",
      tags: ["React",  "Bootstrap"],
      demoLink: "http://abhi-kart.vercel.app/",
      codeLink: "https://github.com/abrknine/abhi_kart"
    },
      {
        imgsrc:  codingbootcamp,
        title:"Coding-Bootcamp",
         description: "A coding bootcamp for kids ,I design and code by me it was last internship work",
        tags: ["Html","css" ,"vanilla-js"],
        demoLink: "https://codingbootcamp3.vercel.app/",
        codeLink: "https://github.com/abrknine/codingbootcamp3",
      },
      {
        imgsrc: foodhub,
         description: "A food website with lots of flex work and cards",
        title:"Food-website",
         
        tags: ["Html", "css"],
        demoLink: "https://foodwebsite-github-io.vercel.app/",
        codeLink: "https://github.com/abrknine/foodwebsite.github.io",
      },
      {
        imgsrc: piggame,
         description: "A dice game  for two players where who gets 50 first wins the game",
        title:"Pig-game",

        tags: [ "Html", "Css","vanilla-js"],
        demoLink: "https://piggame-github-io.vercel.app/",
        codeLink: "https://github.com/abrknine/piggame.github.io",
      },
] 
export default Workcarddata