const Button = ({
  color = "success",
  tPosition = "center",
  padding = "",
  width = "0",
  margin = "",
  border = "",
  rounded = "rounded-pill",
  fWeight = "normal",
  mEnd = "0",
  children = "Click here",
  offcanvasId = "",
  dropdown = false,
  ...coreAttributes
}) => {
  return (
    <button
      className={`${dropdown ? "dropdown-toggle" : ""} btn btn-${color} ${rounded} text-${tPosition} ${border} fw-${fWeight}  w-${width} ${margin} ${padding}`}
      {...(offcanvasId && {
        "data-bs-toggle": "offcanvas",
        "data-bs-target": `#${offcanvasId}`,
        "aria-controls": `${offcanvasId}`,
      })}
      {...coreAttributes}
    >
      {children}
    </button>
  );
};
export default Button;
