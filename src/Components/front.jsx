import React, { Fragment } from "react";

export default class Component extends React.Component {
  render() {
    return (
      <Fragment>
        <div
          className="zoom"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
            backgroundImage: "linear-gradient(red, yellow)",
          }}
        >
          <h1 className="h1">welcome to roar</h1>
          <img
            className="img"
            alt="logo"
            src="https://image.freepik.com/free-vector/illustration-of-lion-with-black-and-white-style_7496-975.jpg?size=220&ext=jpg"
          ></img>
          <div>
            <button
              onClick={() => {
                window.location.href = "/login";
              }}
              className="login"
            >
              Login
            </button>
            <button
              onClick={() => {
                window.location.href = "/signup";
              }}
              className="signup"
            >
              Signup
            </button>
          </div>
        </div>
        <style>
          {`
              @keyframes Zoom{
                  from{
                      transform:scale(2,2);
                  }
                  to{
                    transform:scale(1,1);
                  }
              }

              .zoom{
                  animation:1s Zoom;
              }


          .login{
              padding:10px 20px;
              font-weight:bold;
              margin:10px;
              border-radius:10px;
              border:none;
              outline:none;
              cursor:pointer;
              transition:all 1s;
          }
          .signup{
              padding:10px 20px;
              margin:10px;
              font-weight:bold;
              border-radius:10px;
              border:none;
              outline:none;
              cursor:pointer;
              transition:all 1s;
          }
          .login:hover{
              background:rgba(0,0,0,1);
              box-shadow:0px 0px 10px rgba(0,0,0,1);
              color:white;
          }
          .signup:hover{
            background:rgba(0,0,0,1);
            box-shadow:0px 0px 10px rgba(0,0,0,1);
            color:white;
          }
      .h1 {
          color: white;
          font-family: "Cinzel Decorative", cursive;
          font-size: 2.5rem;
          text-shadow: 0 0 3px green, 0 0 3px black;
        }
          @import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@900&display=swap");
          img {
              box-sizing: border-box; 
              border-radius: 50%; 
              box-shadow: 0 0px 18px rgba(0, 0, 0, 0.3); 
              transition: all 2s; 
              opacity:1;
              cursor: pointer; 
              width:250px;
              height:250px;
          }
          img:hover {
              opacity:0.5;
              transform: rotate(360deg) scale(1.3,1.3) translateY(30px);
            }
        `}
        </style>
      </Fragment>
    );
  }
}
