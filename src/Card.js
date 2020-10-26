import React from 'react';
import PropsTypes from 'prop-types';


const Card = (props) => {
  return(
    <div className="card">
      <div className="cardInner">
        <div className="card-header">
          <img src="" alt="" />
        </div>
        <div className="card-body">
          <h1>{props.cardTitle}</h1>
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  cardTitle: 'Undefined'
}

Card.propTypes = {
  cardTitle: PropsTypes.string,
  noPhone: PropsTypes.number
}

export default Card;
