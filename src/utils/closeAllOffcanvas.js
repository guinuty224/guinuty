const closeAllOffcanvas = () => {
  const openOffcanvases = document.querySelectorAll(".offcanvas.show");
  openOffcanvases.forEach((element) => {
    if (window.bootstrap) {
      const instance =
        window.bootstrap.Offcanvas.getInstance(element) ||
        new window.bootstrap.Offcanvas(element);

      instance.hide();
    }
  });
};

export default closeAllOffcanvas;
