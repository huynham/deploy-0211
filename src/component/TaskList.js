
import React, { useState } from 'react';
import AddTask from './AddTask';
import TodoList from './TodoList';

function TaskList() {
    // khai bao useState hook để cài đặt true, false ; để mặc định là false
const [showAddForm, setshowAddform ] = useState(false);
// khai bao useState hook để cài đặt hiển thị 2 task ví dụ trên màn hình
const [namep,setName]=useState(["task-1","task-2"]);
// khai bao hàm mũi tên cài đặt  showAddForm gọi trong function TaskLisk
    const setStatus = () => {
        setshowAddform(true);
    }
    // khai bao hàm mũi tên cài đặt  showAddForm gọi trong function Addtask
    const closeForm = () => {
        setshowAddform(false);
    }
    // cong thêm task mới do người dùng nhập vào 2 task đã cài trước đó
    const addTask = (name) => {
      namep.push(name)
        
    }
    // nếu showAddForm === true gọi gàm Addtask
   if (showAddForm === true){
       return (
        <AddTask addTask={addTask} closeForm={closeForm} />
       )
    /* showAddForm === false hiển thị nội dung bên dưới ra màn hình */
    
   }else {
        
            return (
                <div className="container">
                    <br />
                    <br /> 
                    {/* onclick gọi tới setStatus thay đổi giá trị showAddForm thành true để chuyển sang hàm AddTask  */}
                    <button type="button" className="btn btn-outline-primary" onClick={setStatus} >Add Task</button>

                    <h2>List Task</h2>
                    <table className="table table-striped">
                        
                            <tr>
                                <th>Name of task</th>
                            </tr>
                        
                        
                            {
                                // map qua mảng namep, gửi qua name qua Todolist để in, hiển thị kết quả mảng namep
                                namep.map(name=> {
                                    return <TodoList name={name}
                                    />
                                })
                            }
                        
                    </table>
                </div>
            );
        
   }
}

export default TaskList;