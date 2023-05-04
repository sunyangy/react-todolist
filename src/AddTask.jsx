import React from 'react';
import { useState } from 'react';

function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  const handleAdd = () => {
    if (!text) return;
    onAddTask(text);
    setText('');
  };
  return (
    <div className="input-con">
      <input
        type="text"
        className="input"
        placeholder="请输入待办项，待办项不能为空"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add-btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default AddTask;
