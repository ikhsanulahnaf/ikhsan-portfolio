import React from 'react';

function Skills({ content }) {
  const words = content.title.split(' ');
  const lastWord = words.pop();

  return (
    <section id="skills" className="section">
      <div className="section-title-wrapper">
        {content.subtitle && <span className="section-subtitle">{content.subtitle}</span>}
        <h2 className="section-title">
          {words.join(' ')} <span className="text-highlight">{lastWord}</span>
        </h2>
        <p className="skills-description">{content.description}</p>
      </div>

      <div className="skills-icon-grid">
        {content.list.map((skill) => (
          <div className="skill-icon-card" key={skill.name}>
            <div className="skill-icon-img-wrapper">
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon-img"
                loading="lazy"
              />
            </div>
            <span className="skill-icon-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
