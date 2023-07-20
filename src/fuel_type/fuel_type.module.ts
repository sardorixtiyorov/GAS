import { Module } from '@nestjs/common';
import { FuelTypeController } from './fuel_type.controller';
import { FuelTypeService } from './fuel_type.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { FuelType } from './models/fuel_type.model';

@Module({
  imports: [SequelizeModule.forFeature([FuelType])],
  controllers: [FuelTypeController],
  providers: [FuelTypeService],
})
export class FuelTypeModule {}
