export default (state = 0, action) => {
  switch (action.type) {
    case 'a':
      return state + 1;
    case 'b':
      return state - 1;
    default:
      return state;
  }
};
