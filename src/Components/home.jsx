import React, { Fragment } from "react";
import Navbar from "./Navbar/Navbar";

export default class Component extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar
          pathname={this.props.history.location.pathname}
          history={this.props.history}
        ></Navbar>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            marginTop: 100,
          }}
        >
          <div className="fromUp" style={{ margin: 20 }}>
            <img
              style={{ maxWidth: 250 }}
              id="img2"
              src="https://www.knowyourcandidate.co.uk/images/artwork-72.svg?crc=214647775"
              alt="candidate details"
            ></img>
            <figcaption id="caption" style={{ color: "white" }}>
              <strong>Know Your Candidate Details</strong>
            </figcaption>
          </div>
          <div className="fromDown" style={{ margin: 20 }}>
            <img
              id="img3"
              style={{ maxWidth: 250, transform: "rotate(15deg)" }}
              src="https://tse3.mm.bing.net/th?id=OIP.-JhGiGEmUWN9v5hyMtVcsQHaEK&pid=Api&P=0&w=279&h=158"
              alt="candidate details"
            ></img>
            <figcaption id="caption" style={{ color: "white" }}>
              <strong>Virtual Voting System</strong>
            </figcaption>
          </div>
          <div className="fromUp" style={{ margin: 20 }}>
            <figure>
              <img
                id="img4"
                style={{ maxWidth: 250, transform: "rotate(15deg)" }}
                src="https://tse4.mm.bing.net/th?id=OIP.oO-FDI7B239oMoWR2v-m7wAAAA&pid=Api&P=0&w=300&h=300"
                alt="Vote For Right"
              ></img>
              <figcaption
                id="caption"
                style={{ color: "white", transform: "rotate(15deg)" }}
              >
                <strong>Vote For Right Person</strong>
              </figcaption>
            </figure>
          </div>
        </div>
        <style>
          {`
              @import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@900&display=swap");
              #caption{
                transform: rotate(10deg);
                margin:10px;
                font-family: 'Cinzel Decorative', cursive; 
              }
              .fromUp{
                animation:fromUp 1s ease-out;
              }
              @keyframes fromUp{
                from{
                  transform:translateY(100px);
                  opacity:0;
                }to{
                  transform:translateY(0px);
                  
                  opacity:1;
                }
              }
              .fromDown{
                animation:fromDown 1s ease-out;
              }
              @keyframes fromDown{
                from{
                  transform:translateY(-100px);
                  opacity:0;
                }to{
                  transform:translateY(0px);
                  
                  opacity:1;
                }
              }
              
              `}
        </style>
      </Fragment>
    );
  }
}
