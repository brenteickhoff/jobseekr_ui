import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import searchJobsReducer from './Search/searchJobsReducer';
import searchJobDetailsReducer from './Search/searchJobDetailsReducer';
import savedSearchedJobsReducer from './Search/savedSearchedJobsReducers';
import jobDetailsAdditionalReducer from './jobDetailsAdditionalReducer';
import activityLogReducer from './activityLogReducer';

const allReducers = combineReducers({
  searchResults: searchJobsReducer,
  searchJobDetails: searchJobDetailsReducer,
  dashboardLoad: dashboardReducer,
  savedSearchedJobs: savedSearchedJobsReducer,
  jobDetailsAdditional: jobDetailsAdditionalReducer,
  activityLogData: activityLogReducer,
});


export default allReducers;
