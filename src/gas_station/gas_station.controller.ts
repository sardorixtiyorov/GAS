import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GasStationService } from './gas_station.service';
import { CreateGasStationDto } from './dto/create-gas_station.dto';
import { GasStation } from './models/gas_station.model';
import { UpdateGasStationDto } from './dto/update-gas_station.dto';

@Controller('gas_station')
export class GasStationController {
  constructor(private readonly gasStationService: GasStationService) {}
  @Post()
  async createGasStation(
    @Body() createGasStationDto: CreateGasStationDto,
  ): Promise<GasStation> {
    return await this.gasStationService.createGasStation(createGasStationDto);
  }
  @Get()
  async getAllGasStation(): Promise<GasStation[]> {
    return await this.gasStationService.getAllGasStation();
  }
  @Get('/:id')
  async getGasStationById(@Param('id') id: string): Promise<GasStation> {
    return await this.gasStationService.getGasStationById(+id);
  }
  @Delete('/:id')
  async deleteGasStationById(@Param('id') id: string) {
    return await this.gasStationService.deleteGasStationById(+id);
  }
  @Put('/:id')
  async updateGasStation(
    @Param('id') id: string,
    @Body() updateGasStationDto: UpdateGasStationDto,
  ): Promise<GasStation> {
    return await this.gasStationService.updateGasStation(
      +id,
      updateGasStationDto,
    );
  }
}
