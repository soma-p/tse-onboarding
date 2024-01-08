import React, { useEffect, useState } from "react";
import { getAllTasks, type Task } from "src/api/tasks";
import { TaskItem } from "src/components";
import styles from "src/components/TaskList.module.css";

export interface TaskListProps {
  title: string;
}

export function TaskList({ title }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // your code here
    getAllTasks().then((value) => {
      if (value.success) {
        setTasks(value.data);
      } else {
        alert(value.error);
      }
    });
  }, []);

  return (
    <div className={styles.listContainer}>
      <span className={styles.title}>{title}</span>
      <div className={styles.itemContainer}>
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one above to get started.</p>
        ) : (
          tasks.map((task) => (
            <ul key={task._id}>
              {" "}
              <TaskItem task={task} />
            </ul>
          ))
        )}
      </div>
    </div>
  );
}
