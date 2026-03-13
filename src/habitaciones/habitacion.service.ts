import { Injectable } from '@nestjs/common';
import { Habitacion } from './Models/habitacion';

@Injectable()
export class HabitacionService {

  private habitaciones: Habitacion[] = [];

    // Crear
  private contadorId = 1;

  crear(habitacion: Habitacion): Habitacion {
      const nueva: Habitacion = {
          id: this.contadorId++,
          numero: habitacion.numero,
          tipo: habitacion.tipo,
          precio: habitacion.precio,
          disponible: habitacion.disponible,
      };
      this.habitaciones.push(nueva);
      return nueva;
  }

  // Leer
  obtener(): Habitacion[] {
    return this.habitaciones;
  }

  // Leer ID
  buscarPorId(id: number): Habitacion | undefined {
    return this.habitaciones.find(c => c.id === id);
  }

  // Actualizar
  actualizar(id: number, habitacion: Habitacion): Habitacion | undefined {
    const index = this.habitaciones.findIndex(c => c && c.id === id);

    if (index !== -1) {
      this.habitaciones[index] = habitacion;
      return this.habitaciones[index];
    }

    return undefined;
  }

  // Eliminar
  eliminar(id: number): boolean {
    const index = this.habitaciones.findIndex(c => c && c.id === id);
    if (index !== -1) {
      this.habitaciones.splice(index, 1);
      return true;
    }

    return false;
  }

}