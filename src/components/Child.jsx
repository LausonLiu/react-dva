import React, {Fragment, Component } from 'react'
import { withRouter } from "dva/router"

class Child extends Component {

    handleToIndex(){
        console.log(this);
        this.props.history.push("/")
    }

    render() {
        return (
            <Fragment>
                <p>这是一个自组件</p>
                <button onClick={ this.handleToIndex.bind(this) }>自组件回到首页</button>
            </Fragment>
        )
    }
}

export default withRouter(Child);