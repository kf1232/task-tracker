'use client';

import '@/styles/globals.css';
import { useState, useEffect } from 'react';
import { loadDailyTaskData, saveDailyTaskData, toggleTaskCompletion } from '@/app/data/stateManagement/dailyActivities';

export default function DailyTasks() {
    const [tasks, setTasks] = useState(loadDailyTaskData());

    useEffect(() => {
        saveDailyTaskData(tasks);
    }, [tasks]);

    const handleToggleCompletion = (id: string) => {
        toggleTaskCompletion(id);
        setTasks(loadDailyTaskData());
    };

    return (
        <div className="bg-dark min-h-screen p-6 text-secondary">
            <h1 className="text-4xl font-bold text-primary mb-6">Daily Task Tracker</h1>
            <ul className="space-y-4">
                {tasks.map((task) => (
                    <li key={task.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md">
                        <div>
                            <h2 className="text-lg font-semibold">{task.name}</h2>
                            <p className="text-sm">{task.description}</p>
                        </div>
                        <button
                            className={`px-4 py-2 rounded-md ${
                                task.completed ? 'bg-green-600' : 'bg-red-600'
                            } text-white`}
                            onClick={() => handleToggleCompletion(task.id)}
                        >
                            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
