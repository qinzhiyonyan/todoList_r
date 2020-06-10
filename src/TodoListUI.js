import React from "react";
import 'antd/dist/antd.css'
import {Button, Input, List} from "antd";
class TodoListUI extends React.Component{
    render() {
        return(
            <div>
                <div style={{margin: '10px'}}>
                    <Input
                        value={this.props.inputValue}
                        placeholder="write something"
                        style={{width: '250px', marginRight: '36px'}}
                        onChange={this.props.changeInputValue}
                    />
                    <Button type="primary" onClick={this.props.addList}>增加</Button>
                </div>
                <List
                    size="small"
                    style={{marginLeft: '10px', width: '350px'}}
                    header={<div>待处理事项</div>}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (<List.Item
                        onClick={this.props.deleteItem.bind(this,index)}>{item}</List.Item>) }
                />
            </div>
        )
    }
}
export default TodoListUI