import React from "react";
import "./style.less";
import "../../assets/iconfont/iconfont.css";
import winImg from "../../assets/XSearch/winImg.png";

export default class main extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectInfo: {},
    };
  }

  nameInputChange = (e: any) => {
    const selectInfo = this.state.selectInfo;
    selectInfo.name = e.target.value;
    this.setState({ selectInfo });
  };

  render() {
    return (
      <div style={{ overflow: "hidden" }} data-app-region="drag">
        <div className="container">
          <div className="content">
            <div className="top">
              <div className="title">
                <div className="main">X-search</div>
                <div className="sub">Easy to search every layer</div>
              </div>
              <div className="winButton">
                <div className="clear btn4 hoverEffect">
                  <i className="iconfont iconBesom"></i>
                </div>
                <div
                  className="close btn4 hoverEffect"
                  onClick={() => {
                    window.postMessage("XSearch", "closeWin");
                  }}
                >
                  <i className="iconfont iconClose"></i>
                </div>
                <div className="img btn2 hoverEffect">
                  <img src={winImg} />
                </div>
              </div>
            </div>
            <div className="functions">
              <div className="forms">
                <div className="label label-name btn1 hoverEffect">
                  Name <i className="iconfont iconFilldown"></i>
                </div>
                <div className="input input-name btn1 hoverEffect">
                  <input
                    placeholder="Enter Layer Name"
                    value={this.state.name}
                    onChange={this.nameInputChange}
                  ></input>
                  <div className="buttons">
                    <div>
                      <i className="iconfont iconSync"></i>
                    </div>
                    <div>
                      <i className="iconfont iconClose"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings">
                <div className="addFilter hoverEffect">Add a filter</div>
                <div className="area">
                  <i className="iconfont iconArtboard hoverEffect"></i>
                  <i className="iconfont iconFile hoverEffect"></i>
                </div>
              </div>
              <div className="buttons">
                <button
                  className="select btn2 hoverEffect"
                  onClick={() => {
                    const selectInfo = this.state.selectInfo;
                    selectInfo.select = true;
                    this.setState({ selecr: true });
                    window.postMessage("XSearch", selectInfo);
                  }}
                >
                  Select
                </button>
                <button
                  className="unselect orangeDotBtn hoverEffect"
                  onClick={() => {
                    const selectInfo = this.state.selectInfo;
                    selectInfo.select = false;
                    this.setState({ selecr: true });
                    window.postMessage("XSearch", selectInfo);
                  }}
                >
                  Unselect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
