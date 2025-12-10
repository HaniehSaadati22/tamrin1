import { Routes } from '@angular/router';
import { HomePage } from './+pages/home-page/home-page';
import { AboutePage } from './+pages/aboute-page/aboute-page';
import { AbilitiesPage } from './+pages/abilities-page/abilities-page';
import { ContactPage } from './+pages/contact-page/contact-page';

export const routes: Routes = [
    {path:'home',component:HomePage},
    {path:'contect',component:ContactPage},
    {path:'aboute',component:AboutePage},
    {path:'abihities',component:AbilitiesPage},
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'**',redirectTo:'/home'},
];
