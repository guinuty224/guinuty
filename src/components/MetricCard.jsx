const MetricCard = ({
  value,
  description,
  textAlign = "center",
  bgColor = "light",
  position,
  pTop = 0,
  pBottom = 0,
  pStart = 0,
  pEnd = 0,
  mTop = 0,
  mBottom = 0,
  border = 0,
  borderTop = 0,
  borderBottom = 0,
  borderStart = 0,
  borderEnd = 0,
  fSize = null,
  fColor = null,
  bgImage = null,
}) => {
  return (
    <div
      className={`card metricCard bg-${bgImage ?? bgColor} border-${border} border-top-${borderTop} border-bottom-${borderBottom} border-start-${borderStart} border-end-${borderEnd} text-${textAlign} pt-${pTop} pb-${pBottom} ps-${pStart} pe-${pEnd} mt-${mTop} mb-${mBottom}`}
    >
      <div className="card-body">
        <h5
          className={`card-value fw-bold textMainGreen ${fSize && "fs-1"} ${fColor && "text-" + fColor}`}
        >
          {value}
        </h5>
        {position && <small className="fw-light">{position}</small>}
        <p className={`card-text fw-light ${position && "mt-2"}`}>
          {description}
        </p>
      </div>
    </div>
  );
};
export default MetricCard;
