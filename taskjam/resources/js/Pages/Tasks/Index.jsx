import React, { useState } from "react";
import TaskView from "@/Components/TaskView";

export default function Index() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Complete homework", description: "Finish math and science assignments by Monday." },
        { id: 2, title: "Grocery shopping", description: "Buy milk, eggs, bread, and fruits." },
    ]);

    // Function to delete a task
    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Function to add a new task
    const handleCreate = () => {
        const newTask = {
            id: tasks.length + 1,
            title: "New Task",
            description: "Description for the new task.",
        };
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <TaskView tasks={tasks} onDelete={handleDelete} onCreate={handleCreate} />
        </div>
    );
}
