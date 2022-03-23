import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../actions/conditates";
import "./candidate.css";

const Candidate = (props) => {
  props.getUser()
  useEffect(() => {
    props.getUser();
  },[]);

  let params = useParams();
  const replacedURL = params.candidatesName.replaceAll("-", " ");
  const user = props.states.conditates.filter((i) => i.name === replacedURL);
 
  return (
    <div className="candidate">
      <div className="leftSide w-100 d-flex flex-column justify-content-between">
        <div className="wrapLeftSide">
          <div className="candidateProfile align-items-center d-flex flex-column justify-content-center">
            <span className="">{user[0].username[0]}</span>
            <p>{user[0].username}</p>
          </div>
          <div className="contactCandidate d-flex flex-column justify-content-center align-items-center">
            <h2>Contacts</h2>
            <p> Name: {user[0].name}</p>
            <p> Email: {user[0].email}</p>
            <p> Phone: {user[0].phone.split("x")[0]}</p>
            <p>
              Website:{" "}
              <a href={"http://" + user[0].website}> {user[0].website}</a>
            </p>
          </div>
          <div
            className={
              "contactCandidate d-flex flex-column justify-content-center align-items-center"
            }
          >
            <h2>Company Info</h2>
            <p> Company Name: {user[0].company.name}</p>
            <p> Catch Phrase: {user[0].company.catchPhrase}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({ states: state });
const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(Candidate);
