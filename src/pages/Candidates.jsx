import React, { Component } from "react";
import { Table, FormControl, InputGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../actions/conditates";

let differentLetters = {
  ",": "",
  "!": "",
  "?": "",
  "*": "",
  ı: "i",
  ş: "s",
  ç: "c",
  ö: "o",
  ü: "u",
  ğ: "g",
  İ: "i",
  Ş: "s",
  Ç: "c",
  Ö: "o",
  Ü: "u",
  Ğ: "g",
  " ": "-",
  ".": "",
};

export class Candidates extends Component {
  state = {
    filteredValue: "",
    dataSort: this.props.states.conditates.sort(function (a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    }),
  };
  filterValue = (e) => {
    this.setState({ filteredValue: e.target.value });
  };
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="container">
        <h1
          style={{ textAlign: "center", backgroundColor: "#282c34" }}
          className="my-5 p-3 w-50 text-light m-auto"
        >
          Candidates
        </h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Filter"
            aria-label="Filter"
            aria-describedby="basic-addon1"
            value={this.state.filteredValue}
            onChange={(e) => this.filterValue(e)}
          />
        </InputGroup>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Info</th>
            </tr>
          </thead>
          {this.props.states.conditates
            .sort(function (a, b) {
              var textA = a.name.toUpperCase();
              var textB = b.name.toUpperCase();
              return textA < textB ? -1 : textA > textB ? 1 : 0;
            })
            .filter((item) => {
              if (this.state.filteredValue !== "") {
                console.log(item.name);
                return item.name
                  .toLowerCase()
                  .includes(this.state.filteredValue.toLowerCase());
              }
              return item;
            })
            .map((i) => (
              <tbody key={i.id}>
                <tr>
                  <td>{i.name}</td>
                  <td>{i.phone}</td>
                  <td className="text-center">
                    {" "}
                    <Link
                      to={`/candidates/${i.name.replaceAll(
                        /[,!?*ışçöüğİŞÇÖÜĞ ]/g,
                        (change) => differentLetters[change]
                      )}`}
                    >
                      Details
                    </Link>{" "}
                  </td>
                </tr>
              </tbody>
            ))}
        </Table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ states: state });

const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
