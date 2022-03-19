import React from "react";
export default class BaiDuMapSearch extends React.Component {

  componentDidMount() {
    var BMap = window.BMap
    var map = new BMap.Map("mapContainer"); // 创建Map实例
    map.centerAndZoom(new BMap.Point( 104.0723725172, 30.6633976913), 11); // 初始化地图,设置中心点坐标和地图级别
    map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的
    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {
          "input": "suggestId"
          , "location": map
        })
  }
  render() {
    return (
        <div>
          <div id="r-result">请输入:<input type="text" id="suggestId" size="20" style={{width:'150px'}} /></div>
          <div id="searchResultPanel" style={{border:'1px solid #C0C0C0',width:'150px',height:'auto', marginBottom:' 20px',}}></div>
          <div className="mapContainer" id="mapContainer" style={{ height: '500px', width: '100%' }}></div>
        </div>

    )
  }
}
