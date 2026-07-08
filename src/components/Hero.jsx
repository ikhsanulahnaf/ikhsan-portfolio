import React, { useState, useEffect, useRef } from 'react';

function Hero({ content }) {
  const [photo, setPhoto] = useState(localStorage.getItem('portfolio_photo') || '');
  const fileInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const base64Image = uploadEvent.target.result;
        setPhoto(base64Image);
        try {
          localStorage.setItem('portfolio_photo', base64Image);
        } catch (err) {
          console.warn("Storage quota full, image saved locally in state but could not be cached in LocalStorage.", err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Typing animation hooks
  const typingTexts = content.typingTexts || ["Eager to learn, ready to code"];
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const activeText = typingTexts[currentTextIdx];
    const currentLength = displayedText.length;

    if (!isDeleting && currentLength < activeText.length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayedText(activeText.substring(0, currentLength + 1));
      }, 75);
    } else if (isDeleting && currentLength > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayedText(activeText.substring(0, currentLength - 1));
      }, 35);
    } else if (!isDeleting && currentLength === activeText.length) {
      // Pause at full text
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentLength === 0) {
      // Switch text
      setIsDeleting(false);
      setCurrentTextIdx((prev) => (prev + 1) % typingTexts.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIdx, typingTexts]);

  return (
    <section id="hero" className="section hero-section">
      <div className="hero-container">
        {/* Left Column: Title and Pulse Badge */}
        <div className="hero-left">
          <div className="available-badge">
            <span className="pulse-dot"></span>
            Available for Work
          </div>
          <h1 className="hero-left-title">
            {content.title.split(' ').map((word, idx) => (
              <span key={idx} style={{ display: 'block' }}>{word}</span>
            ))}
          </h1>
        </div>

        {/* Center Column: Portrait Photo & Floating Tech Items */}
        <div className="hero-center">
          <div className="watermark-container">
            <div className="watermark-text">{content.firstName || "IKHSAN"}</div>
            
            <div className="avatar-container-wrapper">
              <div className="avatar-wrapper" onClick={() => fileInputRef.current.click()} style={{ cursor: 'pointer' }}>
                {photo ? (
                  <img src={photo} alt={content.name} className="avatar-image" />
                ) : (
                  <div className="avatar-placeholder">
                    <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" height="3.5rem" width="3.5rem" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', lineHeight: '1.4' }}>
                      Klik untuk upload foto Anda
                    </p>
                  </div>
                )}
                
                <div className="avatar-upload-overlay">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                  </svg>
                  Ganti Foto
                </div>
              </div>
              
              <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                accept="image/*" 
                onChange={handlePhotoChange} 
              />
            </div>

            {/* Floating 3D Cubes */}
            {/* Cube 1 (Go logo) */}
            <div className="floating-entity c1" title="Go (Golang)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Cube 2 (JS/Node logo) */}
            <div className="floating-entity c2" title="JavaScript">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="22" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="12" x2="22" y2="8.5" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="12" x2="2" y2="8.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Cube 3 (React logo) */}
            <div className="floating-entity c3" title="React.js">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5 12a15.3 15.3 0 0 1 9.5-4 15.3 15.3 0 0 1 9.5 4 15.3 15.3 0 0 1-9.5 4 15.3 15.3 0 0 1-9.5-4z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column: Typing animation, Pitch and Resume CTA */}
        <div className="hero-right">
          <div className="hero-right-typing">
            <span style={{ color: 'var(--accent)', marginRight: '0.25rem', fontWeight: 'bold' }}>&gt;</span>
            <span>{displayedText}</span>
            <span className="cursor-blink"></span>
          </div>
          <p className="hero-right-desc">
            Hi, I'm <strong style={{ color: 'var(--text-primary)' }}>{content.name}</strong> - {content.description}
          </p>
          <div>
            <a href={content.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-resume">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.15em" width="1.15em" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
