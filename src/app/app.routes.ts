import { Routes } from '@angular/router';
import { OverviewComponent } from './core/pages/overview/overview.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { NotfoundComponent } from './core/pages/notfound/notfound.component';
import { TeamComponent } from './core/pages/team/team.component';
import { ResourcesComponent } from './core/pages/resources/resources.component';

export const routes: Routes = [
    { path: "", redirectTo: "overview", pathMatch: "full" },
    { path: "overview", component: OverviewComponent, title: "Overview" },
    { path: "register", component: RegisterComponent, title: "Register" },
    { path: "team", component: TeamComponent, title: "Team" },
    { path: "resources", component: ResourcesComponent, title: "Resources" },


    { path: "**", component: NotfoundComponent, title: "Not Found" }

];
