import React, { Fragment,Component } from 'react'
import { Link } from "dva/router";
import Child from "../components/Child"

export default class UserPage extends Component {

  indexHandler = () => {
    this.props.history.push("/")
  }

  render() {
    return (
      <Fragment>
      <div>
        我是用户页
      </div>
      <Link to="/">首页</Link>
      <button onClick={ this.indexHandler }>首页按钮</button>
      <hr/>
      <Child/>
      </Fragment>
    )
  }
}
