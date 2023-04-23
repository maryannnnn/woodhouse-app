import {
  imageCarouselReducer,
  imagePhotoReducer,
  imageWidgetReducer
} from '../../entities/image/reducers/imageReducers';
import {
  portfolioListReducer,
  portfolioWidgetReducer,
  portfolioDetailsReducer
} from '../../entities/portfolio/reducers/portfolioReducers';
import {
  userListReducer,
  userWidgetReducer,
  userDetailsReducer
} from '../../entities/user/reducers/userReducers';
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
  userListReducer,
  userWidgetReducer,
  userDetailsReducer,
  headerListReducer,
  headerZeroReducer,
  headerOneReducer,
  menuListReducer,
  imageCarouselReducer,
  imagePhotoReducer,
  imageWidgetReducer
}