import React,{Component} from 'react';
import './index.scss'

class Activity extends Component{
  constructor(props){
    super(props)
    this.state={
      name: 'activity'
    }
  }

  render(){
    return(
      <div className='activity'>
        <h3>Activity</h3>
      </div>
    )
  }
}

export default Activity