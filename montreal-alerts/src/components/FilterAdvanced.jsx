
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './FilterAdvanced.css';
const FilterAdvanced = ({
  selectedDistricts,
  setSelectedDistricts,
  selectedSubjects,
  setSelectedSubjects,
  selectedDate,
  setSelectedDate
}) => {
  // Local state to manage panel visibility
  const [showDistricts, setShowDistricts] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSubjects, setShowSubjects] = useState(false);
  // The options values for quartiers and sujets
  const quartiers = [
    "Ville-Marie",
    "Plateau-Mont-Royal",
    "Rosemont–La Petite-Patrie",
    "Hochelaga-Maisonneuve",
    "Mercier"
  ];
  const subjects = [
    "Eau potable",
    "Loisirs",
    "Infrastructure",
    "Sécurité",
    "Transport"
  ];
  const toggleDistricts = () => {
    setShowDistricts(!showDistricts);
    // Hide others if needed
    setShowDatePicker(false);
    setShowSubjects(false);
  };
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
    setShowDistricts(false);
    setShowSubjects(false);
  };
  const toggleSubjects = () => {
    setShowSubjects(!showSubjects);
    setShowDistricts(false);
    setShowDatePicker(false);
  };
  // Manage checkbox changes for districts
  const handleDistrictChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedDistricts([...selectedDistricts, value]);
    } else {
      setSelectedDistricts(selectedDistricts.filter(d => d !== value));
    }
  };
  // Manage checkbox changes for subjects
  const handleSubjectChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedSubjects([...selectedSubjects, value]);
    } else {
      setSelectedSubjects(selectedSubjects.filter(s => s !== value));
    }
  };
  return (
    <div className="filter-box">
      <div className="filter-buttons">
        <button className="filter-button" onClick={toggleDistricts}>
          Arrondissement
        </button>
        <button className="filter-button" onClick={toggleDatePicker}>
          Date
        </button>
        <button className="filter-button" onClick={toggleSubjects}>
          Sujet
        </button>
      </div>
      <div className="filter-panels">
        {showDistricts && (
          <div className="panel district-panel">
            {quartiers.map((q, i) => (
              <div key={i} className="checkbox-item">
                <input
                  type="checkbox"
                  id={`district-${i}`}
                  value={q}
                  onChange={handleDistrictChange}
                  checked={selectedDistricts.includes(q)}
                />
                <label htmlFor={`district-${i}`}>{q}</label>
              </div>
            ))}
          </div>
        )}
        {showDatePicker && (
          <div className="panel date-panel">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Choisissez une date"
              dateFormat="yyyy-MM-dd"
              className="date-picker-input"
              autoComplete="off"
            />
          </div>
        )}
        {showSubjects && (
          <div className="panel subject-panel">
            {subjects.map((s, i) => (
              <div key={i} className="checkbox-item">
                <input
                  type="checkbox"
                  id={`subject-${i}`}
                  value={s}
                  onChange={handleSubjectChange}
                  checked={selectedSubjects.includes(s)}
                />
                <label htmlFor={`subject-${i}`}>{s}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default FilterAdvanced;