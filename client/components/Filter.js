import React, { useState, Component } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      size: "",
      gender: "",
      age: "",
      price: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    this.setState({ size: ev });
    console.log("what is ev?", ev);
  }
  render() {
    console.log("what is size rn", this.state.size);
    console.log(this.props.pets);
    const filterBySize = [...new Set(this.props.pets.map((dog) => dog.size))];
    //console.log(filterBySize);
    return (
      <>
        <div className="filter-form">
          <h1>filer form</h1>
          <FilterOption
            options={filterBySize}
            selected={this.state.size}
            changeOption={this.handleChange}
          />
          <FilterItem data={this.props.pets} filter={this.state.size} />
        </div>
      </>
    );
  }
}

class FilterOption extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    this.props.changeOption(ev.target.value);
    console.log("!!!", this.props.changeOption());
  }
  render() {
    const selectedOption = this.props.selected;
    //console.log("testing", this.props.options);
    return (
      <>
        <select id="size" value={selectedOption} onChange={this.handleChange}>
          {this.props.options.map((option) => {
            return (
              <option
                key={option}
                value={option}
                selected={option.value == selectedOption}
              >
                {option}
              </option>
            );
          })}
        </select>
      </>
    );
  }
}

class FilterItem extends Component {
  constructor() {
    super();
  }
  render() {
    const filter = this.props.filter;
    console.log("what is filter", filter);
    const filteredData = this.props.data.filter((item) => {
      return filter === item.size;
    });
    console.log("final------------->", filteredData);
    return (
      <>
        <div className="filter-item">
          {filteredData.map((item) => {
            return <div>{item.name}</div>;
          })}
        </div>
      </>
    );
  }
}

const mapState = (state) => {
  return {
    pets: state.pets,
  };
};
export default connect(mapState, null)(Filter);

/*
 <div className="btn-group">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Size
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {filterBySize.map((val) => {
              return (
                <li key={val.id}>
                  <a className="dropdown-item" href="#">
                    {val}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Gender
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {filterByGender.map((val) => {
              return (
                <li key={val.id}>
                  <a className="dropdown-item" href="#">
                    {val}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Price
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {filterByPrice.map((val) => {
              return (
                <li key={val.id}>
                  <a className="dropdown-item" href="#">
                    {val}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
*/
