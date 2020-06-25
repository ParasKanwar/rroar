import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";

export default class Component extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar
          pathname={this.props.history.location.pathname}
          history={this.props.history}
        ></Navbar>
        <div>
          <img
            src="https://images.news18.com/static_news18/pix/ibnhome/news18/delhi-election-2020/key_candidates_images/PNG/u05a059c004.jpg?v=3"
            alt="image"
            height="100%"
          ></img>
        </div>
        <div>
          <img
            src="https://images.news18.com/static_news18/pix/ibnhome/news18/delhi-election-2020/key_candidates_images/PNG/om-prakash-sharma.png?v=3"
            alt="image"
            height="100%"
          ></img>
        </div>
        <div>
          <img
            src="https://images.news18.com/static_news18/pix/ibnhome/news18/delhi-election-2020/key_candidates_images/PNG/u05a059c002.jpg?v=3"
            alt="image"
            height="100%"
          ></img>
        </div>
        <div>
          <img
            src="https://images.news18.com/static_news18/pix/ibnhome/news18/delhi-election-2020/key_candidates_images/PNG/u05a059c003.jpg?v=3"
            alt="image"
            height="100%"
          ></img>
        </div>
        <div>
          <img
            src="https://images.news18.com/static_news18/pix/ibnhome/news18/delhi-election-2020/key_candidates_images/PNG/u05a059c005.jpg?v=3"
            alt="image"
            height="100%"
          ></img>
        </div>
        <div>
          <img
            src="https://images.news18.com/static_news18/pix/ibnhome/news18/delhi-election-2020/key_candidates_images/PNG/u05a059c009.jpg?v=3"
            alt="image"
            height="100%"
          ></img>
        </div>
        <div>
          <img
            class="map1"
            src="https://www.mapsofindia.com/assemblypolls/delhi/vishwas-nagar-assembly-constituency-delhi-2020.jpg"
            width="500"
            height="500"
            alt=" Contituency Map of Vishwash Nagar 2020"
            title="Contituency Map of Vishwash Nagar 2020"
          ></img>
        </div>
      </Fragment>
    );
  }
}
