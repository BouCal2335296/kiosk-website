import TechBanner from './TechBanner'
import './ProjectDisplay.css'

function ProjectDisplay({ project }) {
  if (!project) return null

  return (
    <div className="project-content">
      {/* En-tête du projet */}
      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>

      {/* Vidéo de présentation si disponible */}
      {project.videoUrl && (
        <div className="video-section">
          <video
            key={project.videoUrl}
            controls
            autoPlay
            loop
            muted
            className="project-video"
            poster={project.videoPoster}
          >
            <source src={project.videoUrl} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      )}

      {/* Ruban des technologies */}
      {project.technologies && (
        <TechBanner technologies={project.technologies} />
      )}

      {/* Description principale */}
      <div className="project-description-section">
        <h2>Qu'est-ce que c'est ?</h2>
        <p className="description-text">{project.description}</p>
      </div>

      {/* Points clés */}
      {project.keyPoints && (
        <div className="key-points-section">
          <h2>Points clés</h2>
          <div className="key-points-grid">
            {project.keyPoints.map((point, index) => (
              <div key={index} className="key-point-card">
                <div className="key-point-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bénéfices */}
      {project.benefits && (
        <div className="benefits-section">
          <h2>Ce que ça apporte</h2>
          <div className="benefits-list">
            {project.benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Informations supplémentaires */}
      {project.additionalInfo && (
        <div className="additional-info">
          <div className="info-card">
            {project.additionalInfo}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDisplay
