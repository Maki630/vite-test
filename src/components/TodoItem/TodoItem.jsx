import React, { useState }from 'react';
import { Input, Button } from 'antd';

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

  return (
      <div className="todoItem">
          <div className="addItem"><Input onChange={(e)=> enterContent(e.target.value)} value={template} /><Button type="primary" onClick={() => addItem()}>Add</Button></div>
          <ul className='list'>
            {todoList.map(item => {
              return (
                <li>{item}</li>
              )
            })}
          </ul>
      </div>
  )
}

export default TodoItem