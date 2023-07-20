import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStation } from './gas_station/models/gas_station.model';
import { GasStationModule } from './gas_station/gas_station.module';
import { GasStationBranch } from './gas_station_branch/models/gas_station_branch.model';
import { GasStationFuelType } from './gas_station_fuel_type/models/gas_station_fuel_type.model';
import { FuelType } from './fuel_type/models/fuel_type.model';
import { GasStationBranchModule } from './gas_station_branch/gas_station_branch.module';
import { GasStationFuelTypeModule } from './gas_station_fuel_type/gas_station_fuel_type.module';
import { FuelTypeModule } from './fuel_type/fuel_type.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [GasStation, GasStationBranch, GasStationFuelType, FuelType],
      autoLoadModels: true,
      logging: true,
    }),
    GasStationModule,
    GasStationBranchModule,
    GasStationFuelTypeModule,
    FuelTypeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
