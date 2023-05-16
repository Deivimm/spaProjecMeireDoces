import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobreNos/sobreNos.component';
import { CasamentosComponent } from './casamentos/casamentos.component';
import { AniversariosComponent } from './aniversarios/aniversarios.component';
import { DocesComponent } from './doces/doces.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobreNos', component: SobreNosComponent },
  { path: 'casamentos', component: CasamentosComponent },
  { path: 'aniversarios', component: AniversariosComponent },
  { path: 'doces', component: DocesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
