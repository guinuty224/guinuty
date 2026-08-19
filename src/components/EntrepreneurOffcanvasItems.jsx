import { useState } from "react";
import { handleMenuClick } from "../utils/clickHandlers";
const EntrepreneurOffcanvasItems = (onItemClick) => {
  const [activeButton, setActiveButton] = useState(null);
  return (
    <>
      <button
        className={`btn w-100 text-start btn-${activeButton === 0 ? "success" : "outline-success"} border-0 rounded-0 fw-bold`}
        onClick={(e) => handleMenuClick(e, 0, setActiveButton, onItemClick)}
      >
        <span className="bg-white p-1 rounded">📊</span> Vue d'ensemble
      </button>
      <button
        className={`btn w-100 text-start btn-${activeButton === 1 ? "success" : "outline-success"} border-0 rounded-0 fw-bold`}
        onClick={(e) => handleMenuClick(e, 1, setActiveButton, onItemClick)}
      >
        <span className="bg-white p-1 rounded">🗄️</span> Projets
      </button>
      <button
        className={`btn w-100 text-start btn-${activeButton === 2 ? "success" : "outline-success"} border-0 rounded-0 fw-bold`}
        onClick={(e) => handleMenuClick(e, 2, setActiveButton, onItemClick)}
      >
        <span className="bg-white p-1 rounded">💰</span> Investisseurs
      </button>
      <button
        className={`btn w-100 text-start btn-${activeButton === 3 ? "success" : "outline-success"} border-0 rounded-0 fw-bold`}
        onClick={(e) => handleMenuClick(e, 3, setActiveButton, onItemClick)}
      >
        <span className="bg-white p-1 rounded">🧾</span> Remboursements
      </button>
      <button
        className={`btn w-100 text-start btn-${activeButton === 4 ? "success" : "outline-success"} border-0 rounded-0 fw-bold`}
        onClick={(e) => handleMenuClick(e, 4, setActiveButton, onItemClick)}
      >
        <span className="bg-white p-1 rounded">📝</span> Mises a jour
      </button>
      <button
        className={`btn w-100 text-start btn-${activeButton === 5 ? "success" : "outline-success"} border-0 rounded-0 fw-bold`}
        onClick={(e) => handleMenuClick(e, 5, setActiveButton, onItemClick)}
      >
        <span className="bg-white p-1 rounded">👤</span> Profil
      </button>
      <button
        className={`btn w-100 text-start btn-outline-danger border-0 rounded-0 fw-bold`}
        onClick={(e) => handleMenuClick(e, 6, setActiveButton, onItemClick)}
      >
        <span className="bg-white p-1 rounded">🚪</span> Se deconnecter
      </button>
    </>
  );
};
export default EntrepreneurOffcanvasItems;
