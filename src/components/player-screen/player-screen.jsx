import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import {Path} from "../../const";
import {fetchFilmById} from "../../store/api-actions";
import {selectFilm, selectIsFilmLoaded} from "../../store/selectors";
import browserHistory from "../../utils/browser-history";
import {getFormattedVideoDuration} from "../../utils/date-time-formatter";
import {filmShape} from "../../utils/props-validation";

const calculateProgress = (duration, currentTime)=>{
  if (!currentTime || !duration) {
    return 0;
  }
  return currentTime / duration * 100;
};

export const PlayerScreen = (props)=>{
  const {film, isFilmLoaded, loadFilmInfo, id} = props;
  const {title, background, videoSrc} = film;

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    if (!isFilmLoaded) {
      loadFilmInfo(id);
    }
  });

  useEffect(()=>{
    if (videoRef) {
      const video = videoRef.current;
      video.oncanplaythrough = () => {
        setDuration(Math.floor(video.duration));
      };
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Math.floor(videoRef.current.currentTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTime]);

  useEffect(() => {
    setProgress(calculateProgress(duration, currentTime));
    setTimeLeft(duration - currentTime);
  }, [currentTime, duration]);

  return (
    <div className="player">
      <video src={videoSrc} className="player__video" poster={background} ref={videoRef}></video>

      <button
        type="button"
        className="player__exit"
        onClick={()=>{
          browserHistory.push(Path.filmScreen(id));
        }}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getFormattedVideoDuration(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          {!isPlaying && <button type="button" className="player__play" onClick={()=>{
            setIsPlaying(true);
            videoRef.current.play();
          }}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>}

          {isPlaying && <button type="button" className="player__play" onClick={()=>{
            setIsPlaying(false);
            videoRef.current.pause();
          }}>
            <svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref="#pause"></use>
            </svg>
            <span>Pause</span>
          </button>}

          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" onClick={()=>{
            videoRef.current.requestFullscreen();
          }}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>);
};

PlayerScreen.propTypes = {
  id: PropTypes.string.isRequired,
  film: filmShape.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
  loadFilmInfo: PropTypes.func.isRequired
};

const mapStateToProps = (state, {id}) => (
  {
    film: selectFilm(state),
    isFilmLoaded: selectIsFilmLoaded(id)(state)
  });

const mapDispatchToProps = (dispatch) => ({
  loadFilmInfo(id) {
    dispatch(fetchFilmById(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);
