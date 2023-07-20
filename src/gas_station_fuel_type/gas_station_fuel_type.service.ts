import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GasStationFuelType } from './models/gas_station_fuel_type.model';
import { CreateGasStationFuelTypeDto } from './dto/create-gas_station_fuel_type.dto';
import { UpdateGasStationFuelTypeDto } from './dto/update-gas_station_fuel_type.dto';

@Injectable()
export class GasStationFuelTypeService {
  constructor(
    @InjectModel(GasStationFuelType)
    private gasStationFuelTypeRepo: typeof GasStationFuelType,
  ) {}

  async createGasStationFuelType(
    createGasStationFuelTypeDto: CreateGasStationFuelTypeDto,
  ): Promise<GasStationFuelType> {
    const new_gasStationFuelType = await this.gasStationFuelTypeRepo.create(
      createGasStationFuelTypeDto,
    );
    return new_gasStationFuelType;
  }
  async getAllGasStationFuelType(): Promise<GasStationFuelType[]> {
    const companies = await this.gasStationFuelTypeRepo.findAll({
      include: { all: true },
    });
    return companies;
  }
  async getGasStationFuelTypeById(id: number): Promise<GasStationFuelType> {
    const gasStationFuelType = await this.gasStationFuelTypeRepo.findByPk(id, {
      include: { all: true },
    });
    // const gasStationFuelType = await this.gasStationFuelTypeRepo.findOne({ where: { id } });
    if (!GasStationFuelType) {
      throw 'No such a GasStationFuelType found!';
    }
    return gasStationFuelType;
  }
  async deleteGasStationFuelTypeById(id: number): Promise<number> {
    return await this.gasStationFuelTypeRepo.destroy({ where: { id } });
  }
  async updateGasStationFuelType(
    id: number,
    updateGasStationFuelTypeDto: UpdateGasStationFuelTypeDto,
  ): Promise<GasStationFuelType> {
    const gasStationFuelType = await this.gasStationFuelTypeRepo.update(
      updateGasStationFuelTypeDto,
      {
        where: { id },
        returning: true,
      },
    );
    return gasStationFuelType[1][0].dataValues;
  }
}
