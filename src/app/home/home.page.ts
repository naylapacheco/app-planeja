import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  planejamentos = []
  ionViewDidEnter(){
    this.planejamentos = []
    const tamanhoDoBanco = sessionStorage.length
    for (let index = 0; index < tamanhoDoBanco; index++) {
      const chave = sessionStorage.key(index)
      if(chave !== 'ionic-persist-config'){
      const planejamento = sessionStorage.getItem(chave)
      this.planejamentos.push(JSON.parse(planejamento))
      }
      
    }
  }

}
