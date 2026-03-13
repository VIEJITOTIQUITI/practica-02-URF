import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HabitacionModule } from './habitaciones/habitacion.module';

@Module({
  imports: [HabitacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
