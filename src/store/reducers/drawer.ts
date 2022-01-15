const INITIAL_STATE = {
  open: true,
};

export default function drawer(state = INITIAL_STATE, action: any) {
  if (action.type === "TOGGLE_DRAWER") {
    return {
      ...state,
      open: !state.open,
    };
  }
  return state;
}
