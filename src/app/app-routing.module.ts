import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'novo-plano', loadChildren: './novo-plano/novo-plano.module#NovoPlanoPageModule' },
  { path: 'plano-detalhe', loadChildren: './plano-detalhe/plano-detalhe.module#PlanoDetalhePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
