import { portfolioListReducer, portfolioDetailsReducer } from '../../entities/portfolio/reducers/portfolioReducers';
import {
  headerListReducer,
  headerZeroReducer,
  headerOneReducer
} from '../../shared/ui/header-anons/reducers/headerReducers';
import { menuListReducer } from '../../shared/ui/menu/reducers/menuReducers';

export const Reducers = {
  portfolioListReducer,
  portfolioDetailsReducer,
  headerListReducer,
  headerZeroReducer,
  headerOneReducer,
  menuListReducer
}