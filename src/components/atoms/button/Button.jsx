import React from 'react';
import PropTypes from 'prop-types';

const outlineStyles = {
  primary: 'border-primary-1 text-primary-1',
  secondary: 'border-secondary-1 text-secondary-1',
  terciary: 'border-terciary-1 text-terciary-1',
  cuaternary: 'border-cuaternary-1 text-cuaternary-1',
  neutral: 'border-neutral-1 text-neutral-1',
  success: 'border-success-1 text-success-1',
  danger: 'border-danger-1 text-danger-1',
  warning: 'border-warning-1 text-warning-1',
  info: 'border-info-1 text-info-1',
  light: 'border-light-1 text-light-1',
  dark: 'border-dark-1 text-dark-1',
  default: 'border-primary-1 text-primary-1',
};

const typeBtn = {
  primary: 'bg-primary-2 hover:bg-primary-1 text-white',
  secondary: 'bg-secondary-2 hover:bg-secondary-1 text-white',
  terciary: 'bg-terciary-2 hover:bg-terciary-1 text-black',
  cuaternary: 'bg-cuaternary-2 hover:bg-cuaternary-1 text-black',
  neutral: 'bg-neutral-2 hover:bg-neutral-1 text-white',
  success: 'bg-success-2 hover:bg-success-1 text-white',
  danger: 'bg-danger-2 hover:bg-danger-1 text-white',
  warning: 'bg-warning-2 hover:bg-warning-1 text-black',
  info: 'bg-info-2 hover:bg-info-1 text-black',
  light: 'bg-light-2 hover:bg-light-1 text-black',
  dark: 'bg-dark-2 hover:bg-dark-1 text-white',
  default: 'bg-primary-2 hover:bg-primary12 text-white',
};

const sizeBtn = {
  small: 'py-1 px-3 mx-1 text-sm',
  medium: 'py-2 px-4 mx-2 text-base',
  large: 'py-3 px-7 mx-2 text-lg',
  default: 'py-2 px-4 mx-2 text-base',
};

const Button = (props) => {
  const {
    text = 'button',
    type = 'primary',
    size = 'medium',
    outline = false,
    action,
  } = props;

  return (
    <button
      type='button'
      className={
        outline
          ? `border whitespace-nowrap font-medium rounded-md bg-light-2 hover:bg-light-1  ${sizeBtn[size]} ${outlineStyles[type]}`
          : `font-medium whitespace-nowrap rounded-md ${typeBtn[type]} ${sizeBtn[size]}`
      }
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
  outline: false,
  action: () => { },
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'terciary', 'cuaternary', 'neutral', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'default']),
  outline: PropTypes.bool,
  action: PropTypes.func,
};
