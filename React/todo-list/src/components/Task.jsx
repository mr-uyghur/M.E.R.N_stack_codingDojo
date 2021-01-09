import React from 'react'

const Task = (props) => {
    const { task, index, list, setList } = props;
    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        });
    };

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete
        setList([...list])
        if(task.isComplete == true){
            console.log('its true')
            list[index].name = "task completed!"
        }
    }

    return (
        <div className="p-3 mb-2 bg-light text-dark">
            <p> {task.name}</p>
            <label htmlFor='checkbox'> Completed task? </label>
            <input onChange={onChange} type='checkbox' name='' checked={task.isComplete} />
            <button className="btn btn-danger" onClick={onClick}>Delete</button>
        </div>
    )
}

export default Task