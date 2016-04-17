import {combineReducers} from 'redux';
import BRIDGE_TROUBLE from './../images/bridge_trouble.png';
import HAPPY_ANGRY_PHOTO from './../images/happy_angry.png';
import MAIN_COUPLE_PHOTO from './../images/main_couple.png';
import MONKEY_KISS_PHOTO from './../images/monkey_kiss.png';
import MONKEY_KISS_CARTOON_PHOTO from './../images/monkey_kiss_cartoon.jpg';
import RING_PHOTO from './../images/ring.png';

const INITIAL_STATE = {
  home: {
    imageHero: `.${MAIN_COUPLE_PHOTO}`,
  },
  about: {
    imageHero: 'http://i305.photobucket.com/albums/nn221/tianarules/monkeyskissing.jpg',
  },
  wedding: {
    imageHero: 'http://i305.photobucket.com/albums/nn221/tianarules/monkeyskissing.jpg',
  },
  rsvp: {
    imageHero: 'http://i305.photobucket.com/albums/nn221/tianarules/monkeyskissing.jpg',
    rsvpLink: 'http://chris-and-monika.app.rsvpify.com/',
  },
  email: {
    chris: 'mailto:christopher.r.zhou@gmail.com',
    monika: 'mailto:monikasun88@gmail.com',
  },
  github: {
    project: 'https://github.com/chrisrzhou/chris-and-monika',
    chris: 'https://github.com/chrisrzhou',
    monika: 'https://github.com/monikasun88',
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  reducer,
});
