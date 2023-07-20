import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FuelTypeService } from './fuel_type.service';
import { CreateFuelTypeDto } from './dto/create-fuel_type.dto';
import { FuelType } from './models/fuel_type.model';
import { UpdateFuelTypeDto } from './dto/update-fuel_type.dto';

@Controller('fuel_type')
export class FuelTypeController {
  constructor(private readonly fuelTypeService: FuelTypeService) {}
  @Post()
  async createFuelType(
    @Body() createFuelTypeDto: CreateFuelTypeDto,
  ): Promise<FuelType> {
    return await this.fuelTypeService.createFuelType(createFuelTypeDto);
  }
  @Get()
  async getAllFuelType(): Promise<FuelType[]> {
    return await this.fuelTypeService.getAllFuelType();
  }
  @Get('/:id')
  async getFuelTypeById(@Param('id') id: string): Promise<FuelType> {
    return await this.fuelTypeService.getFuelTypeById(+id);
  }
  @Delete('/:id')
  async deleteFuelTypeById(@Param('id') id: string) {
    return await this.fuelTypeService.deleteFuelTypeById(+id);
  }
  @Put('/:id')
  async updateFuelType(
    @Param('id') id: string,
    @Body() updateFuelTypeDto: UpdateFuelTypeDto,
  ): Promise<FuelType> {
    return await this.fuelTypeService.updateFuelType(+id, updateFuelTypeDto);
  }
}
