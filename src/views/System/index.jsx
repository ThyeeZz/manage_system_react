import React,{Component} from 'react';
import './index.scss'

class System extends Component{
  constructor(props){
    super(props)
    this.state={
      name: 'system'
    }
  }

  render(){
    return(
      <div className='system'>
        <h3>System</h3>
      </div>
    )
  }
}

export default System