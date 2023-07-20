import { Module } from '@nestjs/common';
import { GasStationFuelTypeController } from './gas_station_fuel_type.controller';
import { GasStationFuelTypeService } from './gas_station_fuel_type.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationFuelType } from './models/gas_station_fuel_type.model';

@Module({
  imports: [SequelizeModule.forFeature([GasStationFuelType])],
  controllers: [GasStationFuelTypeController],
  providers: [GasStationFuelTypeService],
})
export class GasStationFuelTypeModule {}
