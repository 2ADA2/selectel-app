import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'workspace', loadComponent: () => import("./pages/workspace/workspace").then(m => m.Workspace)
  },
  {
    path: '', loadComponent: () => import("./pages/hello-page/hello-page").then(m => m.HelloPage)
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
]
