import {
  imageCarouselReducer,
  imagePhotoReducer,
} from '../../entities/image/reducers/imageReducers';
import {
  parameterDetailsReducer
} from '../../entities/parameter/reducers/parameterReducers';
import {
  portfolioListReducer,
  portfolioWidgetReducer,
  portfolioDetailsReducer
} from '../../entities/portfolio/reducers/portfolioReducers';
import {
  architectListReducer,
  architectWidgetReducer,
  architectDetailsReducer
} from '../../entities/architect/reducers/architectReducers';
import {
  headerListReducer,
  headerZeroReducer,
  headerOneReducer
} from '../../shared/ui/header-anons/reducers/headerReducers';
import {
  menuListReducer
} from '../../shared/ui/menu/reducers/menuReducers';
import {customiseReducer} from "../../shared/customise/reducers/customiseReducers";

export const Reducers = {
  portfolioListReducer,
  portfolioWidgetReducer,
  portfolioDetailsReducer,
  parameterDetailsReducer,
  architectListReducer,
  architectWidgetReducer,
  architectDetailsReducer,
  headerListReducer,
  headerZeroReducer,
  headerOneReducer,
  menuListReducer,
  imageCarouselReducer,
  imagePhotoReducer,
  customiseReducer
}