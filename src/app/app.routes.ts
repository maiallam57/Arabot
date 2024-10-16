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
import { AlphabetsComponent } from './features/pages/arabic-for-kids/components/alphabets/alphabets.component';
import { NumbersComponent } from './features/pages/arabic-for-kids/components/numbers/numbers.component';
import { AnimalsComponent } from './features/pages/arabic-for-kids/components/animals/animals.component';
import { ColorsComponent } from './features/pages/arabic-for-kids/components/colors/colors.component';
import { FamilyMembersComponent } from './features/pages/arabic-for-kids/components/family-members/family-members.component';
import { PlanetNamesComponent } from './features/pages/arabic-for-kids/components/planet-names/planet-names.component';
import { ShapesComponent } from './features/pages/arabic-for-kids/components/shapes/shapes.component';
import { HousekitchenSchoolComponent } from './features/pages/arabic-for-kids/components/housekitchen-school/housekitchen-school.component';
import { FacialExpressionsComponent } from './features/pages/arabic-for-kids/components/facial-expressions/facial-expressions.component';
import { TimeComponent } from './features/pages/arabic-for-kids/components/time/time.component';
import { WeekdaysAndMonthsComponent } from './features/pages/arabic-for-kids/components/weekdays-and-months/weekdays-and-months.component';
import { ExplaintopicFeatureComponent } from './shared/Components/explaintopic-feature/explaintopic-feature.component';

export const routes: Routes = [
    { path: "", redirectTo: "overview", pathMatch: "full" },
    { path: "overview", component: OverviewComponent, title: "Overview" },
    { path: "register", component: RegisterComponent, title: "Register" },
    { path: "team", component: TeamComponent, title: "Team" },
    { path: "learn", component: LearnComponent, title: "Learn" },
    { path: "resources", component: ResourcesComponent, title: "Resources" },
    { path: "chatInArabic", component: ChatInArabicComponent, title: "Chat In Arabic" },

    { path: "explainTopic", component: ExplainTopicsComponent, title: "Explain Topic" },
    { path: "SentenceStructure", component: ExplaintopicFeatureComponent, title: "Sentence Structure" },
    { path: "GrammarInArabic", component: ExplaintopicFeatureComponent, title: "Grammar In Arabic" },
    { path: "ParsingInArabic", component: ExplaintopicFeatureComponent, title: "Parsing In Arabic" },

    { path: "arabicForKids", component: ArabicForKidsComponent, title: "Arabic For Kids" },
    { path: "alphabets", component: AlphabetsComponent, title: "Alphabets" },
    { path: "numbers", component: NumbersComponent, title: "Numbers" },
    { path: "animals", component: AnimalsComponent, title: "Animals" },
    { path: "Fruitsandvegetables", component: AnimalsComponent, title: "Fruits And Vegetables" },
    { path: "Colors", component: ColorsComponent, title: "Colors" },
    { path: "FamilyMembers", component: FamilyMembersComponent, title: "Family Members" },
    { path: "PlanetNames", component: PlanetNamesComponent, title: "Planet Names" },
    { path: "Shapes", component: ShapesComponent, title: "Shapes" },
    { path: "HousekitchenSchool", component: HousekitchenSchoolComponent, title: "House kitchen School" },
    { path: "FacialExpressions", component: FacialExpressionsComponent, title: "Facial Expressions" },
    { path: "Time", component: TimeComponent, title: "Time" },
    { path: "WeekdaysandMonths", component: WeekdaysAndMonthsComponent, title: "Weekdays And Months" },

    { path: "learnArabic", component: LearnArabicComponent, title: "Learn Arabic" },
    { path: "chatWithYourBook", component: ChatWithYourBookComponent, title: "Chat With Your Book" },
    { path: "miniMuslim", component: MiniMuslimComponent, title: "Mini Muslim" },







    { path: "**", component: NotfoundComponent, title: "Not Found" }

];
