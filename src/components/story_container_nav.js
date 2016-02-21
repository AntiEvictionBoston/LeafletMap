import React from "react";
import { render } from "react-dom";

class StoryContainerNav extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    title:          React.PropTypes.string.isRequired,
    focusedStory:   React.PropTypes.number.isRequired,
    lastStory:      React.PropTypes.number.isRequired,
    setFocus:       React.PropTypes.func.isRequired
  };

  render () {
    return (
      <div id="location-header">
        {this.renderPreviousButton()}
        <h2 id="title">
          {this.props.title}
        </h2>
        {this.renderNextButton()}
      </div>
    );
  }

  renderPreviousButton () {
    if ( this.props.focusedStory !== 0 ) {
      return (
        <i className="fa fa-chevron-left fa-3x"
          id="left-nav-button"
          onClick={this.props.setFocus.bind(this, this.props.focusedStory - 1)} />
      );
    } else {
      return ( <i className="fa fa-chevron-left fa-3x disabled" id="left-nav-button" /> );
    }
  }

  renderNextButton () {
    if ( this.props.focusedStory !== this.props.lastStory ) {
      return (
        <i className="fa fa-chevron-right fa-3x" 
          id="right-nav-button"
          onClick={this.props.setFocus.bind(this, this.props.focusedStory + 1)} />
      );
    } else {
      return ( <i className="fa fa-chevron-right fa-3x disabled" id="right-nav-button" /> );
    }
  }
}

export default StoryContainerNav;
