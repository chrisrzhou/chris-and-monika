import BRIDGE_TROUBLE from './../images/bridge_trouble.png';
import HAPPY_ANGRY from './../images/happy_angry.png';
import MAIN_COUPLE from './../images/main_couple.png';
import MONKEY_KISS from './../images/monkey_kiss.png';
import MONKEY_KISS_CARTOON from './../images/monkey_kiss_cartoon.jpg';
import RING from './../images/ring.png';

const imageURL = (image) => {
  return `.${image}`;
};

const constants = {
  images: {
    mainCouple: imageURL(MAIN_COUPLE),
    bridgeTrouble: imageURL(BRIDGE_TROUBLE),
    happyAngry: imageURL(HAPPY_ANGRY),
    monkeyKiss: imageURL(MONKEY_KISS),
    monkeyKissCartoon: imageURL(MONKEY_KISS_CARTOON),
    ring: imageURL(RING),
  },
  rsvp: {
    link: 'https://chris-and-monika.app.rsvpify.com/',
  },
  emails: {
    chris: 'mailto:christopher.r.zhou@gmail.com',
    monika: 'mailto:monikasun88@gmail.com',
  },
  github: {
    project: 'https://github.com/chrisrzhou/chris-and-monika',
    chris: 'https://github.com/chrisrzhou',
    monika: 'https://github.com/monikasun88',
  },
};

export default constants;
