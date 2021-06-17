import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceProfessionnelleComponent } from './components/experience-professionnelle/experience-professionnelle.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

const routes: Routes = [
  { path: '', redirectTo: '/me', pathMatch: 'full' },
  { path: 'me', component: AboutmeComponent },
  { path: 'ex', component: ExperienceProfessionnelleComponent },
  { path: 'ed', component: EducationComponent },
  { path: 'pr', component: ProjectsComponent },
  { path: 'co', component: ContactComponent },
  { path: '**', component: AboutmeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
