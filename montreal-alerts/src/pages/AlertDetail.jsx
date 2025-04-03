
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import alertsData from "../data/mockAlerts";
import "./AlertDetail.css";
const AlertDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const alertItem = alertsData.find((alert) => alert.id.toString() === id);
  if (!alertItem) {
    return <div className="alert-detail not-found">No alert found.</div>;
  }
  return (
    <div className="alert-detail">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>
      <div className="detail-card">
        <h2>{alertItem.title}</h2>
        <div className="meta">
          <span className="district">{alertItem.arrondissement}</span>
          <span className="date">{alertItem.date}</span>
        </div>
        <p className="subject"><strong>Subject:</strong> {alertItem.sujet}</p>
        <div className="content">
          <p>{alertItem.content}</p>
        </div>
      </div>
    </div>
  );
};
export default AlertDetail;
