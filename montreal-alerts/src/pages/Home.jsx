
import React, { useState } from 'react';
import alertsData from '../data/mockAlerts';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import AlertCard from '../components/AlertCard';
const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [arrondissement, setArrondissement] = useState('');
  const [sujet, setSujet] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [visibleCount, setVisibleCount] = useState(3); // For pagination (adjust as needed)
  // Filtering logic
  const filteredAlerts = alertsData.filter((alert) => {
    const matchesSearch = alert.title.toLowerCase().includes(searchValue.toLowerCase());
    const matchesDistrict = arrondissement ? alert.arrondissement === arrondissement : true;
    const matchesSujet = sujet ? alert.sujet === sujet : true;
    const matchesStartDate = startDate ? new Date(alert.date) >= new Date(startDate) : true;
    const matchesEndDate = endDate ? new Date(alert.date) <= new Date(endDate) : true;
    return matchesSearch && matchesDistrict && matchesSujet && matchesStartDate && matchesEndDate;
  });
  const visibleAlerts = filteredAlerts.slice(0, visibleCount);
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("La fonctionnalité d'abonnement n'est pas encore disponible !");
  };
  return (
    <div className="home-page">
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
      <section className="alert-list">
        {visibleAlerts.length > 0 ? (
          visibleAlerts.map(alert => (
            <AlertCard key={alert.id} alert={alert} />
          ))
        ) : (
          <p className="no-alerts">Aucun résultat trouvé.</p>
        )}
      </section>
      {visibleCount < filteredAlerts.length && (
        <div className="load-more">
          <button onClick={handleLoadMore}>Charger plus</button>
        </div>
      )}
    </div>
  );
};
export default Home;
