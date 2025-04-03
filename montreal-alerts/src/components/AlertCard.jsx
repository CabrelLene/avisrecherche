import React from "react";
import { Link } from "react-router-dom";
import "./AlertCard.css";
const AlertCard = ({ alert }) => {
  return (
    <div className="alert-card ultra-beautiful">
      {/* This extra div renders the animated gradient border */}
      <div className="gradient-border"></div>
      <div className="card-content">
        <h3>{alert.title}</h3>
        <div className="meta">
          <span className="district">{alert.arrondissement}</span>
          <span className="date">{alert.date}</span>
        </div>
        <p className="subject">{alert.sujet}</p>
        <Link to={`/alert/${alert.id}`} className="details-button">
          Détails
        </Link>
      </div>
    </div>
  );
};
export default AlertCard;
