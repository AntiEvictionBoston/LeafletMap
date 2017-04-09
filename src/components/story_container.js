import React from "react";
import { render } from "react-dom";
import StoryContainerNav from "./story_container_nav";
import StoryContent from "./story_content";
import Neighborhood from "./neighborhood";

class StoryContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    story:      React.PropTypes.object.isRequired,
    next:       React.PropTypes.string,
    prev:       React.PropTypes.string
  };

  componentWillReceiveProps () {
    document.getElementById('story-scroll').scrollIntoView();
  }

  render () {
    return (
      <div className="story-container">
        <StoryContainerNav {...this.props} />
        <div className="story-content-wrapper">
          <div id="story-scroll"></div>
          {this.pickContentWrapper()}
        </div>
      </div>
    );
  }

  pickContentWrapper = () => (
    this.props.story.type === "story" ? <StoryContent {...this.props} /> : <Neighborhood {...this.props} />
  );
}

export default StoryContainer;
