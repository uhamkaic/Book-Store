import React from 'react';
import PropsTypes from 'prop-types';
// import { div } from '../../atoms';

const Card = (props) => {
  return(
    <div className="card">
      <div className="cardInner">
        <div className="card-header">
          <img src="https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg" alt="" />
        </div>
        <div className="card-body">
          <h2>{props.cardTitle}</h2>
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
