import PropTypes from 'prop-types';
import React, {createRef, useEffect} from "react";
import {FILM_PREVIEW_TIMEOUT} from '../../const';

export const VideoPlayer = (props) => {
  const {poster, src} = props;
  const videoRef = createRef(null);
  const videoSourceRef = createRef(null);
  useEffect(()=>{
    const video = videoRef.current;
    videoRef.current.oncanplaythrough = () => {
      setTimeout(()=>{
        video.play();
      }, FILM_PREVIEW_TIMEOUT);
    };
    return ()=>{
      videoRef.current.oncanplaythrough = null;
    };
  });
  return (
    <React.Fragment>
      <video
        width="280"
        height="175"
        muted="muted"
        poster={poster}
        ref = {videoRef}>
        <source src={src} ref = {videoSourceRef}/>
      </video>
    </React.Fragment>);
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayer;

