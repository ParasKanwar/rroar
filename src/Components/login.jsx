import React, { Fragment } from "react";
import url from "../strings/url.js";
import Error1 from "./error1/error.jsx";
import Loading from "./loading/loading.jsx";
import Black from "./gradients/black";
import AnimatedLion from "./animatedLion.jsx";
export default class Component extends React.Component {
  state = {
    email: "",
    password: "",
    status: "",
    msg: null,
    loading: false,
  };
  onChange(e) {
    const { name, value } = e.target;
    this.setState((state) => ({
      ...state,
      [name]: value,
      msg: "",
      status: "",
    }));
  }

  render() {
    const { email, password, status, msg, loading } = this.state;

    return (
      <Fragment>
        {status === "error" ? <Error1 message={msg}></Error1> : ""}
        <Black>
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
              placeholder="Enter Password"
              value={password}
              name="password"
              onChange={(e) => this.onChange(e)}
              type="password"
            ></input>
            <button
              className="login"
              disabled={!email || !password}
              onClick={() => {
                this.setState({ loading: true });
                const headers = new Headers();
                headers.append("content-type", "application/json");
                fetch(
                  `${url}/api/user/login?email=${this.state.email}&password=${this.state.password}`
                )
                  .then(async (res) => {
                    if (res.ok) {
                      const { token } = await res.json();
                      document.cookie = `token=bearer ${token}`;
                      window.location.href = "/home";
                      console.log("i am here");
                      return;
                    }
                    const { message } = await res.json();
                    this.setState((state) => ({
                      ...state,
                      status: "error",
                      msg: message,
                      loading: false,
                    }));
                  })
                  .catch((e) => {
                    this.setState((state) => ({
                      ...state,
                      status: "error",
                      loading: false,
                    }));
                  });
              }}
            >
              {loading ? (
                <Loading
                  style={{ width: 20, height: 20 }}
                  size={"2"}
                  color="white"
                ></Loading>
              ) : (
                "Login"
              )}
            </button>
            <button
              className="login"
              onClick={() => (window.location.href = "/signup")}
            >
              Signup
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
              width:100%;
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
          transition:all 2s ease-in-out;
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
}
