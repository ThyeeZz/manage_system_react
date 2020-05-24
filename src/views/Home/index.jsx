import React from 'react';
import SideBar from '../../components/SideBar';
import { Route } from 'react-router-dom';
import Analysis from '../Analysis';
import Activity from '../Activity';
import Sleep from '../Sleep';
import System from '../System';
import HeadBar from '../../components/HeadBar'
import './index.scss'

const Home = function () {
  return (
    <div className="home">
      <HeadBar></HeadBar>
      <div className="home-layout">
        <SideBar></SideBar>
        <div className="home-layout-content">
          <Route path='/home/analysis' component={Analysis}></Route>
          <Route path='/home/activity' component={Activity}></Route>
          <Route path='/home/sleep' component={Sleep}></Route>
          <Route path='/home/system' component={System}></Route>
        </div>

      </div>

    </div>
  )
}

export default Home