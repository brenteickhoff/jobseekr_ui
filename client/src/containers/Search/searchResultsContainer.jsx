import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import searchResults from '../../components/HomePage/Jobs/Search/searchResults';
import saveSearchedJobs from '../../actions/saveSearchedJobs';
import saveOrDeleteSearchedJobs from '../../actions/saveSearchedJobs';

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    savedSearchedJobs: state.savedSearchedJobs,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    saveOrDeleteSearchedJobs: saveOrDeleteSearchedJobs
  }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(searchResults);

