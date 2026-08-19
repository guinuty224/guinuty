//text prop have been removed and replaced by children prop with default value. To mimic more the core html element structure.
const Button = ({
  type = "submit",
  color = "success",
  tPosition = "center",
  pTop = 0,
  pBottom = 0,
  pStart = 0,
  pEnd = 0,
  width = 0,
  mTop = 0,
  mBottom = 0,
  border = null,
  rounded = "pill",
  fWeight = null,
  mEnd = 0,
  children = "Click here",
  offcanvasId = "",
  dropdown,
  ...coreAttributes
}) => {
  return (
    <button
      className={` ${dropdown && "dropdown-toggle"} btn btn-${color} rounded-${rounded} text-${tPosition} border-${border}  fw-${fWeight} pt-${pTop} pb-${pBottom} ps-${pStart} pe-${pEnd} w-${width} mt-${mTop} mb-${mBottom} me-${mEnd}`}
      {...(offcanvasId && {
        "data-bs-toggle": "offcanvas",
        "data-bs-target": `#${offcanvasId}`,
        "aria-controls": `${offcanvasId}`,
      })}
      type={type}
      {...coreAttributes}
    >
      {children}
    </button>
  );
};
export default Button;
