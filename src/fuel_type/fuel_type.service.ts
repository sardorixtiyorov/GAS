import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FuelType } from './models/fuel_type.model';
import { CreateFuelTypeDto } from './dto/create-fuel_type.dto';
import { UpdateFuelTypeDto } from './dto/update-fuel_type.dto';

@Injectable()
export class FuelTypeService {
  constructor(@InjectModel(FuelType) private fuelTypeRepo: typeof FuelType) {}

  async createFuelType(
    createFuelTypeDto: CreateFuelTypeDto,
  ): Promise<FuelType> {
    const new_fuelType = await this.fuelTypeRepo.create(createFuelTypeDto);
    return new_fuelType;
  }
  async getAllFuelType(): Promise<FuelType[]> {
    const companies = await this.fuelTypeRepo.findAll({
      include: { all: true },
    });
    return companies;
  }
  async getFuelTypeById(id: number): Promise<FuelType> {
    const fuelType = await this.fuelTypeRepo.findByPk(id, {
      include: { all: true },
    });
    // const fuelType = await this.fuelTypeRepo.findOne({ where: { id } });
    if (!FuelType) {
      throw 'No such a FuelType found!';
    }
    return fuelType;
  }
  async deleteFuelTypeById(id: number): Promise<number> {
    return await this.fuelTypeRepo.destroy({ where: { id } });
  }
  async updateFuelType(
    id: number,
    updateFuelTypeDto: UpdateFuelTypeDto,
  ): Promise<FuelType> {
    const fuelType = await this.fuelTypeRepo.update(updateFuelTypeDto, {
      where: { id },
      returning: true,
    });
    return fuelType[1][0].dataValues;
  }
}
