"use client"

import { useState, useEffect } from "react"

function TodoList() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState("")

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("todoTasks")
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks)
        setTasks(parsedTasks)
      } catch (error) {
        console.error("Error loading tasks from localStorage:", error)
      }
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks))
  }, [tasks])

  // Add a new task
  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(), // Simple ID generation
        text: inputValue.trim(),
        completed: false,
      }
      setTasks([...tasks, newTask])
      setInputValue("")
    }
  }

  // Remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  // Handle Enter key press in input
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask()
    }
  }

  // Get task statistics
  const completedCount = tasks.filter((task) => task.completed).length
  const totalCount = tasks.length

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "30px",
        }}
      >
        📝 Todo List App
      </h1>

      {/* Add Task Section */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task..."
          style={{
            flex: 1,
            padding: "12px",
            fontSize: "16px",
            border: "2px solid #ddd",
            borderRadius: "8px",
            outline: "none",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Add Task
        </button>
      </div>

      {/* Task Statistics */}
      {totalCount > 0 && (
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#666",
          }}
        >
          {completedCount} of {totalCount} tasks completed
        </div>
      )}

      {/* Tasks List */}
      <div>
        {tasks.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              color: "#999",
              fontStyle: "italic",
              padding: "40px",
            }}
          >
            No tasks yet. Add one above! 🚀
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "15px",
                margin: "8px 0",
                backgroundColor: task.completed ? "#f8f9fa" : "white",
                border: "2px solid #e9ecef",
                borderRadius: "8px",
                transition: "all 0.2s ease",
              }}
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                style={{
                  width: "18px",
                  height: "18px",
                  cursor: "pointer",
                }}
              />

              {/* Task Text */}
              <span
                style={{
                  flex: 1,
                  fontSize: "16px",
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "#6c757d" : "#333",
                  opacity: task.completed ? 0.7 : 1,
                }}
              >
                {task.text}
              </span>

              {/* Delete Button */}
              <button
                onClick={() => removeTask(task.id)}
                style={{
                  padding: "8px 12px",
                  fontSize: "14px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Clear Completed Tasks */}
      {completedCount > 0 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={() => setTasks(tasks.filter((task) => !task.completed))}
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Clear Completed ({completedCount})
          </button>
        </div>
      )}
    </div>
  )
}

export default TodoList
