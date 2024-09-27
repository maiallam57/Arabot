import { ChatInArabicComponent } from './features/pages/chat-in-arabic/chat-in-arabic.component';
import { Routes } from '@angular/router';
import { OverviewComponent } from './core/pages/overview/overview.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { NotfoundComponent } from './core/pages/notfound/notfound.component';
import { TeamComponent } from './core/pages/team/team.component';
import { ResourcesComponent } from './core/pages/resources/resources.component';
import { ExplainTopicsComponent } from './core/pages/explain-topics/explain-topics.component';

export const routes: Routes = [
    { path: "", redirectTo: "overview", pathMatch: "full" },
    { path: "overview", component: OverviewComponent, title: "Overview" },
    { path: "chatInArabic", component: ChatInArabicComponent, title: "Chat In Arabic" },
    { path: "explainTopic", component: ExplainTopicsComponent, title: "Explain Topic" },
    { path: "register", component: RegisterComponent, title: "Register" },
    { path: "team", component: TeamComponent, title: "Team" },
    { path: "resources", component: ResourcesComponent, title: "Resources" },


    { path: "**", component: NotfoundComponent, title: "Not Found" }

];
