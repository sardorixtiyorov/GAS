import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GasStationBranch } from './models/gas_station_branch.model';
import { CreateGasStationBranchDto } from './dto/create-gas_station_branch.dto';
import { UpdateGasStationBranchDto } from './dto/update-gas_station_branch.dto';

@Injectable()
export class GasStationBranchService {
  constructor(
    @InjectModel(GasStationBranch)
    private gasStationBranchRepo: typeof GasStationBranch,
  ) {}

  async createGasStationBranch(
    createGasStationBranchDto: CreateGasStationBranchDto,
  ): Promise<GasStationBranch> {
    const new_gasStationBranch = await this.gasStationBranchRepo.create(
      createGasStationBranchDto,
    );
    return new_gasStationBranch;
  }
  async getAllGasStationBranch(): Promise<GasStationBranch[]> {
    const companies = await this.gasStationBranchRepo.findAll({
      include: { all: true },
    });
    return companies;
  }
  async getGasStationBranchById(id: number): Promise<GasStationBranch> {
    const gasStationBranch = await this.gasStationBranchRepo.findByPk(id, {
      include: { all: true },
    });
    // const gasStationBranch = await this.gasStationBranchRepo.findOne({ where: { id } });
    if (!GasStationBranch) {
      throw 'No such a GasStationBranch found!';
    }
    return gasStationBranch;
  }
  async deleteGasStationBranchById(id: number): Promise<number> {
    return await this.gasStationBranchRepo.destroy({ where: { id } });
  }
  async updateGasStationBranch(
    id: number,
    updateGasStationBranchDto: UpdateGasStationBranchDto,
  ): Promise<GasStationBranch> {
    const gasStationBranch = await this.gasStationBranchRepo.update(
      updateGasStationBranchDto,
      {
        where: { id },
        returning: true,
      },
    );
    return gasStationBranch[1][0].dataValues;
  }
}
