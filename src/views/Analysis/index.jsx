import React,{Component} from 'react';
import './index.scss'

class Analysis extends Component{
  constructor(props){
    super(props)
    this.state={
      name: 'analysis'
    }
  }

  render(){
    return(
      <div className='analysis'>
        <h3>Analysis</h3>
      </div>
    )
  }
}

export default Analysis