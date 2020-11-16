import PropTypes from 'prop-types';
import React, {createRef, PureComponent} from "react";
import {FILM_PREVIEW_TIMEOUT} from '../../const';

export default class VideoPlayer extends PureComponent {

  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;
    video.oncanplaythrough = () => {
      setTimeout(()=>{
        video.play();
      }, FILM_PREVIEW_TIMEOUT);
    };
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.oncanplaythrough = null;
  }

  render() {
    const {poster, src} = this.props;
    return (
      <React.Fragment>
        <video
          width="280"
          height="175"
          muted="muted"
          poster={poster}
          ref = {this._videoRef}>
          <source src={src} ref = {this._videoSourceRef}/>
        </video>
      </React.Fragment>);
  }

}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

