import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { HabitacionService } from './habitacion.service';
import type { Habitacion } from './Models/habitacion'; 
import { CreateHabitacionDto } from './dto/create-habitacion.dto';

@Controller('habitaciones')
export class HabitacionController {

    //Contructor para inyectar el servicio de categorias
    constructor(private habitacionService: HabitacionService) {}

    @Get()
    obtener(): Habitacion[] {
        return this.habitacionService.obtener();
    }

    @Get(':id')
    buscarPorId(@Param('id') id: number): Habitacion | undefined {
        return this.habitacionService.buscarPorId(Number(id));
    }
    @Post()
    crear(@Body() dto: CreateHabitacionDto): Habitacion {
        return this.habitacionService.crear(dto as Habitacion);
    }

    @Put(':id')
    actualizar(@Param('id') id: number, @Body() habitacion: Habitacion): Habitacion | undefined {
        return this.habitacionService.actualizar(Number(id), habitacion);
    }

    @Delete(':id')
    eliminar(@Param('id') id: number): boolean {
        return this.habitacionService.eliminar(Number(id));
    }   



}
