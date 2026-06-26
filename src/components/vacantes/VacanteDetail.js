import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { vacantesList } from './vacantesData';
import style from './VacanteDetail.module.css';

function VacanteDetail() {
  const { id } = useParams();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const vacancy = vacantesList.find((v) => v.id === id);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!vacancy) {
    return (
      <section className={style.notFoundSection}>
        <div className={style.notFoundContainer}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <h2>Vacante no encontrada</h2>
          <p>La vacante que buscas no existe o ha finalizado su periodo de convocatoria.</p>
          <Link to="/vacantes" className={style.backBtnLink}>
            Ver todas las vacantes
          </Link>
        </div>
      </section>
    );
  }

  const handlePostulationClick = () => {
    const emailsStr = vacancy.postulacion.emails.join('; ');
    navigator.clipboard.writeText(emailsStr).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
      
      // Prefilled mailto link
      const mailtoLink = `mailto:${vacancy.postulacion.emails.join(',')}?subject=${encodeURIComponent(vacancy.postulacion.asunto)}&body=${encodeURIComponent("Hola, estoy interesado en postularme a la vacante de " + vacancy.title + ". Adjunto mi hoja de vida y soportes correspondientes.")}`;
      window.location.href = mailtoLink;
    });
  };

  // Find closure date from timeline
  const closureStep = vacancy.cronograma.find(step => step.actividad.toLowerCase().includes('cierre') || step.actividad.toLowerCase().includes('recepción'));
  const closureDate = closureStep ? `${closureStep.fecha} (${closureStep.hora})` : "Ver cronograma";

  return (
    <section className={style.section}>
      <div className={style.container}>
        {/* Back Link */}
        <Link to="/vacantes" className={style.backLink}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Volver a vacantes
        </Link>
        <br />

        {/* Intro text */}
        <div className={style.introTitle}>Marca el ritmo de tu carrera</div>

        {/* Content Layout */}
        <div className={style.layoutGrid}>
          {/* Left Column: Details */}
          <div className={style.detailsCol}>
            <h1 className={style.title}>{vacancy.title}</h1>
            <p className={style.subTitle}>{vacancy.subTitle}</p>

            {/* Premium, Clean Metadata Bar */}
            <div className={style.metaLine}>
              <span className={style.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {vacancy.location}
              </span>
              <span className={style.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                {vacancy.area}
              </span>
              <span className={style.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                {vacancy.contractType}
              </span>
            </div>

            <hr className={style.divider} />

            {/* Antecedentes */}
            <div className={style.sectionBlock}>
              <h3>Contexto y Antecedentes</h3>
              <p className={style.textJustify}>{vacancy.antecedentes}</p>
            </div>

            {/* Objeto */}
            <div className={style.sectionBlock}>
              <h3>Objetivo de la Contratación</h3>
              <p className={style.textBlock}>{vacancy.objeto}</p>
            </div>

            {/* Alcance */}
            <div className={style.sectionBlock}>
              <h3>Alcance del Trabajo</h3>
              <p className={style.textBlock}>{vacancy.alcance}</p>
            </div>

            {/* Actividades específicas */}
            <div className={style.sectionBlock}>
              <h3>¿A qué retos te enfrentarás?</h3>
              <ul className={style.list}>
                {vacancy.actividades.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            </div>

            {/* Productos */}
            {vacancy.productos && vacancy.productos.length > 0 && (
              <div className={style.sectionBlock}>
                <h3>Entregables y Productos Esperados</h3>
                <ul className={style.list}>
                  {vacancy.productos.map((prod, i) => (
                    <li key={i}>{prod}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Perfil e idoneidad */}
            <div className={style.sectionBlock}>
              <h3>Perfil y Requisitos</h3>
              <ul className={style.list}>
                {vacancy.perfil.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>



            {/* Documentos requeridos */}
            <div className={style.sectionBlock}>
              <h3>Documentación para Postularse</h3>
              <ul className={style.list}>
                {vacancy.documentos.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </div>

            {/* Principios éticos / PEAS */}
            <div className={`${style.sectionBlock} ${style.principlesBox}`}>
              <h3>Compromiso y Principios Éticos (PEAS)</h3>
              <p className={style.principlesIntro}>
                El contratista deberá cumplir con los más altos estándares éticos, en particular:
              </p>
              <ul className={style.list}>
                {vacancy.principios.map((pr, i) => (
                  <li key={i}>{pr}</li>
                ))}
              </ul>
            </div>

            {/* Supervisión y Forma de pago */}
            <div className={style.layoutGridTwoCol}>
              <div className={`${style.sectionBlock} ${style.cardMini}`}>
                <h4>Supervisión</h4>
                <p>{vacancy.supervisor}</p>
              </div>
              <div className={`${style.sectionBlock} ${style.cardMini}`}>
                <h4>Esquema de Pago</h4>
                <p>{vacancy.formaPago}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Summary Card (replacing form) */}
          <div className={style.sidebarCol}>
            <div className={style.stickyCard}>
              <h3 className={style.sidebarTitle}>Resumen de la Vacante</h3>
              <div className={style.sidebarDetails}>
                <div className={style.sidebarDetailItem}>
                  <span className={style.detailLabel}>Ubicación:</span>
                  <span className={style.detailValue}>{vacancy.location}</span>
                </div>
                <div className={style.sidebarDetailItem}>
                  <span className={style.detailLabel}>Área:</span>
                  <span className={style.detailValue}>{vacancy.area}</span>
                </div>
                <div className={style.sidebarDetailItem}>
                  <span className={style.detailLabel}>Contrato:</span>
                  <span className={style.detailValue}>{vacancy.contractType}</span>
                </div>
                <div className={style.sidebarDetailItem}>
                  <span className={style.detailLabel}>Honorarios:</span>
                  <span className={style.detailValue}>{vacancy.salary}</span>
                </div>
                <div className={style.sidebarDetailItem}>
                  <span className={style.detailLabel}>Duración:</span>
                  <span className={style.detailValue}>{vacancy.duration}</span>
                </div>
                <div className={style.sidebarDetailItem}>
                  <span className={style.detailLabel}>Cierre de convocatoria:</span>
                  <span className={style.detailValueClose}>{closureDate}</span>
                </div>
              </div>

              <div className={style.postulationActionBox}>
                <button onClick={handlePostulationClick} className={style.postulateBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Postularse por Correo
                </button>
                {copiedEmail && (
                  <div className={style.toast}>
                    ¡Correos copiados al portapapeles! Abriendo cliente de correo...
                  </div>
                )}
              </div>

              <div className={style.postulateInstructions}>
                <p className={style.instructionText}>
                  <strong>¿Cómo postularse?</strong>
                </p>
                <p className={style.instructionText}>
                  Envía tu hoja de vida y soportes académicos/laborales a los siguientes correos electrónicos:
                </p>
                <div className={style.emailList}>
                  {vacancy.postulacion.emails.map((email, idx) => (
                    <a href={`mailto:${email}`} key={idx} className={style.emailLink}>
                      {email}
                    </a>
                  ))}
                </div>
                <p className={style.instructionText}>
                  Utiliza el siguiente asunto exacto:
                </p>
                <div className={style.subjectBox}>
                  <code>{vacancy.postulacion.asunto}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VacanteDetail;
