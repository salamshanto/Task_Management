import React, { useState } from "react";

export default function Create() {
    const [tasks, setTasks] = useState([]);
    const [formData, setFormData] = useState({ title: "", description: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.description) {
            alert("Both fields are required.");
            return;
        }

        
        setTasks([...tasks, formData]);
        setFormData({ title: "", description: "" }); // Clear the form
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                    Create Task
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter task title"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter task description"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Add Task
                    </button>
                </form>

                {/* Display Tasks */}
                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-800">Task List:</h2>
                    {tasks.length > 0 ? (
                        <ul className="mt-4 space-y-2">
                            {tasks.map((task, index) => (
                                <li
                                    key={index}
                                    className="p-4 border border-gray-300 rounded-lg"
                                >
                                    <h3 className="font-semibold text-gray-700">{task.title}</h3>
                                    <p className="text-sm text-gray-600">{task.description}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-500 mt-2">
                            No tasks added yet.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
