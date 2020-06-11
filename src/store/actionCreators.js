import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'
import axios from 'axios'


export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type:DELETE_ITEM,
    index
})

export const getListAction = (list) => ({
    type:GET_LIST,
    list
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://rap2.taobao.org:38080/app/mock/257682/v1/getList').then((res)=>{
            const data = res.data.list;
            const action = getListAction(data)
            dispatch(action)
        }).catch((err)=>{
            console.log(err)
        })
    }
}