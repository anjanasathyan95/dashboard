import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RetailComponent } from './retail/retail.component';
import { RetailoneComponent } from './retail/retailone/retailone.component';
import { RetailtwoComponent } from './retail/retailtwo/retailtwo.component';


const routes: Routes = [

  { path: '',redirectTo:'/home',pathMatch:'full'},
  // { path: 'home',component: HomeComponent },
  { path: 'retail', component: RetailComponent, children:[

        { path:'retailone',component: RetailoneComponent },
        { path:'retailtwo', component: RetailtwoComponent},
  ] }, 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
