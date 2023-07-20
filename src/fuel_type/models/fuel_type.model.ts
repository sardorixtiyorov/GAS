import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface FuelTypeAttr {
  name: string;
}

@Table({ tableName: 'fuel_type' })
export class FuelType extends Model<FuelType, FuelTypeAttr> {
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
  name: string;
}
