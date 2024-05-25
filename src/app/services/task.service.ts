import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksKey = 'tasks';
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.getTasksFromLocalStorage());

  constructor() {}

  private getTasksFromLocalStorage(): Task[] {
    const tasksJson = localStorage.getItem(this.tasksKey);
    return tasksJson ? JSON.parse(tasksJson) : [];
  }

  private saveTasksToLocalStorage(tasks: Task[]): void {
    localStorage.setItem(this.tasksKey, JSON.stringify(tasks));
  }

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(title: string): void {
    const tasks = this.tasksSubject.value;
    const newTask: Task = {
      id: tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
      title,
      completed: false
    };
    tasks.push(newTask);
    this.saveTasksToLocalStorage(tasks);
    this.tasksSubject.next(tasks);
  }

  deleteTask(id: number): void {
    const tasks = this.tasksSubject.value.filter(task => task.id !== id);
    this.saveTasksToLocalStorage(tasks);
    this.tasksSubject.next(tasks);
  }

  toggleTaskCompletion(id: number): void {
    const tasks = this.tasksSubject.value.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.saveTasksToLocalStorage(tasks);
    this.tasksSubject.next(tasks);
  }
}
