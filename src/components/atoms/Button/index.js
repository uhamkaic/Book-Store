import React from 'react';
import PropsTypes from 'prop-types';


const Button = (props) => {
  return(
    <button 
      onClick={props.onPress}
      className={props.className}
      style={{
        outline: 'none',
        border: 'none',
        background: props.color,
        padding: 8,
        margin: 2
      }}
      >
        {props.children}
      </button>
  )
};


Button.defaultProps = {
  title: 'Undefined',
  color: '#eee'
};

Button.propsTypes = {
  children: PropsTypes.any
}

export default Button;
