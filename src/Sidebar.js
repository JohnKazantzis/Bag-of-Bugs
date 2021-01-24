import React from 'react';
import './Css/Sidebar.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Sidebar extends React.Component {
    render() {
      return (
        <div className="bar">
          <div className="search-div">
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input className="text-filter" type="text" name="searchFilter"></input>
          </div>
          <div className="filters-div">
            <label className="filter-label">Issues and filters</label>
            <button className="filter-button" type="button">All issues</button>
            <button className="filter-button" type="button">Open issues</button>
            <button className="filter-button" type="button">Resolved issues</button>
          </div>
        </div>
      );
    }
}

export default Sidebar;