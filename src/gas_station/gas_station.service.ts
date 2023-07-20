import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GasStation } from './models/gas_station.model';
import { CreateGasStationDto } from './dto/create-gas_station.dto';
import { UpdateGasStationDto } from './dto/update-gas_station.dto';

@Injectable()
export class GasStationService {
  constructor(
    @InjectModel(GasStation) private gasStationRepo: typeof GasStation,
  ) {}

  async createGasStation(
    createGasStationDto: CreateGasStationDto,
  ): Promise<GasStation> {
    const new_gasStation = await this.gasStationRepo.create(
      createGasStationDto,
    );
    return new_gasStation;
  }
  async getAllGasStation(): Promise<GasStation[]> {
    const companies = await this.gasStationRepo.findAll({
      include: { all: true },
    });
    return companies;
  }
  async getGasStationById(id: number): Promise<GasStation> {
    const gasStation = await this.gasStationRepo.findByPk(id, {
      include: { all: true },
    });
    // const gasStation = await this.gasStationRepo.findOne({ where: { id } });
    if (!GasStation) {
      throw 'No such a GasStation found!';
    }
    return gasStation;
  }
  async deleteGasStationById(id: number): Promise<number> {
    return await this.gasStationRepo.destroy({ where: { id } });
  }
  async updateGasStation(
    id: number,
    updateGasStationDto: UpdateGasStationDto,
  ): Promise<GasStation> {
    const gasStation = await this.gasStationRepo.update(updateGasStationDto, {
      where: { id },
      returning: true,
    });
    return gasStation[1][0].dataValues;
  }
}
