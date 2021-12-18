import React, { useState }from 'react';
import { Input, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { cloneDeep } from 'lodash-es'

const TodoItem = () => {
  const [todoList, setsTodoList] = useState([])
  const [template, setTemplate] = useState('')

  const enterContent = (value) => {
    setTemplate(value)
  }

  const addItem = () => {
    if(template){
      setsTodoList([template, ...todoList])
    }
    setTemplate('')
  }

  const deleteItem = (index) => {
    console.log(index)
    const newList = cloneDeep(todoList)
    const list = newList.filter((item, i) => i !== index)
    setsTodoList(list)
  }

  return (
      <div className="todoItem">
          <div className="addItem"><Input onChange={(e)=> enterContent(e.target.value)} value={template} /><Button type="primary" onClick={() => addItem()}>Add</Button></div>
          <ul className='list'>
            {todoList.map((item, index) => {
              return (
                <li>{item}<div className='delete' onClick={() => deleteItem(index)}><CloseOutlined style={{ marginLeft: '5px', fontSize: '16px', color: '#08c' }} /></div></li>
              )
            })}
          </ul>
      </div>
  )
}

export default TodoItem