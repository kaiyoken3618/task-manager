import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { taskEditGuard } from './guards/task-edit.guard';

export const routes: Routes = [ 
    { path: '', component: TaskListComponent }, 
    // { path: 'edit/:id', component: TaskEditComponent, canActivate: [taskEditGuard] } // Assuming there's a TaskEditComponent
];
