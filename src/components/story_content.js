import React from "react";
import { render } from "react-dom";
import StoryMedia from "./story_media";

class StoryContent extends React.Component {
  render () {
    return (
      <div id="story-content">
        {this.basicInfo()}

        <StoryMedia {...this.props} />
      </div>
    );
  }

  basicInfo () {
    return (
      <table id="story-basic-info">
        <tbody>
          <tr id="rent-row" className="row">
            <td id="rent-col-one" className="cell">
              Rent <i className="fa fa-arrow-up fa-2x"></i>
            </td>
            <td id="rent-col-two" className="cell">
              {this.props.story.rent}
            </td>
          </tr>
          <tr id="landlord-row" className="row">
            <td id="landlord-col-one" className="cell">
              Landlord
            </td>
            <td id="landlord-col-two" className="cell">
              {this.props.story.owner}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default StoryContent;
