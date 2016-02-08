const INITIAL_STATE = {
  home: {
    imageHero: 'http://inspiringpretty.com/wp-content/uploads/2013/05/lifting-up-bride(pp_w589_h391).jpg',
  },
  about: {
    imageHero: 'http://i305.photobucket.com/albums/nn221/tianarules/monkeyskissing.jpg',
  },
  wedding: {
    imageHero: 'http://i305.photobucket.com/albums/nn221/tianarules/monkeyskissing.jpg',
  },
  rsvp: {
    imageHero: 'http://i305.photobucket.com/albums/nn221/tianarules/monkeyskissing.jpg',
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

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
