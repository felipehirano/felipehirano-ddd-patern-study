import {
  Model,
  Column,
  PrimaryKey,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import CustomerModel from "../../../customer/sequelize/model/customer.model";
import OrderModel from "./order.model";
import ProductModel from "../../../product/sequelize/model/product.model";

@Table({
  tableName: "order_items",
  timestamps: false,
})
export default class OrderItemModel extends Model {
  @PrimaryKey
  @Column
  declare id: string;

  @ForeignKey(() => ProductModel)
  @Column
  declare product_id: string;

  @BelongsTo(() => ProductModel)
  declare product: ProductModel;

  @ForeignKey(() => OrderModel)
  @Column
  declare order_id: string;

  @BelongsTo(() => OrderModel)
  declare order: OrderModel;

  @Column({ allowNull: false })
  declare quantity: number;

  @Column({ allowNull: false })
  declare name: string;

  @Column({ allowNull: false })
  declare price: number;

  @Column({ allowNull: false })
  declare total: number;
}
