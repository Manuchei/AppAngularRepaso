import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itrabajador } from '../../interfaces/itrabajador';


@Component({
  selector: 'app-trabajador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trabajador.component.html',
  styleUrl: './trabajador.component.css'
})
export class TrabajadorComponent {

  arrTrabajadores: Itrabajador[] = [];

  nuevoTrabajador: Itrabajador = {
    nombre: "",
    apellidos: "",
    email: "",
    edad: -1,
    telefono: "",
    cargo: "vacio"
  }

  guardarDatos($event: any) {
    if(this.nuevoTrabajador.nombre.length>3)
    this.arrTrabajadores.push(this.nuevoTrabajador)
    console.log(this.arrTrabajadores)

    this.nuevoTrabajador  = {
      nombre: "",
      apellidos: "",
      email: "",
      edad: -1,
      telefono: "",
      cargo: "vacio"
    }
    }

    cargarDatos() {
      let html: string = "";
      this.arrTrabajadores.forEach(trabajador => {
        html += `<p>Nombre: ${trabajador.nombre} ${trabajador.apellidos}</p> <p>Email: ${trabajador.email}</p> <p>Telefono: ${trabajador.telefono}</p> <p>Cargo: ${trabajador.cargo}</p>`
      });
      return html;
      }

}
