const INITIAL_STATE = {
  drawer: true,
};

export function app(state = INITIAL_STATE, action: any) {
  if (action.type === "TOGGLE_DRAWER") {
    return {
      ...state,
      drawer: !state.drawer,
    };
  }
  return state;
}
