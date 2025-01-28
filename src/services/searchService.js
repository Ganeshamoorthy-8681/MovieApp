import { ApiConstant } from "@cs/constants/ApiConstants";
import Interceptor from "@cs/services/interceptor";

export class SearchService {

  static getSearchResult(query,page=1){
    const url = ApiConstant.MULTI_SEARCH;
    return Interceptor.getAxiosInstance().get(url,{params:{query:query, page:page}})
  }
}
