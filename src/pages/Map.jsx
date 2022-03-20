import axios from "axios";
import {InfoWindow, Marker, ScaleControl, Map} from "react-bmapgl";
import React from "react";
import {getPoi} from "../axios";



/**
 * 地图组件封装
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function MyMap(props) {
  const getLocation=(x,y)=>{
    setLatlng({lat: x, lng: y})
    // let temp = getPoi(x, y)
    // setLocation(temp)
    getPoi(x,y).then((data)=>{
      setLocation(data)
    })
  }
  const [latlng, setLatlng] = React.useState({lat:31.292195698179793 , lng:121.54626914810665})
  const[location, setLocation] = React.useState('')
  return (
      <div style={{height:'700px', width:'100%'}}>
        <Map onClick={(e) => {
          getLocation(e.latlng.lat,e.latlng.lng)
          console.log((e.latlng.lat),(e.latlng.lng))

        }} enableScrollWheelZoom={true} center={{lng: latlng.lng, lat: latlng.lat}} zoom="11">
          <Marker position={{lng: latlng.lng, lat: latlng.lat}}/>
          <ScaleControl/>
          <InfoWindow position={{lng: latlng.lng, lat: latlng.lat}} text={location} title="地址信息"/>
        </Map>
      </div>
  )

}
