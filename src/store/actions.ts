export const toggleDrawer = (opened: boolean) => {
  return {
    type: "TOGGLE_DRAWER",
    opened,
  };
};
