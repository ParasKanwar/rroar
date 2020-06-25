import React, { Fragment } from "react";
import AnimateLion from "../animatedLion";
import Roar from "../Roar";

class Navbar extends React.Component {
  render() {
    return (
      <Fragment>
        <div
          // className="zoom1"
          style={{
            position: "relative",
            display: "flex",
            zIndex: 100,
            top: 0,
            background:
              // "linear-gradient(to left,rgba(36, 37, 42, 1),rgba(34, 49, 63, 1))",
              "linear-gradient( to right,rgba(46, 49, 49, 1),black)",
            boxShadow: "0px 0px 20px rgba(0,0,0,0.6)",
            width: "100%",
            minHeight: 100,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="rotate"
            style={{
              marginLeft: "10px",
              display: "flex",
              justifyContent: "center",
              maxWidth: "70px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            <AnimateLion fillColor={"black"} size="80"></AnimateLion>
          </div>
          <Roar></Roar>
          <div className="btns" style={{ marginLeft: "20%" }}>
            <button
              className={`myButton ${
                this.props.pathname == "/home" ? "active" : ""
              }`}
              onClick={() => this.props.history.push("/home")}
            >
              Home
            </button>
            <button
              className={`myButton ${
                this.props.pathname == "/elections" ? "active" : ""
              }`}
              onClick={() => this.props.history.push("/elections")}
            >
              Elections
            </button>
            <button
              className={`myButton ${
                this.props.pathname == "/post" ? "active" : ""
              }`}
              onClick={() => this.props.history.push("/post")}
            >
              Post
            </button>
            <button
              className={`myButton ${
                this.props.pathname == "/contact" ? "active" : ""
              }`}
              onClick={() => this.props.history.push("/contact")}
            >
              Contact
            </button>
            <button
              className={`myButton ${
                this.props.pathname == "/about" ? "active" : ""
              }`}
              onClick={() => this.props.history.push("/about")}
            >
              About
            </button>
          </div>
          <div className="dropdown">
            <button className="button1">Menu</button>
            <div className="dc">
              <button
                className={`myButton ${
                  this.props.pathname == "/home" ? "active" : ""
                }`}
                onClick={() => this.props.history.push("/home")}
              >
                Home
              </button>
              <button
                className={`myButton ${
                  this.props.pathname == "/elections" ? "active" : ""
                }`}
                onClick={() => this.props.history.push("/elections")}
              >
                Elections
              </button>
              <button
                className={`myButton ${
                  this.props.pathname == "/post" ? "active" : ""
                }`}
                onClick={() => this.props.history.push("/post")}
              >
                Post
              </button>
              <button
                className={`myButton ${
                  this.props.pathname == "/contact" ? "active" : ""
                }`}
                onClick={() => this.props.history.push("/contact")}
              >
                Contact
              </button>
              <button
                className={`myButton ${
                  this.props.pathname == "/about" ? "active" : ""
                }`}
                onClick={() => this.props.history.push("/about")}
              >
                About
              </button>
              <button
                className={`myButton`}
                style={{ background: "rgba(207, 0, 15, 1)", color: "white" }}
                onClick={() => {
                  document.cookie = "token=";
                  window.location.href = "/login";
                }}
              >
                Logout
              </button>
            </div>
          </div>
          <button
            className={`logout1`}
            onClick={() => {
              document.cookie = "token=";
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <style>
            {`
            @media only screen and (min-width: 800px) {
              .button1 {
                display:none;
              }
              
            }
            @media only screen and (max-width: 800px) {
              .btns{
                display:none;
              }
              .logout1{
                display:none;
              }
            }
            
            .logout1{
              background:rgba(207, 0, 15, 1);
              outline:none;
              border:none;
              color:white;
              padding:15px 25px;
              cursor:pointer;
              border-radius:10px;
            }
            .button1{
              background:black;
              outline:none;
              border:none;
              color:grey;
              border-radius:10px;
              padding:20px;
              margin-right:10px;
              box-shadow:0px 0px 10px rgba(255,255,255,0.6);
              
            }
              .dropdown{
                display:inline-block;
                position:relative;
                margin-left:auto;
                margin-right:auto;
              }
              .dc{
                display: none;
  position: absolute;
  right:0;
  background-color: rgba(0,0,0,0.9);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
              }
              .dropdown:hover .dc{
                display:block;
              }


          .myButton{
            padding:15px 25px;
            border:10px solid black;
            margin:5px;
            border:none;
            background:rgba(0,0,0,0);
            border-radius:5px;
            outline:none;
            cursor:pointer;
            color:grey;
            transition:all 0.2s;
            font-size:16px;
          }
          
          .myButton:hover{
            transform:translateY(-5px);
            background:rgba(0,0,0,0.2);
            box-shadow:0px 0px 10px rgba(255,255,255,0.2);
            color:lightgrey;
          }
          .active{
            background:rgba(255,255,255,0.1);
            color:lightgrey;
          }
        .rotate{
          transition:all 1s;
        }
        .rotate:hover{
          transform:rotate(360deg);
        }

        @keyframes zoom1{
          from{
            transform:translateY(-100px);
            opacity:0;
          }
          to{
            opacity:1;
            transform:translateY(0px);
          }
        }
        .zoom1{
          animation:zoom1 1s;
        }

        `}
          </style>
        </div>
      </Fragment>
    );
  }
}
export default Navbar;
