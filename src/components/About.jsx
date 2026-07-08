import React from 'react';

function About({ content }) {
  // Utility to parse and display braces {text} as colored spans
  const formatTextHighlight = (text) => {
    const parts = text.split(/(\{.*?\})/g);
    return parts.map((part, index) => {
      if (part.startsWith('{') && part.endsWith('}')) {
        return (
          <span key={index} className="text-highlight">
            {part.substring(1, part.length - 1)}
          </span>
        );
      }
      return part;
    });
  };

  // Utility to style the last word of the title differently (e.g., About Me)
  const renderTitle = (title) => {
    const words = title.split(' ');
    if (words.length > 1) {
      const lastWord = words.pop();
      return (
        <h2 className="section-title">
          {words.join(' ')} <span className="text-highlight">{lastWord}</span>
        </h2>
      );
    }
    return <h2 className="section-title">{title}</h2>;
  };

  return (
    <section id="about" className="section">
      <div className="section-title-wrapper">
        {renderTitle(content.title)}
      </div>
      
      <div className="about-content-wrapper">
        <div className="about-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          {content.textParagraphs.map((p, idx) => (
            <p key={idx} style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: '1.8' }}>
              {formatTextHighlight(p)}
            </p>
          ))}
        </div>
      </div>

      {/* Stats Counters Grid */}
      {content.stats && content.stats.length > 0 && (
        <div className="about-stats">
          {content.stats.map((stat, idx) => (
            <div className="stat-item" key={idx}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default About;
