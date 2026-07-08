import React from 'react';

function Projects({ content }) {
  return (
    <section id="projects" className="section">
      <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h2 className="section-title" style={{ display: 'block' }}>{content.title}</h2>
        <p className="section-subtitle" style={{ color: '#f2f4f7ff', marginTop: '1.5rem', display: 'block' }}>{content.subtitle}</p>
      </div>

      <div className="projects-showcase-grid">
        {content.list.map((project, idx) => (
          <div className="project-showcase-card" key={idx}>

            {/* Preview Image */}
            <div className="project-preview">
              {project.previewImage ? (
                <img src={project.previewImage} alt={project.title} className="project-preview-img" />
              ) : (
                <div className="project-preview-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <span>Preview Coming Soon</span>
                </div>
              )}
              {/* Overlay gradient on hover */}
              <div className="project-preview-overlay" />
            </div>

            {/* Card Body */}
            <div className="project-showcase-body">
              <div className="project-showcase-header">
                <h3 className="project-showcase-title">{project.title}</h3>
                {project.date && (
                  <span className="project-date-badge">{project.date}</span>
                )}
              </div>

              <p className="project-showcase-desc">{project.description}</p>

              {/* Tags */}
              <div className="project-showcase-tags">
                {project.tags.map((tag) => (
                  <span className="project-showcase-tag" key={tag}>{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div className="project-showcase-links">
                {project.liveLink && project.liveLink !== '#' && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-showcase-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-showcase-link project-github-link">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Corner accent */}
            <div className="project-corner-accent" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
