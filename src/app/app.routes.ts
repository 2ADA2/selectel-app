import {Routes} from '@angular/router';
import {WORKSPACE_ROUTE} from './routes/routes';

export const routes: Routes = [
  {
    path: WORKSPACE_ROUTE, loadComponent: () => import("./pages/workspace/workspace").then(m => m.Workspace)
  },
  {
    path: '', loadComponent: () => import("./pages/hello-page/hello-page").then(m => m.HelloPage)
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
]
