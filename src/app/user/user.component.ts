import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //Recibimos los datos del usuario desde el padre appcomponent
  @Input() name:string='';
  @Input() email:string='';
  @Input() age:number=0;
  //Este evento va a eliminar un usuario del arreglo mandando el nombre
  @Output() userRemoved: EventEmitter<string> = new EventEmitter<string>();
  //Enviamos al padre el nombre del usuario seleccionado
  @Output() usuarioSeleccionado = new EventEmitter<string>;
  userSelect(){
    this.usuarioSeleccionado.emit(this.name)
  }

  removeUser() {
    this.userRemoved.emit(this.name);
  }



}
