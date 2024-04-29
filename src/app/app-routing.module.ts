import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponseCodeComponent } from './response-code/response-code.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', outlet: 'appComponent', component: AppComponent },
  { path: 'addResponseCode', outlet: 'resoonseCodeComponent', component: ResponseCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
