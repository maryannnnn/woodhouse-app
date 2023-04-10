import {
  imageCarouselReducer,
  imageWidgetReducer
} from '../../entities/image/reducers/imageReducers';
import {
  portfolioListReducer,
  portfolioWidgetReducer,
  portfolioDetailsReducer
} from '../../entities/portfolio/reducers/portfolioReducers';
import {
  headerListReducer,
  headerZeroReducer,
  headerOneReducer
} from '../../shared/ui/header-anons/reducers/headerReducers';
import {
  menuListReducer
} from '../../shared/ui/menu/reducers/menuReducers';

export const Reducers = {
  portfolioListReducer,
  portfolioWidgetReducer,
  portfolioDetailsReducer,
  headerListReducer,
  headerZeroReducer,
  headerOneReducer,
  menuListReducer,
  imageCarouselReducer,
  imageWidgetReducer
}