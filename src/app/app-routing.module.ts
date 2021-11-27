import { DownloadComponent } from './download/download.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'paginaInicio', pathMatch: 'full'},

  {path: 'paginaInicio', component: PaginaInicialComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'dowload', component: DownloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
