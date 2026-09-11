const MetricCard = ({
  title = "Main Title",
  description = "Description",
  tAlign = "text-center",
  bgColor = "light",
  subtitle = "",
  fSize = "",
  bgImage = null,
  padding = "",
  margin = "",
  border = "",
}) => {
  return (
    <div
      className={`card metricCard bg-${bgImage ?? bgColor} ${tAlign} ${padding} ${margin} ${border}`}
    >
      <div className="card-body">
        <h5 className={`card-value fw-bold textMainGreen ${fSize}`}>{title}</h5>
        {subtitle && <small className="fw-light mb-2">{subtitle}</small>}
        <p className={`card-text fw-light`}>{description}</p>
      </div>
    </div>
  );
};
export default MetricCard;
