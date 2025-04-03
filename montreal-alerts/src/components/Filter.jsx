
import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const Filter = ({
  arrondissement,
  setArrondissement,
  sujet,
  setSujet,
  startDate,
  setStartDate,
  endDate,
  setEndDate
}) => {
  const districts = ["Ville-Marie.", "Plateau-Mont-Royal", "Rosemont–La Petite-Patrie"];
  const sujets = ["Eau potable", "Loisirs", "Infrastructure"];
  return (
    <div className="filters">
      <div className="filter-district">
        <label>Arrondissement :</label>
        <select 
          value={arrondissement} 
          onChange={(e) => setArrondissement(e.target.value)}
        >
          <option value="">Tous</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>{district}</option>
          ))}
        </select>
      </div>
      <div className="filter-sujet">
        <label>Sujet :</label>
        <select 
          value={sujet} 
          onChange={(e) => setSujet(e.target.value)}
        >
          <option value="">Tous</option>
          {sujets.map((s, index) => (
            <option key={index} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="filter-date">
        <label>Période :</label>
        <div className="date-picker">
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholderText="Date début"
            dateFormat="yyyy-MM-dd"
            className="date-input"
            withPortal
          />
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            placeholderText="Date fin"
            dateFormat="yyyy-MM-dd"
            className="date-input"
            withPortal
          />
        </div>
      </div>
    </div>
  );
};
export default Filter;
