import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {   //Variables publicas por defecto, si se ponen privadas solo tendra acceso la clase.
  welcome = 'Bienvenido a mi primera aplicacion con Angular';
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio',
  ];
  name = signal('Felipe');
  age = '26';
  isDisabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Felipe Triana',
    age: 26,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler(){
    alert('Asi como un viajero que vuelve la cabeza hacia los horizontes azules transpuestos en la mañana');
  }

  //Algunos eventos se pueden enviar como parametro
  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
