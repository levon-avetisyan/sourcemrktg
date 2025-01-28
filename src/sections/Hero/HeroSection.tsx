import './HeroSection.scss';
import { useEffect } from 'react';
import Player from '@vimeo/player';

const HeroSection = () => {
  const scrollToQuestionnaire = () => {
    document.getElementById('questionnaire')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const loadPlayer = () => {
      const iframeElement = document.getElementById('heroVideo') as HTMLIFrameElement | null;

      if (iframeElement) {
        return new Player(iframeElement);
      }
      return null;
    };

    loadPlayer();
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="container-fluid h-100">
          <div className="text-content">
            <h1>
              Our mission is to empower our employees to realize and maximize their earning
              potential
            </h1>
            <h2>
              Inspiring confidence in their ability to provide for themselves and their families.
            </h2>
            <button
              type="button"
              className="btn btn-light btn-lg btn-rounded-border"
              onClick={scrollToQuestionnaire}
            >
              JOIN US TODAY
            </button>
          </div>
        </div>
        <div className="background-video">
          <div className="iframe-wrapper">
            <iframe
              sandbox="allow-scripts allow-same-origin allow-presentation"
              src="https://player.vimeo.com/video/1041792809?autoplay=1&loop=1&muted=1&background=1&byline=0&title=0&dnt=1"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
