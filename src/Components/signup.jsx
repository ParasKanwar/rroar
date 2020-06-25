import React, { Fragment } from "react";
import url from "../strings/url.js";
import Loading from "./loading/loading.jsx";
import Black from "./gradients/black";
import AnimatedLion from "./animatedLion.jsx";
import Error from "./error1/error.jsx";
export default class Component extends React.Component {
  state = {
    email: "",
    password: "",
    username: "",
    loading: false,
    re: "",
    err: "",
  };
  onChange(e) {
    const { name, value } = e.target;
    this.setState((state) => ({
      ...state,
      [name]: value,
      msg: "",
      status: "",
      err: "",
    }));
  }
  render() {
    const { email, password, username, err, re } = this.state;
    return (
      <Fragment>
        {err !== "" ? <Error message={err}></Error> : ""}
        <Black inverse={true}>
          <div
            className="zoom"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: 30,
              borderRadius: 5,
              backgroundImage: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0))",
            }}
          >
            <div
              className="rotate"
              style={{
                maxWidth: 500,
                borderRadius: "50%",
              }}
            >
              <AnimatedLion size={200}></AnimatedLion>
            </div>

            <input
              placeholder="Enter Email"
              value={email}
              type="email"
              name="email"
              onChange={(e) => this.onChange(e)}
            ></input>
            <input
              placeholder="Enter Username"
              value={username}
              name="username"
              onChange={(e) => this.onChange(e)}
              type="text"
            ></input>
            <input
              placeholder="Enter Password"
              value={password}
              name="password"
              onChange={(e) => this.onChange(e)}
              type="password"
            ></input>
            <input
              placeholder="Re-enter password"
              value={re}
              type="password"
              name="re"
              onChange={(e) => this.onChange(e)}
            ></input>

            <button
              className="login"
              disabled={
                !email || !password || !username || password !== re
                  ? true
                  : false
              }
              onClick={(e) => this.handleOnSignUp(e)}
            >
              signup
            </button>
            <button
              className="login"
              onClick={() => (window.location.href = "/login")}
            >
              already a member?
            </button>
          </div>
        </Black>
        <style>
          {`
          @keyframes Zoom{
              from{
                opacity:0;
                  transform:scale(0,0);
              }
              to{
                opacity:1;
                transform:scale(1,1);
              }
          }

          .zoom{
              animation:1s Zoom;
          }
          .zoom::-webkit-scrollbar{
            width:0px;
          }
          .login{
              width:200px;
              height:50px;
              margin-top:10px;
              margin-bottom:10px;
              padding:15px 20px;
              border:none;
              cursor:grab;
              outline:none;
              background:black;
              font-size:15px;
              color:white;
              border-radius:4px;
              transition:1s all;
          }
          .login:hover{
            color:black;
            background:white;
           
        }
        .login:disabled{
          background:rgba(0,0,0,0.1);
          color:white;
          cursor:default;
        }
        
        .gradient {
            background-image: linear-gradient(
              to right,
              hsl(211, 100%, 50%),
              hsl(179, 100%, 30%)
            );
            transition: all 0.5s linear;
          }
          
          .gradient:hover {
            background-image: linear-gradient(
              to bottom,
              hsl(344, 100%, 50%),
              hsl(31, 100%, 40%)
            );
          }

          input{
              padding:15px 20px;
              margin:10px;
              width:300px;
              outline:none;
              border:none;
              color:white;
              background:rgba(0,0,0,1);
              border-radius:4px;
              transition:1s all;
              font-size:18px;
          }
          input:focus{
            background:rgba(0,0,0,1);
            animation:1s infinite myAnime alternate forwards;    
            color:white;
          }
          input::placeholder{
            color:white;
          }
          @keyframes myAnime{
            from {
              
              box-shadow:0px 0px 0px black;
              
              
            }
            to{
              
              box-shadow:0px 0px 20px black;
              
            }
          }
          
      
      @import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@900&display=swap");
      .rotate {
          box-sizing: border-box; 
          border-radius: 50%; 
          transition: all 2s; 
          
          cursor: pointer; 
          margin-bottom:25px;
          
      }
      .rotate:hover {
          
          transform: rotate(360deg);
        }
    `}
        </style>
      </Fragment>
    );
  }

  handleOnSignUp(e) {
    const { username, password, email } = this.state;
    const myObj = {};
    myObj.username = username;
    myObj.email = email;
    myObj.password = password;
    const headers = new Headers();
    headers.append(
      "content-type",
      "application/x-www-form-urlencoded;charset=UTF-8"
    );
    let fb = [];
    for (let key in myObj) {
      const eKey = encodeURIComponent(key.toString());
      const eVal = encodeURIComponent(myObj[key]);
      fb.push(eKey + "=" + eVal);
    }
    fb = fb.join("&");
    fetch(`${url}/api/user/signup`, {
      method: "POST",
      body: fb,
      headers,
    })
      .then(async (res) => {
        if (res.ok) {
          const ans = await res.json();
          window.location.href = "/login";
          return;
        }
        const { message } = await res.json();
        console.log(message);
        this.setState({ err: message });
      })
      .catch((e) => {
        this.setState({ err: e.message });
      });
  }
}
