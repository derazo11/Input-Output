import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  errorMessage: string='';
  userSelect:string='';
  mensajeAgregado:string='';

    users =[
      {
        name:'Daniel',
        email:'harolddanieles@gmail.com',
        age:28,
        ciudad_nac:'Samaniego',
        direccion:'Urbanizacion Nuevo Samaniego'
      },
      {
        
        name:'Juan',
        email:'juan@gmail.com',
        age:34,
        ciudad_nac:'Pasto',
        direccion:'Barrio Ciudad Jardin'
      },
      {
        
        name:'Carlos',
        email:'Carlos@gmail.com',
        age:19,
        ciudad_nac:'La llanada',
        direccion:'Plaza central'
      }
    ];


    usuarioSeleccionado(nameUser:string){
      this.userSelect = nameUser
    }
    removeUser(userName: string) {
      this.users = this.users.filter(user => user.name !== userName);
    }
    addUser(name: string, email: string, age: number,ciudad_nac:string,direccion:string) {
      const userExists = this.users.some(user => user.name === name || user.email === email);
    if (userExists ||name==''||email==''||age==null||ciudad_nac==''||direccion=='') {
      this.errorMessage = 'El usuario con el nombre o el email estan repetidos o hay campos vacios';
      return;
    }
      this.users.push({ name, email, age,ciudad_nac,direccion});
      this.mensajeAgregado='El ususario fue agregado correctamente'

  }
}