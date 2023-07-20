import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { FuelType } from 'src/fuel_type/models/fuel_type.model';
import { GasStationBranch } from 'src/gas_station_branch/models/gas_station_branch.model';

interface GasStationFuelTypeAttr {
  gas_station_branch_id: number;
  fuel_type_id: number;
  price: number;
  is_bor: boolean;
}

@Table({ tableName: 'gas_station_fuel_type' })
export class GasStationFuelType extends Model<
  GasStationFuelType,
  GasStationFuelTypeAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => GasStationBranch)
  @Column({
    type: DataType.INTEGER,
  })
  gas_station_branch_id: number;

  @ForeignKey(() => FuelType)
  @Column({
    type: DataType.INTEGER,
  })
  fuel_type_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  price: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_bor: boolean;

  @BelongsTo(() => GasStationBranch)
  gas_station: GasStationBranch;

  @BelongsTo(() => FuelType)
  fuel_type: FuelType;
}
