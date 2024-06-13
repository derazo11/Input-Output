import { Component, Input } from '@angular/core';
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
        age:28
      },
      {
        
        name:'Juan',
        email:'juan@gmail.com',
        age:34
      },
      {
        
        name:'Carlos',
        email:'Carlos@gmail.com',
        age:19
      }
    ];


    usuarioSeleccionado(nameUser:string){
      this.userSelect = nameUser
    }
    removeUser(userName: string) {
      this.users = this.users.filter(user => user.name !== userName);
    }
    addUser(name: string, email: string, age: number) {
      const userExists = this.users.some(user => user.name === name || user.email === email);
    if (userExists) {
      this.errorMessage = 'El usuario con el nombre o el email estan repetidos';
      return;
    }
      this.users.push({ name, email, age});
      this.mensajeAgregado='El ususario fue agregado correctamente'

  }
}