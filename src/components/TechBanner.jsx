import './TechBanner.css'

function TechBanner({ technologies }) {
  return (
    <div className="tech-banner-container">
      <div className="tech-banner">
        <div className="tech-scroll">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <span className="tech-name">{tech}</span>
            </div>
          ))}
          {/* Duplicate pour l'effet de défilement infini */}
          {technologies.map((tech, index) => (
            <div key={`duplicate-${index}`} className="tech-item">
              <span className="tech-name">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechBanner
