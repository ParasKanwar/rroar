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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224113.1104056648!2d76.95382425387!3d28.63673405242647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1592467183042!5m2!1sen!2sin"
          width="100%"
          height="600"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          title="myMap"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: 10,
            flexWrap: "wrap",
          }}
        >
          <div
            className="const fromUp"
            onClick={() =>
              window.open(
                "https://harshit25github.github.io/try-second/site/PROJECTFINAL/zones/narela.html",
                "_blank"
              )
            }
          >
            Narela Constituency
          </div>
          <div
            className="const fromUp"
            onClick={() =>
              window.open(
                "https://harshit25github.github.io/try-second/site/PROJECTFINAL/zones/badli.html",
                "_blank"
              )
            }
          >
            Badli Constituency
          </div>
          <div
            className="const fromUp"
            onClick={() =>
              window.open(
                "https://harshit25github.github.io/try-second/site/PROJECTFINAL/zones/laxmi.html",
                "_blank"
              )
            }
          >
            Laxmi Nagar Constituency
          </div>
          <div
            className="const fromUp"
            onClick={() =>
              window.open(
                "https://harshit25github.github.io/try-second/site/PROJECTFINAL/zones/dwarka.html",
                "_blank"
              )
            }
          >
            Dwarka Constituency
          </div>
          <div
            className="const fromUp"
            onClick={() =>
              window.open(
                "https://harshit25github.github.io/try-second/site/PROJECTFINAL/zones/vishwas.html",
                "_blank"
              )
            }
          >
            Vishwas Nagar Constituency
          </div>
          <div
            className="const fromUp"
            onClick={() =>
              window.open(
                "https://harshit25github.github.io/try-second/site/PROJECTFINAL/zones/kalkaji.html",
                "_blank"
              )
            }
          >
            Kalkaji Constituency
          </div>
        </div>
        <style>
          {`
          .const{
            color: lightgrey;
            background: rgba(0, 0, 0, 0.1);
            width: 260px;
            margin: 10px;
            padding: 30px 20px;
            font-weight:bold;
            border-radius:10px;
            cursor:pointer;
            outline:none;
            transition:all 1s;
          }
          .const:hover{
            color: white;
            background: rgba(0,0,0,1);
            transform:translateY(30px) scale(1.2,1.2);
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
