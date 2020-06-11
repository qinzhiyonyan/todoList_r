import {createStore, applyMiddleware, compose} from 'redux' //applyMiddleware是redux中引入中间方法  compose增强函数
import reducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(
    reducer,
    enhancer
)
export default store