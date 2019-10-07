import React from 'react';
import { connect } from 'dva';

import * as apis from "../services/example"

class IndexPage extends React.Component {

  handleSetName = () => {
    // console.log(this.props);
    this.props.dispatch({
      type:"indexTest/setName",
      data:{
        name:"猪猪侠"
      }
    })
  }

  handleSetNameAsync = () => {
    this.props.dispatch({
      type:"indexTest/setNameAsync",
      data:{
        name:"异步的猪猪侠"
      }
    })
  }

  componentDidMount(){
    // apis.testCnode().then((res) => {
    //   console.log(res)
    // })
    apis.mockData().then( (res) => {
      console.log(res);
      
    })
  }

  testCnode = () => {
    this.props.dispatch({
      type:"indexTest/testCnode"
    })
  }

  render() {
    console.log(this.props.cnodeData)
    return (
      <div>
        我是首页组件
        <p>{this.props.msg}</p>
        <hr/>
        <p>{this.props.name}</p>
        <button onClick={ this.handleSetName } >setName</button>
        <button onClick={ this.handleSetNameAsync } >setNameAsync</button>
        <button onClick={ this.testCnode } >testCnode</button>
      </div>
    )
  }
}

// IndexPage.propTypes = {
// };
const mapStateToProps = state => {
  console.log(state);
  
  return {
    msg:"我爱北京天安门",
    name: state.indexTest.name,
    cnodeData:state.indexTest.cnodeData
  }
}

export default connect(mapStateToProps)(IndexPage);
