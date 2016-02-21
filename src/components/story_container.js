import React from "react";
import { render } from "react-dom";
import StoryContainerNav from "./story_container_nav";
import StoryContent from "./story_content";

class StoryContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    focusedStory:   React.PropTypes.number.isRequired,
    stories:        React.PropTypes.array.isRequired,
    story:          React.PropTypes.object.isRequired,
    setFocus:       React.PropTypes.func.isRequired
  };

  render () {
    return (
      <div className="story-container">
        <StoryContainerNav
          title={this.props.story.title}
          focusedStory={this.props.focusedStory}
          lastStory={this.props.stories.length - 1}
          setFocus={this.props.setFocus} />
        <StoryContent {...this.props} />
      </div>
    );
  }
}

export default StoryContainer;
