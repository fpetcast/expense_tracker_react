//An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)
export default (state, action) => {
    switch(action.type) {
      default:
        return state;
    }
  }