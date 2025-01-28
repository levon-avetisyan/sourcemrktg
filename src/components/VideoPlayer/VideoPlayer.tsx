import { useEffect } from 'react';
import Player from '@vimeo/player';
import './VideoPlayer.scss';

interface IProps {
  setHasVideoEnded: (hasEnded: boolean) => void;
}

const VideoPlayer = ({ setHasVideoEnded }: IProps) => {
  useEffect(() => {
    const loadPlayer = () => {
      const iframeElement = document.getElementById('introVideo') as HTMLIFrameElement | null;

      if (iframeElement) {
        const player = new Player(iframeElement);

        player.on('ended', () => {
          setHasVideoEnded(true);
        });

        return player;
      }
      return null;
    };

    loadPlayer();
  }, [setHasVideoEnded]);

  return (
    <div className="intro-video-wrapper mx-auto">
      <iframe
        id="introVideo"
        src="https://player.vimeo.com/video/1041792809?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        allow="autoplay; fullscreen; picture-in-picture"
        title="Vimeo Video"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
