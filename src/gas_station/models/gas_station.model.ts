import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { GasStationBranch } from 'src/gas_station_branch/models/gas_station_branch.model';

interface GasStationAttr {
  main_gas_station_name: string;
}

@Table({ tableName: 'gas_station' })
export class GasStation extends Model<GasStation, GasStationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  main_gas_station_name: string;

  @HasMany(() => GasStationBranch)
  gasStationsBranches: GasStationBranch[];
}
