import TaskList from './TaskList';

function TodoList(props) {

        return <tr>
            {/* in  giá trị name khi name có trong  namep bằng hàm map  */}
            <td  style={{border:'1px solid red'}}  >{props.name}</td>
        </tr>
    
}

export default TodoList;