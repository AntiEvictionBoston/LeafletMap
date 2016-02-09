import React from "react";
import { render } from "react-dom";
import YouTube from "react-youtube";
import Lightbox from "react-images";

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
      <Lightbox
        images={images}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
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
