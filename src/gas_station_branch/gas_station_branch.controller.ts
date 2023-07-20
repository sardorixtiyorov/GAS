import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GasStationBranchService } from './gas_station_branch.service';
import { CreateGasStationBranchDto } from './dto/create-gas_station_branch.dto';
import { GasStationBranch } from './models/gas_station_branch.model';
import { UpdateGasStationBranchDto } from './dto/update-gas_station_branch.dto';

@Controller('gas_station_branch')
export class GasStationBranchController {
  constructor(
    private readonly gasStationBranchService: GasStationBranchService,
  ) {}
  @Post()
  async createGasStationBranch(
    @Body() createGasStationBranchDto: CreateGasStationBranchDto,
  ): Promise<GasStationBranch> {
    return await this.gasStationBranchService.createGasStationBranch(
      createGasStationBranchDto,
    );
  }
  @Get()
  async getAllGasStationBranch(): Promise<GasStationBranch[]> {
    return await this.gasStationBranchService.getAllGasStationBranch();
  }
  @Get('/:id')
  async getGasStationBranchById(
    @Param('id') id: string,
  ): Promise<GasStationBranch> {
    return await this.gasStationBranchService.getGasStationBranchById(+id);
  }
  @Delete('/:id')
  async deleteGasStationBranchById(@Param('id') id: string) {
    return await this.gasStationBranchService.deleteGasStationBranchById(+id);
  }
  @Put('/:id')
  async updateGasStationBranch(
    @Param('id') id: string,
    @Body() updateGasStationBranchDto: UpdateGasStationBranchDto,
  ): Promise<GasStationBranch> {
    return await this.gasStationBranchService.updateGasStationBranch(
      +id,
      updateGasStationBranchDto,
    );
  }
}
