import React from "react";
import 'antd/dist/antd.css'
import TodoListUI from './TodoListUI'

import store from "./store";
import {changeInputAction, addItemAction, deleteItemAction, getTodoList} from './store/actionCreators'


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
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    addList() {
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    componentDidMount() {
        const action = getTodoList()
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