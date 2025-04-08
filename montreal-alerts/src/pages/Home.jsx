
import React, { useState } from "react";
import alertsData from "../data/mockAlerts";
import SearchBar from "../components/SearchBar";
import AlertCard from "../components/AlertCard";
import FilterAdvanced from "../components/FilterAdvanced";
const Home = () => {
  // State for search input
  const [searchValue, setSearchValue] = useState("");
  // State for advanced filter selections
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  // State for pagination (number of visible alerts)
  const [visibleCount, setVisibleCount] = useState(6);
  // Filter function: check search term, districts, subjects, and date
  const filteredAlerts = alertsData.filter((alert) => {
    // Check if alert title contains search value
    const matchesSearch = alert.title.toLowerCase().includes(searchValue.toLowerCase());
    // Check districts: if any are selected, the alert's district must be included
    const matchesDistrict =
      selectedDistricts.length > 0 ? selectedDistricts.includes(alert.arrondissement) : true;
    // Check subjects: if any subjects are selected, the alert's subject must be included
    const matchesSubject =
      selectedSubjects.length > 0 ? selectedSubjects.includes(alert.sujet) : true;
    // Check date: if a date is selected, the alert date (formatted) must match (or you can adjust the logic)
    const alertDate = new Date(alert.date).toISOString().slice(0, 10);
    const selectedDateString = selectedDate ? selectedDate.toISOString().slice(0, 10) : null;
    const matchesDate = selectedDateString ? alertDate === selectedDateString : true;
    return matchesSearch && matchesDistrict && matchesSubject && matchesDate;
  });
  // Slice alerts to show based on visibleCount state
  const visibleAlerts = filteredAlerts.slice(0, visibleCount);
  // Handler for "Load More" button
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Bienvenue sur Avis et Alertes</h1>
        <p>
        Restez informé des dernières alertes et actualités en temps réel.
        Découvrez toutes les informations essentielles pour la vie quotidienne.
        </p>
      </section>
      {/* Actions Section: Search & Advanced Filter */}
      <section className="actions">
        <div className="search-filter">
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          <FilterAdvanced
            selectedDistricts={selectedDistricts}
            setSelectedDistricts={setSelectedDistricts}
            selectedSubjects={selectedSubjects}
            setSelectedSubjects={setSelectedSubjects}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </section>
      {/* Alert List Section */}
      <section className="alert-list-section">
        <h2>Latest Alerts</h2>
        <div className="alert-list">
          {visibleAlerts.length > 0 ? (
            visibleAlerts.map((alert) => <AlertCard key={alert.id} alert={alert} />)
          ) : (
            <p className="no-alerts">No alerts found.</p>
          )}
        </div>
        {visibleCount < filteredAlerts.length && (
          <div className="load-more">
            <button onClick={handleLoadMore}>Charger Plus</button>
          </div>
        )}
      </section>
    </div>
  );
};
export default Home;