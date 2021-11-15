import React from "react";
import { Link } from "react-router-dom";
import RequestSplashScreen from "./reqSplashScreen" ;

import Button from "react-bootstrap/Button";
import check from "../../../assets/img/green-check.png";


class RequestFinish extends React.Component {
  render() {
    const current = 6;

    return (
      <div className="wrapper">
	  <RequestSplashScreen />
        <section id="registration-finish">
          <img alt="" src={check} />
          <div className="text-box">
            <h3>Jane is on it!</h3>
            <p style={{textAlign:"center"}}>
              Your Hero Jane will be in connect ! via phone or chat if any further information is needed     </p>
          </div>

          
        </section>
      </div>
    );
  }
}

export default RequestFinish;
