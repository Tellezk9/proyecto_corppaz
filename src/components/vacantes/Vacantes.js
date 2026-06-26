import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { vacantesList } from './vacantesData';
import style from './Vacantes.module.css';

function Vacantes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedContract, setSelectedContract] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  // Extract unique locations, areas, and contract types for filters
  const locations = [...new Set(vacantesList.map(v => v.location))];
  const areas = [...new Set(vacantesList.map(v => v.area))];
  const contracts = [...new Set(vacantesList.map(v => v.contractType))];

  // Filter logic
  const filteredVacancies = vacantesList.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          v.subTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          v.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === '' || v.location === selectedLocation;
    const matchesArea = selectedArea === '' || v.area === selectedArea;
    const matchesContract = selectedContract === '' || v.contractType === selectedContract;

    return matchesSearch && matchesLocation && matchesArea && matchesContract;
  });

  const handleShare = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/vacantes/${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <section className={style.section}>
      <div className={style.container}>
        {/* Banner Title */}
        <div className={style.titleContainer}>
          <h1 className={style.h1}>Convocatorias y Vacantes</h1>
          <p className={style.pIntro}>
            Únete a nuestro equipo y contribuye al desarrollo agropecuario, social y sostenible de nuestras comunidades. 
            Explora las oportunidades laborales disponibles y postúlate.
          </p>
        </div>

        {/* Filter bar */}
        <div className={style.filterBar}>
          <div className={style.searchContainer}>
            <input
              type="text"
              placeholder="Buscar vacante..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={style.searchInput}
            />
            <span className={style.searchIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </div>

          <div className={style.selectsContainer}>
            <div className={style.selectWrapper}>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className={style.selectInput}
              >
                <option value="">Todas las ubicaciones</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div className={style.selectWrapper}>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className={style.selectInput}
              >
                <option value="">Todas las áreas</option>
                {areas.map((area, index) => (
                  <option key={index} value={area}>{area}</option>
                ))}
              </select>
            </div>

            <div className={style.selectWrapper}>
              <select
                value={selectedContract}
                onChange={(e) => setSelectedContract(e.target.value)}
                className={style.selectInput}
              >
                <option value="">Todos los contratos</option>
                {contracts.map((con, index) => (
                  <option key={index} value={con}>{con}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        {filteredVacancies.length > 0 ? (
          <div className={style.cardsGrid}>
            {filteredVacancies.map((vacancy) => (
              <div
                key={vacancy.id}
                className={`${style.card} ${vacancy.highlighted ? style.cardHighlighted : style.cardStandard}`}
              >
                {/* Header card with Title and Share button */}
                <div className={style.cardHeader}>
                  <h3 className={style.cardTitle}>{vacancy.title}</h3>
                  <button
                    onClick={(e) => handleShare(e, vacancy.id)}
                    className={`${style.shareBtn} ${vacancy.highlighted ? style.shareBtnLight : style.shareBtnDark}`}
                    title="Copiar enlace de vacante"
                    aria-label="Compartir vacante"
                  >
                    {copiedId === vacancy.id ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                    )}
                    {copiedId === vacancy.id && (
                      <span className={style.tooltip}>¡Copiado!</span>
                    )}
                  </button>
                </div>

                {/* Location with Pin Icon */}
                <div className={style.cardLocation}>
                  <svg className={style.pinIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{vacancy.location}</span>
                </div>

                {/* Bottom row: Area tag and Action Button */}
                <div className={style.cardFooter}>
                  <span className={style.areaTag}>{vacancy.area}</span>
                  <Link
                    to={`/vacantes/${vacancy.id}`}
                    className={`${style.detailsBtn} ${vacancy.highlighted ? style.detailsBtnLight : style.detailsBtnDark}`}
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={style.noResults}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <p>No se encontraron vacantes con los criterios de búsqueda.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedLocation('');
                setSelectedArea('');
                setSelectedContract('');
              }}
              className={style.clearFiltersBtn}
            >
              Restablecer filtros
            </button>
          </div>
        )}

        {/* Pagination indicator */}
        <div className={style.paginationContainer}>
          <span className={style.pageNumber}>1</span>
        </div>
      </div>
    </section>
  );
}

export default Vacantes;
