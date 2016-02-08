const INITIAL_STATE = {
  images: {
    placeholder: 'http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png',
    homeHero: 'http://inspiringpretty.com/wp-content/uploads/2013/05/lifting-up-bride(pp_w589_h391).jpg',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
