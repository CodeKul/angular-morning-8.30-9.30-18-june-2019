import { FpComponent } from './fp/fp.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './dash/info/info.component';


const dashChildren: Routes = [
  { path: 'country', component: InfoComponent }
]

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dash/:usNm', component: DashComponent, children : dashChildren },
  { path: 'fp/:who', component: FpComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
