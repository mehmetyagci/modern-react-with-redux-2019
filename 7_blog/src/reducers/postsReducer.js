export default (state, action) => {
  
  // bad!
  state[0] = 'Sam';
  state.pop ();
  state.push ();

  // bad!
  state.name = 'Sema';
  state.age = 30;
};
