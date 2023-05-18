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
import {commentListReducer} from "../../entities/comment/reducers/commentReducers";
import {customiseReducer} from "../../shared/customise/reducers/customiseReducers";

export const Reducers = {
  portfolioListReducer,
  portfolioWidgetReducer,
  portfolioDetailsReducer,
  parameterDetailsReducer,
  architectListReducer,
  architectWidgetReducer,
  architectDetailsReducer,
  imageCarouselReducer,
  imagePhotoReducer,
  commentListReducer,
  customiseReducer
}