import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewResponseCodeComponent } from './add-new-response-code/add-new-response-code.component';
import { TableComponent } from './table/table.component';
import { EditResponseCodeComponent } from './edit-response-code/edit-response-code.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'addNewResponseCode', component: AddNewResponseCodeComponent },
  { path: 'editResponseCode/:id', component: EditResponseCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
