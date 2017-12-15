import React from 'react';
import CardsEntry from '../../../containers/cardsEntryActionContainer';

const Cards = (props) => {
  return (
    <div className="row">
      <div className="col-md-4">
        {props.dashboardLoad.map((job) => {
          if (job.status === 'Will Apply') {
            return (
                <CardsEntry key={job.id} job={job}/>
            );
          }
        })}
      </div>
      <div className="col-md-4">
        {props.dashboardLoad.map((job) => {
          if (job.status === 'Applied') {
            return (
              <div key={job.id}>
                <CardsEntry job={job}/>
              </div>
            );
          }
        })}
      </div>
      <div className="col-md-4">
        {props.dashboardLoad.map((job) => {
          if (job.status == 'Follow Up') {
            return (
              <div key={job.id}>
                <CardsEntry job={job}/>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cards;