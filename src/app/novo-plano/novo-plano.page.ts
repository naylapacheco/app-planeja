import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novo-plano',
  templateUrl: './novo-plano.page.html',
  styleUrls: ['./novo-plano.page.scss'],
})
export class NovoPlanoPage {
  //nova classe dentro //
  constructor(private nav:NavController){

  }
erro;
 
  calcular(form){
    const nomeDoPlano = form.value.nome
    const custoMensal = form.value.custoMensal
    const faturamentoMensal = form.value.faturamentoMensal
    const custoMensalConvertido = parseInt(custoMensal)
    const faturamentoMensalConvertido = parseInt(faturamentoMensal)

    if( custoMensalConvertido > faturamentoMensalConvertido ){
      this.erro = "Seu custo mensal é maior que seu faturamento."
    } else {
      sessionStorage.setItem(nomeDoPlano, JSON.stringify(form.value))
      form.reset()
      //volta a pagina inicial//
      this.nav.back()
    }
   
    
  }

}
