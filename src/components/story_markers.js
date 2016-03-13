import React from "react";
import { render } from "react-dom";
import StoryMarker from "./story_marker";

class StoryMarkers extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    url:      React.PropTypes.string,
    stories:  React.PropTypes.object,
    map:      React.PropTypes.object
  };

  componentWillMount () {
    console.log(this.props.url);
  }

  render () {
    let markers = [];
    Object.keys(this.props.stories).forEach((k,i) => {
      let story = this.props.stories[k]
      markers.push(
        <StoryMarker
          map={this.props.map}
          currentUrl={this.props.url}
          story={story}
          urlForStory={k}
          key={i}>
        </StoryMarker>
      );
    });
    return (
      <div id="markers">
        {markers}
      </div>);
  }
}

export default StoryMarkers;
