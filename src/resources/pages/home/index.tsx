import React from 'react';
import './style.less';
import '../../assets/iconfont/iconfont.css';
import winImg from '../../assets/XSearch/winImg.png';

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
      <div className="host" data-app-region="drag">
        <div className="container">
          <div className="content">
            <div className="top">
              <div className="title">
                <div className="main">XSearch</div>
              </div>
              <div className="winButton">
                <div
                  className="close btn1 hoverEffect"
                  onClick={() => {
                    window.postMessage('XSearch', 'closeWin');
                  }}
                >
                  <i className="iconfont iconClose"></i>
                </div>
              </div>
            </div>
            <div className="functions">
              <div className="forms name">
                <div className="formItem">
                  <div className="label hoverEffect">
                    Layer Name <i className="iconfont iconFilldown"></i>
                  </div>
                  <div className="input hoverEffect">
                    <input
                      placeholder="Enter the full Layer Name"
                      value={this.state.name}
                      onChange={this.nameInputChange}
                    ></input>
                  </div>
                </div>
                <div className="mode">
                  <div className="switch"></div>
                  Accur
                </div>
                <div className="close">
                  <i className="iconfont iconClose"></i>
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
                  className="select btn1 hoverEffect"
                  onClick={() => {
                    const selectInfo = this.state.selectInfo;
                    selectInfo.select = true;
                    this.setState({ selecr: true });
                    window.postMessage('XSearch', selectInfo);
                  }}
                >
                  Select
                </button>
                <button
                  className="unselect btn1 hoverEffect"
                  onClick={() => {
                    const selectInfo = this.state.selectInfo;
                    selectInfo.select = false;
                    this.setState({ selecr: true });
                    window.postMessage('XSearch', selectInfo);
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
