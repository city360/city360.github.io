import React from "react";
// import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap'
import {InfoWindow, Map, Marker, ScaleControl} from 'react-bmapgl';
import "./contact.scss";
import {Button} from "@mui/material";
// import axios from "axios";
import {getPoi} from "../axios";
import MyMap from "./Map";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lat: 39, lng: 116};
  }


  render() {
    return (
        <div className="contact-container">
          <div className="contact-title">Contact</div>
          <div className="contact-description">
            请联系我们
          </div>
          <div className="contact-block">
            <div className="block-1">
              <div className="address">
                <i className="fas fa-map-marker-alt"></i>
                <div className="address-details">
                  <p>Location</p>
                  <p>B22 Bakers Street, Glasgow, Scotland</p>
                </div>
              </div>
              <div className="email">
                <i className="fas fa-envelope"></i>
                <div className="email-details">
                  <p>Email</p>
                  <p>info@example.com</p>
                </div>
              </div>
              <div className="phone">
                <i className="fas fa-phone-alt"></i>
                <div className="phone-details">
                  <p>Call</p>
                  <p>+1 2222 2222 22</p>
                </div>
              </div>

              <div className="map">
                <MyMap/>
                {/*<Map onClick={(e) => {*/}
                {/*  // console.log(e)*/}
                {/*  // alert(e.point)*/}
                {/*  this.setState({lat: e.latlng.lat, lng: e.latlng.lng})*/}
                {/*  getPoi(e.latlng.lat, e.latlng.lng)*/}
                {/*  console.log(this.state)*/}
                {/*  // console.log(e.latlng.lng)*/}
                {/*}} enableScrollWheelZoom={true} center={{lng: this.state.lng, lat: this.state.lat}} zoom="11">*/}
                {/*  <Marker position={{lng: this.state.lng, lat: this.state.lat}}/>*/}
                {/*  /!*<NavigationControl />*!/*/}
                {/*  /!*<ZoomControl/>*!/*/}
                {/*  <ScaleControl/>*/}
                {/*  <InfoWindow position={{lng: this.state.lng, lat: this.state.lat}} text="内容" title="标题"/>*/}
                {/*</Map>*/}
              </div>
            </div>
            <div className="block-2">
              <form action="#">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email"/>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Message">Message</label>
                  <textarea name="message" id="message"></textarea>
                </div>
                {/*<div className="btn-container">*/}
                {/*  <button type="submit">Send Message</button>*/}
                {/*</div>*/}
                <Button variant={"contained"} style={{margin: '0 auto'}}>
                  提交
                </Button>
              </form>
            </div>
          </div>
        </div>
    );
  }

  componentDidMount() {
    // const bmap = document.getElementById('bmap')
    // console.log(bmap)
  }
}
