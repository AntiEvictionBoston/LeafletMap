import React from "react";
import { render } from "react-dom";
import YouTube from "react-youtube";
import StoryLightbox from "./lightbox";

class StoryMedia extends React.Component {
  render () {
    return (
      <div id="story-media">
        {this.renderImages()}
        {this.renderVideo()}
      </div>
    );
  }

  renderImages () {
    let images = [];
    this.props.story.images.map( image => images.push({src: image}) )
    return (
      <StoryLightbox
        images={images}
      />
    );
  }

  renderVideo () {
    if (this.props.story.video) {
      return (
        <YouTube
          videoId={this.props.story.video}
          className="video-container" />
      );
    }
  }

}

export default StoryMedia;
