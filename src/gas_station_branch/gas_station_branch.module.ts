import { Module } from '@nestjs/common';
import { GasStationBranchController } from './gas_station_branch.controller';
import { GasStationBranchService } from './gas_station_branch.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationBranch } from './models/gas_station_branch.model';

@Module({
  imports: [SequelizeModule.forFeature([GasStationBranch])],
  controllers: [GasStationBranchController],
  providers: [GasStationBranchService],
})
export class GasStationBranchModule {}
