import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
  providers: [
    MoovieProvider
  ]
})
export class TestPage { //escopo da pagina

  public objeto_test = {
      titulo: "Derio Matheus",
      data: "April 8, 2018",
      descricao:"Boa Noite veja o meu novo APP.",
      qtd_likes: 12,
      qtd_comments: 4,
      time_comments:"11h ago"
  }
    //_ varivel e classe c
  public nome_usuario:string = "Derio Matheus"; //Restringir o valor, variável. Any = Aceita qualquer valor.

  public somaDoisNumeros(num1:number, num2:number): void{ //Garbe collection
    //alert("Minha funcao funcionou...");
    //alert(num1 + num2); //Não colocar entre aspas....
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private moovieProvider:MoovieProvider                        
  ) {
  }

  ionViewDidLoad() { // pontos de execução do ciclo de vida da app.
    this.moovieProvider.getLatstMovies().subscribe(
      data=>{
        console.log(data);
      }, error =>{
        console.error();
      }
      )
    //console.log('ionViewDidLoad TestPage');
    //this.somaDoisNumeros(15, 790);
  }}  //entra no diretorio
