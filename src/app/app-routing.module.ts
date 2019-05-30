import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'novo-plano', loadChildren: './novo-plano/novo-plano.module#NovoPlanoPageModule' },
  /// id para chamar o od do que foi clicado
  { path: 'plano-detalhe/:id', loadChildren: './plano-detalhe/plano-detalhe.module#PlanoDetalhePageModule' },
  { path: 'editar-plano', loadChildren: './editar-plano/editar-plano.module#EditarPlanoPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
