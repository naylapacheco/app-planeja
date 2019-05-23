import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plano-detalhe',
  templateUrl: './plano-detalhe.page.html',
  styleUrls: ['./plano-detalhe.page.scss'],
})
export class PlanoDetalhePage implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    
  }
  ionViewDidEnter(){
    const nomeDoPlano = this.activatedRoute.snapshot.params.nome
    console.log(nomeDoPlano)
  }
}
