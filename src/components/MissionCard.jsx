const MissionCard = ({ icon, title, description, step, border, bgColor }) => {
  return (
    <div
      className={`card missionCard text-start bg-${bgColor} border-${border}`}
    >
      <div className="card-body">
        <p className="fs-3">{icon}</p>
        {step && <small>ÉTAPE {step}</small>}
        <h5 className="card-title  fw-bold textMainGreen">{title}</h5>
        <p className="card-text fw-light">{description}</p>
      </div>
    </div>
  );
};
export default MissionCard;
