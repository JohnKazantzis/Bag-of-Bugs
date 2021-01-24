import React from 'react';
import './Css/Project.css';

class Sidebar extends React.Component {
  state = {
    projectName: "Test Project",
    dateCreated: "14-07-2020"
  }

  render() {
    return (
      <div className="project-info">
        <div className="project-details">
          <label className="project-name">{this.state.projectName}</label>
          <label className="project-date">{this.state.dateCreated}</label>
        </div>
      </div>
    );
  }
}

export default Sidebar;