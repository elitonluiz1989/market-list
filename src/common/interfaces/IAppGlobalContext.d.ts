import IProduct from 'App/common/interfaces/IProduct';
import { SetValue } from 'App/common/interfaces/Types.d';

export default interface IAppGlobalContext {
  products: IProduct[];
  setProducts: SetValue;
}