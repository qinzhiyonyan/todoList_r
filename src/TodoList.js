import React from "react";
import 'antd/dist/antd.css'
import TodoListUI from './TodoListUI'

import store from "./store";
import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './store/actionTypes'

class TodoList extends React.Component {


    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.onchangeValue.bind(this))
    }

    onchangeValue() {
        this.setState(store.getState())
    }

    changeInputValue(e) {
        const action = {
            type: CHANGE_INPUT,
            value: e.target.value
        }
        store.dispatch(action)
    }

    addList() {
        const action = {
            type: ADD_ITEM
        }
        store.dispatch(action)
    }

    deleteItem(index) {
        console.log(index)
        const action = {
            type: DELETE_ITEM,
            index
        }
        store.dispatch(action)
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue.bind(this)}
                addList={this.addList.bind(this)}
                deleteItem = {this.deleteItem.bind(this)}
            />
        )
    }
}

export default TodoList