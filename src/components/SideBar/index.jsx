import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons'
import './index.scss'


const SideBar = function () {
  const sideLsit = [
    {
      id: 1,
      title: '数据分析',
      path: '/home/analysis',
      icon: ''
    },
    {
      id: 2,
      title: '实时活动',
      path: '/home/activity',
      icon: ''
    },
    {
      id: 3,
      title: '睡眠休息',
      path: '/home/sleep',
      icon: ''
    },
    {
      id: 4,
      title: '后台管理',
      path: '/home/system',
      icon: ''
    }
  ];

  const aside = sideLsit.map(item => {
    return (
      <div className="linkItem" key={item.id}>
        <NavLink to={item.path} activeClassName='active'>
          <QuestionCircleOutlined />
        </NavLink>
        <div className="title-wraper">
          <p className="title-triangle"></p>
          <p className="title-content">{item.title}</p>
        </div>
      </div>

    )
  });

  return (
    <div className="sidebar">
      {aside}
    </div>
  )
}

export default SideBar