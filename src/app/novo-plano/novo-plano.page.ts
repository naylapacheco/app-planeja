import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-plano',
  templateUrl: './novo-plano.page.html',
  styleUrls: ['./novo-plano.page.scss'],
})
export class NovoPlanoPage implements OnInit {
erro;
  constructor() { 

  }

  ngOnInit() {

  }
  calcular(form){
    const nomeDoPlano = form.value.nome
    const custoMensal = form.value.custoMensal
    const faturamentoMensal = form.value.faturamentoMensal

    if(parseInt(custoMensal) > parseInt(faturamentoMensal)){
      this.erro = "Seu custo mensal é maior que seu faturamento."
    } else {
      sessionStorage.setItem(nomeDoPlano, JSON.stringify(form.value))
      this.erro=" Cadastrado com sucesso!"
      form.reset()
    }
   
    
  }

}
