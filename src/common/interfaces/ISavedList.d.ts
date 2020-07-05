import IProduct from "./IProduct";
import IModel from "./IModel";

export default interface ISavedList extends IModel {
  name: string,
  items: IProduct[]
}