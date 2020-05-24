import React,{Component} from 'react';
import './index.scss'

class Sleep extends Component{
  constructor(props){
    super(props)
    this.state={
      name: 'sleep'
    }
  }

  render(){
    return(
      <div className='sleep'>
        <h3>Sleep</h3>
      </div>
    )
  }
}

export default Sleep