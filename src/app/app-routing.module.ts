import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  //paths
  {path:'create',component:CreateItemComponent},
  {path:'home',component:HomepageComponent},



  {path:'',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
