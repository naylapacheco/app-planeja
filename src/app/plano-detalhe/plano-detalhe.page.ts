import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plano-detalhe',
  templateUrl: './plano-detalhe.page.html',
  styleUrls: ['./plano-detalhe.page.scss'],
})
export class PlanoDetalhePage implements OnInit {
nomeDoPlano;
custoMensal;
FaturamentoMensal;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    
  }
  mostrardDetalhes(){
    //contante , o activateRoute é para gerenciaar ou pegar a url 
    const nomeDoPlano = this.activatedRoute.snapshot.params.id
    const planostring = sessionStorage.getItem(nomeDoPlano)
    const planoReal = JSON.parse(planostring)
     console.log(planoReal)
     this.nomeDoPlano = planoReal.nome
     this.custoMensal = planoReal.custoMensal
     this.FaturamentoMensal = planoReal.faturamentoMensal
  }
//o metodo que é chamdo toda vez que é colocado
  ionViewDidEnter(){
    this.mostrardDetalhes()
  }
}
