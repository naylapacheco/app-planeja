import { Component } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private alert: AlertController,
    private router: Router,
    ){

  }
  planejamentos = []

  listar (){
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
  //await força o fluxo a parar ...create é um metodo , alertTemp é minha variavel//
  async exibirAlertaDeExclusao (nomeDoPlano) {
    const alertTemp = await this.alert.create({
      header: 'Exclusão de plano',
      subHeader:'Deseja realmente excluir esse plano?' + nomeDoPlano + '?',
    message:'',
    buttons:[{
      text:'Cancelar',
      handler: function(){
        console.log("Clicou no cancelar")
      }
    },{
      text:"Ecluir",
      handler: ()=>{
        sessionStorage.removeItem(nomeDoPlano)
        this.listar()

      }
    }]
    })
    await alertTemp.present()

  }
  //metodo excluir//
  excluir(nomeDoPlano){
    this.exibirAlertaDeExclusao(nomeDoPlano)
    //sessionStorage.removeItem(nomeDoPlano)
    //this.listar()
    

  }
  //essa funç]ao sera executada cuando sera exexutada quando for clicada em 
  irParaDetalhes(nomeDoPlano){
    this.router.navigate(['/plano-detalhe', nomeDoPlano])


  }
 
    editar(nomeDoPlano){
      this.router.navigate(['/editar-plano', nomeDoPlano])

    }
  //Esxecuta primeiro.carrega primeiro,executa tudo de novo: ionViewDidEnter//
  ionViewDidEnter(){
    this.listar()
   
  }

}
