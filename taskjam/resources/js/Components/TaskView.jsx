import React from "react";

export default function TaskView({ tasks, onDelete, onCreate }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                    Task List
                </h1>
                {tasks.length > 0 ? (
                    <ul className="space-y-4">
                        {tasks.map((task, index) => (
                            <li
                                key={index}
                                className="p-4 border border-gray-300 rounded-lg hover:shadow-md flex justify-between items-center"
                            >
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {task.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {task.description}
                                    </p>
                                </div>
                                <button
                                    onClick={() => onDelete(task.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="text-center">
                        <p className="text-gray-600 mb-4">
                            No tasks available. Please create a task.
                        </p>
                        <button
                            onClick={onCreate}
                            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                        >
                            Create Task
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
