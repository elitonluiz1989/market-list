import IProduct from 'App/common/interfaces/IProduct';
import { TSetValue } from 'App/common/interfaces/Types.d';

export default interface IAppGlobalContext {
  products: IProduct[];
  setProducts: TSetValue;
}