 
import React, { useState } from "react";
import alertsData from "../data/mockAlerts";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import AlertCard from "../components/AlertCard";
const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [arrondissement, setArrondissement] = useState("");
  const [sujet, setSujet] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  // Filtering logic—in this example, dates are compared as strings.
  const filteredAlerts = alertsData.filter(alert => {
    const matchesSearch = alert.title.toLowerCase().includes(searchValue.toLowerCase());
    const matchesDistrict = arrondissement ? alert.arrondissement === arrondissement : true;
    const matchesSujet = sujet ? alert.sujet === sujet : true;
    
    // Simple string comparison for dates; ensure your input matches the data format "YYYY-MM-DD"
    const matchesStartDate = startDate ? alert.date >= startDate : true;
    const matchesEndDate = endDate ? alert.date <= endDate : true;
    
    return matchesSearch && matchesDistrict && matchesSujet && matchesStartDate && matchesEndDate;
  });
  const visibleAlerts = filteredAlerts.slice(0, visibleCount);
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("La fonctionnalité d'abonnement n'est pas encore disponible !");
  };
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Bienvenue sur Avis et Alertes</h1>
        <p>
          Restez informé des dernières alertes et actualités en temps réel.
          Découvrez toutes les informations essentielles pour la vie quotidienne.
        </p>
      </section>
      <section className="actions">
        <div className="search-filter">
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          <Filter
            arrondissement={arrondissement}
            setArrondissement={setArrondissement}
            sujet={sujet}
            setSujet={setSujet}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </div>
        <div className="subscribe">
          <a href="#" onClick={handleSubscribe}>M'abonner</a>
        </div>
      </section>
      <section className="alert-list-section">
        <h2>Liste des Alertes</h2>
        <div className="alert-list">
          {visibleAlerts.length > 0 ? (
            visibleAlerts.map(alert => <AlertCard key={alert.id} alert={alert} />)
          ) : (
            <p className="no-alerts">Aucun résultat trouvé.</p>
          )}
        </div>
        {visibleCount < filteredAlerts.length && (
          <div className="load-more">
            <button onClick={handleLoadMore}>Charger plus</button>
          </div>
        )}
      </section>
    </div>
  );
};
export default Home;