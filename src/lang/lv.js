// Assets
import gameImage from '../assets/game_cover.png';
import websiteImage from '../assets/website_cover.png';
import chessImage from '../assets/chess.png';
import lunarImage from '../assets/lunar.jpg';
import cleaningImage from '../assets/cleaning_robot.jpg';
import videowindowImage from '../assets/videowindow.png';

export default {

  project_array: [
    {
      title: 'Augsta sprieguma tīrīšanas robots',
      text: 'Ar multidisplināru komandu, izveidojām tīrīšanas robotu 15 nedēļu laikā!',
      image: cleaningImage,
      enable_link: false,
      enable_external_link: true,
      link_text: 'Demonstrācija',
      link: 'https://www.youtube.com/watch?v=Ib_79ZXPayM&feature=youtu.be',
    },
    {
      title: 'Lunar Zebro',
      text: 'Pievienojos ļoti ambicioziem inženieriem, lai izveidotu robotu, kas kādu dienu staigās pa mēnesi.',
      image: lunarImage,
      enable_link: false,
      enable_external_link: true,
      link_text: 'Vairāk info',
      link: 'https://zebro.space',
    },
    {
      title: 'Wayland Compositor',
      text: 'Palīdzēju izveidot Wayland Compositor, lai rādītu attēlus uz vairākiem caurspīdīgiem ekrāniem.',
      image: videowindowImage,
      enable_link: false,
      enable_external_link: true,
      link_text: 'Kompānijas mājaslapa',
      link: 'https://www.videowindow.eu',
    },
    {
      title: 'Šahs',
      text: 'Ar kursabiedru izveidojām online šaha mājaslapu, kas izmanto websockets, lai veicinātu ātru komunikāciju.',
      image: chessImage,
      enable_link: false,
      enable_external_link: true,
      link_text: 'Apskatīt kodu',
      link: 'https://github.com/gsegalini/chess-web-game',
    },
    {
      title: 'AI Kosmosa kuģu spēlīte',
      text: 'Maza spēlīte, kur lietotājs sacenšās ar artificiālao intelektu. Izmantoju Neuroevolution, lai uztrennētu AI.',
      image: gameImage,
      enable_link: true,
      enable_external_link: false,
      link_text: 'Spēlēt!',
      link: '/game',
    },
    {
      title: 'Šī mājaslapa',
      text: 'Mājaslapa, ko izveidoju prieka pēc. Izmantoju React.js un Firebase, lai šo panāktu.',
      image: websiteImage,
      enable_link: false,
      enable_external_link: false,
      link_text: '',
      link: '',
    },

  ],
  welcome: 'Sveiks.',
  lang_switch: 'en',
  my_name: 'Mani sauc Dāvis Kažemaks',
  this_is: 'Un šī ir mana mājaslapa',
  about: 'Par mani',
  projects: 'Projekti',
  personal: 'Personiskā informacija',
  personal_text: 'Mani sauc Dāvis un esmu no Latvijas, Līgatnes. Pagaidām dzīvojos pa Nīderlandi kamēr mācos. Man jau no jaunatnes ir paticis čakarēties ar datoriem un risināt gan matemātiskas, gan programmēšanas problēmas.',
  edu: 'Izglītība',
  edu_text: 'Pagaidām esmu maģistra programmā Computer and Embedded Systems Engineering Delft Tehnoloģijas universitātē. Iepriekš es jau absolvēju šeit ar Computer Science grādu, honorāru un Cum Laude. Mācību laikā iemācījos programmatūras principus, datubāzes, testēšanu un pārāk daudz programmēšanas valodas.',
  exp: 'Pieredze',
  exp_text: 'Strādāju Emergn par Full-Stack Developer praktikantu 2 mēnešus. Darba laikā nodarbojos ar Javascript, CSS, React, Nodejs, Git, un daudz citām programmām, lai veidotu mājaslapas. Studēšanas laikā arī biju Skolotāju assistents priekš kursiem, kuri man padevās, un piestrādāju par Research assistentu confidential-fair-exchange projektā.',

};
