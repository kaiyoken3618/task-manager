import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interface/task.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-task-item', 
  standalone: true, 
  imports:[CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input()
  task!: Task;

  constructor(private taskService: TaskService) {}

  toggleCompletion(): void {
    this.taskService.toggleTaskCompletion(this.task.id);
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.task.id);
  }
}
