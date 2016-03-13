import React from "react";
import { render } from "react-dom";
import YouTube from "react-youtube";

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
    var images = [];
    this.props.story.images.forEach((image, index) => (
      images.push (
        <img
          src={image}
          key={index} />
      )));
    return images;
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
