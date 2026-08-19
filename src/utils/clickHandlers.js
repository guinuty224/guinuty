const handleMenuClick = (e, id, setLocalState, liftStateToParent) => {
  e.preventDefault();
  setLocalState(id);
  if (typeof liftStateToParent === "function") {
    liftStateToParent(id);
  }
};

export { handleMenuClick };
