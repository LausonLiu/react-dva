import * as apis from "../services/example"

export default {
    namespace: "indexTest",
    state:{
        name:"model模块使用",
        cnodeData:[],
    },

    reducers:{
        setName(state, payload){
            // console.log(payload)
            let _state = JSON.parse(JSON.stringify(state))
            _state.name = payload.data.name
            return _state;
        },
        setCnodeDataList(state, payload){
            let _state = JSON.parse(JSON.stringify(state))
            console.log(payload)
            _state.cnodeData = payload.data
            return _state;
        },
        testPath(state,payload){
            console.log("我是用户页面",payload);
            
            return state
        }
    },
    effects:{
        *setNameAsync({payload},{put,call}){
            yield put({
                type:"setName",
                data:{
                    name:"超人强"
                }
            })
        },
        *testCnode({payload},{put,call}){
            let rel = yield call(apis.testCnode)
            if (rel.data) {
                // console.log(rel.data.data);
                yield put({
                    type:"setCnodeDataList",
                    data:rel.data.data
                })
            }
            
        }
    },
    subscriptions:{
        haha({dispatch, history}){
            history.listen( ({pathname}) => {
                if ( pathname === "/user") {
                    dispatch({
                        type:"testPath"
                    })
                }
            })
        }
    }
}