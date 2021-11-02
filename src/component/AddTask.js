
import React, { useState } from 'react';
import TaskList from './TaskList';

function AddTask(props) {
    // khai báo 1 hook để lấy giá trị nhập vào trong input
  const [name, setName] = useState("");
// gọi tới arrow function closeForm của TaskList thay đổi giá trị showAddForm
   const linkList = () => {
        props.closeForm()
    }
    // gửi name nhập ở input qua addTask để nối vào mảng namep
    // sau đó gọi tới linkList => closeForm để thay đổi showAddForm thành false
   const handleAddTask = () => {
        props.addTask(name);
        linkList();
    }
    // cài đặt name từ giá trị nhập vào từ input
    const isChangedName = (e) => {
     
           setName(e.target.value);
        
    }
// nếu showAddForm === true quay về TaskList 
        if (props.showAddForm === true) {
            return (
                <TaskList />
            )
    // nếu showAddForm === false hiển thị ra màn hình như bên dưới
        } else {
            return (
                <React.Fragment>
                    <div className="container">
                        <h2>Add New Task</h2>
                        <div className="form-group">
                            <label>Name</label>
                            {/* onchange khi có thay đổi gọi tới isChangedName cài  giá trị vào name*/}
                            <input type="text" className="form-control" placeholder="Enter name of task" onChange={isChangedName} />
                        </div>
                            {/* onclick gọi tới hàm handleAddTask trong handleAddTask gọi tới addTask gửi name qua và cộng vào mảng namep
                            sau đó gọi hàm linkList => gọi tới closeForm để cài đặt showAddForm, hiển thị ra màn hình giao diện TaskList */}
                        <button type="submit" className="btn btn-default" onClick={handleAddTask}>Add</button>
                      {/* không thêm gì cả gọi tới linkList rồi gọi tới hàm closeForm của TaskLish thay đổi giá trị của showAddForm
                      và hiển thị ra màn hình gia diện TaskList  */}
                        <button type="button" className="btn btn-default" onClick={linkList}>Back</button>
                    </div>
                </React.Fragment>
            );
        }
    
}

export default AddTask;