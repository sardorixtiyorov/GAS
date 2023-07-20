import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { GasStation } from 'src/gas_station/models/gas_station.model';

interface GasStationBranchAttr {
  gas_station_id: number;
  branch_name: string;
  address: string;
  location: string;
  phone_number: string;
}

@Table({ tableName: 'gas_station_branch' })
export class GasStationBranch extends Model<
  GasStationBranch,
  GasStationBranchAttr
> {
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
  branch_name: string;

  @Column({
    type: DataType.STRING,
  })
  address: string;

  @Column({
    type: DataType.STRING,
  })
  location: string;

  @Column({
    type: DataType.STRING,
  })
  phone_number: string;

  @ForeignKey(() => GasStation)
  @Column({
    type: DataType.INTEGER,
  })
  gas_station_id: number;

  @BelongsTo(() => GasStation)
  gas_station: GasStation;
}
