import { ChatInArabicComponent } from './features/pages/chat-in-arabic/chat-in-arabic.component';
import { Routes } from '@angular/router';
import { OverviewComponent } from './core/pages/overview/overview.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { NotfoundComponent } from './core/pages/notfound/notfound.component';
import { TeamComponent } from './core/pages/team/team.component';
import { ResourcesComponent } from './core/pages/resources/resources.component';
import { ExplainTopicsComponent } from './core/pages/explain-topics/explain-topics.component';
import { LearnComponent } from './core/pages/learn/learn.component';
import { ArabicForKidsComponent } from './features/pages/arabic-for-kids/arabic-for-kids.component';
import { LearnArabicComponent } from './features/pages/learn-arabic/learn-arabic.component';
import { ChatWithYourBookComponent } from './features/pages/chat-with-your-book/chat-with-your-book.component';
import { MiniMuslimComponent } from './features/pages/mini-muslim/mini-muslim.component';

export const routes: Routes = [
    { path: "", redirectTo: "overview", pathMatch: "full" },
    { path: "overview", component: OverviewComponent, title: "Overview" },
    { path: "register", component: RegisterComponent, title: "Register" },
    { path: "team", component: TeamComponent, title: "Team" },
    { path: "learn", component: LearnComponent, title: "Learn" },
    { path: "resources", component: ResourcesComponent, title: "Resources" },
    { path: "chatInArabic", component: ChatInArabicComponent, title: "Chat In Arabic" },
    { path: "explainTopic", component: ExplainTopicsComponent, title: "Explain Topic" },
    { path: "arabicForKids", component: ArabicForKidsComponent, title: "Arabic For Kids" },
    { path: "learnArabic", component: LearnArabicComponent, title: "Learn Arabic" },
    { path: "chatWithYourBook", component: ChatWithYourBookComponent, title: "Chat With Your Book" },
    { path: "miniMuslim", component: MiniMuslimComponent, title: "Mini Muslim" },





    { path: "**", component: NotfoundComponent, title: "Not Found" }

];
