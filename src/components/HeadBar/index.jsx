import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './index.scss'
import { connect } from 'react-redux';

class HeadBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'cn'
    }
  }
  
  componentDidMount(){
    let lang = this.props.changeLanguageReducer.lang;
    this.setState({
      lang: lang
    })
  }


  handleClick = ({key})=>{
    let lang = '';
    if(key === '1'){
      // 在组建内部，通过 this.props 来访问action 对象
      this.props.useCn('cn');
      lang = 'cn'
    }else if(key==='2'){
      this.props.useEn('en');
      lang = 'en'
    }
    this.setState({
      lang: lang
    })
  }

  render() {
    const menu = (
      <Menu onClick={this.handleClick}>
        {this.state.lang==='en' && <Menu.Item key="1">简体中文</Menu.Item>}
        {this.state.lang==='cn' && <Menu.Item key="2">English</Menu.Item>}
      </Menu>
    );
    return (
      <div className="head-bar">
        <div className="head-left">
          <div className="head-left-imgwraper">
            <img src={require('../../assets/images/hicling.png')} alt='logo' />
          </div>
          <p className="head-left-namewraper">翰临科技智能健康平台</p>
        </div>
        <div className="head-right">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              {this.state.lang==='cn'?'简体中文':'English'}<DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>


    )
  }
}

// 发送 action 页面，定义 mapDispatchToProps 来发送 action，返回一个action对象

const mapDispatchToProps = dispatch =>{
  return {
    useCn: params =>{
      dispatch({type: 'useCn',params})
    },
    useEn: params =>{
      dispatch({type: 'useEn',params})
    }
  }
}
// mapStateToProps
const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps,mapDispatchToProps)(HeadBar)