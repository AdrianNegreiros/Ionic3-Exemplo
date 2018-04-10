import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ContactProvider } from './../../providers/contact/contact';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contacts: Observable<any[]>;
  tabBarElement: any;
  splash = true;
  constructor(public navCtrl: NavController, private provider: ContactProvider,
    private toast: ToastController) {
    this.tabBarElement=document.querySelector('.tabbar');
    this.contacts = this.provider.getAll();
  }

  newContact() {
    this.navCtrl.push('ContactEditPage');
  }
 
  editContact(contact: any) {
    // Maneira 1
    this.navCtrl.push('ContactEditPage', { contact: contact });
 
    // Maneira 2
    // this.navCtrl.push('ContactEditPage', { key: contact.key });
  }
 
  removeContact(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
        });
    }
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display='none';
    setTimeout(() => {
       this.splash=false;
       this.tabBarElement.style.display='flex';
   }, 4000);

  }

}