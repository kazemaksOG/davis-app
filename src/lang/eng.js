// Assets
import gameImage from '../assets/game_cover.png';
import websiteImage from '../assets/website_cover.png';
import chessImage from '../assets/chess.png';
import lunarImage from '../assets/lunar.jpg'
import cleaningImage from '../assets/cleaning_robot.jpg'
import videowindowImage from '../assets/videowindow.png'

export default {

  project_array: [
    {
      title: "High-voltage cleaning robot",
      text: "Created a cleaning robot with a team of engineers within 15 weeks!",
      image: cleaningImage,
      enable_link: false,
      enable_external_link: true,
      link_text: "Watch demo",
      link: "https://www.youtube.com/watch?v=Ib_79ZXPayM&feature=youtu.be",
    },
    {
      title: "Lunar Zebro",
      text: "Joined a team of ambitious engineers to program a space rover that will someday explore the moon!",
      image: lunarImage,
      enable_link: false,
      enable_external_link: true,
      link_text: "More information",
      link: "https://zebro.space",
    },
    {
      title: "Wayland Compositor",
      text: "Helped creating a Wayland compositor to display content on multiple transparent screens.",
      image: videowindowImage,
      enable_link: false,
      enable_external_link: true,
      link_text: "Company website",
      link: "https://www.videowindow.eu",
    },
    {
      title: "Online Chess",
      text: "An online chess application I created with my coursemate. It supports concurrent gaming using websockets!",
      image: chessImage,
      enable_link: false,
      enable_external_link: true,
      link_text: "Check repository",
      link: "https://github.com/gsegalini/chess-web-game",
    },
    {
      title: "AI Spaceship Race",
      text: "A side-scroller minigame in which the player tries to beat a pre-trained AI. The AI was trained using the magic of Neuroevolution.",
      image: gameImage,
      enable_link: true,
      enable_external_link: false,
      link_text: "Play!",
      link: "/game",
    },
    {
      title: "This Website",
      text: "A website I created for fun. The web-app is based on React.js library and hosted on Firebase. The website is also responsive, try resizing it!",
      image: websiteImage,
      enable_link: false,
      enable_external_link: false,
      link_text: "",
      link: "",
    },

  ],
  welcome: 'Welcome.',
  lang_switch:'lv',
  my_name: 'My name is Dāvis Kažemaks',
  this_is: 'And this is my website',
  about: 'About me',
  projects: 'Projects',
  check: 'Check out',
  personal: 'Personal information',
  personal_text: 'My name is Dāvis Kažemaks. I am from Latvia but currently residing in Delft, Netherlands. I have always enjoyed tinkering with computers and making projects that solve a problem or improve experience for me and people around me.',
  edu: 'Education',
  edu_text: 'I am currently pursuing a master\'s in Computer and Embedded Systems Engineering at Delft University of Technology. At TU Delft, I also obtained my Bachelor in Computer Science and graduated with Honors and Cum Laude. During my studies, I learned software engineering principles, testing, databases and too many programming languages.',
  exp: 'Experience',
  exp_text:'I received an internship as a Full Stack Developer in Emergn which was provided by the SpaceTEM program. I spent my days learning and using Javascript, CSS, React, Nodejs, Git, and many other tools for creating websites. During my university years, I additionally worked as a Teaching Assistant for the courses I excelled at, and was a Research Assistant for the confidential-fair-exchange project.',

  
}
