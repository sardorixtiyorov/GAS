import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GasStationFuelTypeService } from './gas_station_fuel_type.service';
import { CreateGasStationFuelTypeDto } from './dto/create-gas_station_fuel_type.dto';
import { GasStationFuelType } from './models/gas_station_fuel_type.model';
import { UpdateGasStationFuelTypeDto } from './dto/update-gas_station_fuel_type.dto';

@Controller('gas_station_fuel_type')
export class GasStationFuelTypeController {
  constructor(
    private readonly gasStationFuelTypeService: GasStationFuelTypeService,
  ) {}
  @Post()
  async createGasStationFuelType(
    @Body() createGasStationFuelTypeDto: CreateGasStationFuelTypeDto,
  ): Promise<GasStationFuelType> {
    return await this.gasStationFuelTypeService.createGasStationFuelType(
      createGasStationFuelTypeDto,
    );
  }
  @Get()
  async getAllGasStationFuelType(): Promise<GasStationFuelType[]> {
    return await this.gasStationFuelTypeService.getAllGasStationFuelType();
  }
  @Get('/:id')
  async getGasStationFuelTypeById(
    @Param('id') id: string,
  ): Promise<GasStationFuelType> {
    return await this.gasStationFuelTypeService.getGasStationFuelTypeById(+id);
  }
  @Delete('/:id')
  async deleteGasStationFuelTypeById(@Param('id') id: string) {
    return await this.gasStationFuelTypeService.deleteGasStationFuelTypeById(
      +id,
    );
  }
  @Put('/:id')
  async updateGasStationFuelType(
    @Param('id') id: string,
    @Body() updateGasStationFuelTypeDto: UpdateGasStationFuelTypeDto,
  ): Promise<GasStationFuelType> {
    return await this.gasStationFuelTypeService.updateGasStationFuelType(
      +id,
      updateGasStationFuelTypeDto,
    );
  }
}
