import { combineReducers } from 'redux';
import searchJobsReducer from './searchJobsReducer';
import searchJobDetailsReducer from './searchJobDetailsReducer';
import dashboardReducer from './dashboardReducer';
import savedSearchedJobsReducer from './savedSearchedJobsReducers';

const allReducers = combineReducers({
  searchResults: searchJobsReducer,
  searchJobDetails: searchJobDetailsReducer,
  dashboardLoad: dashboardReducer,
  savedSearchedJobs: savedSearchedJobsReducer,
});

export default allReducers;
