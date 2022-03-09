const Button = (props) => {

  const {
    text = 'registrate',
    type = 'warning',
    size = 'medium',
    outline = false,
  } = props;



  // `border border-${type}-1 font-medium rounded-md bg-light-2 hover:bg-light-1 text-${type}-1 ${selectSizeBtn(size)}`
  return (
    <button
      className={
        outline ?
          `border border-${type}-1 font-medium rounded-md bg-light-2 hover:bg-light-1 text-${type}-1 ${selectSizeBtn(size)}`
          :
          `font-medium whitespace-nowrap rounded-md ${selectTypeBtn(type)} ${selectSizeBtn(size)}`
      }>
      {text}
      <p
        className="bg-light-1">

      </p>
    </button>
  )
}

export default Button



const selectTypeBtn = (type) => {
  switch (type) {
    case 'primary':
      return 'bg-primary-1 hover:bg-primary-2 text-white';
    case 'secondary':
      return 'bg-secondary-1 hover:bg-secondary-2 text-white';
    case 'terciary':
      return 'bg-terciary-1 hover:bg-terciary-2 text-black';
    case 'cuaternary':
      return 'bg-cuaternary-1 hover:bg-cuaternary-2 text-black';
    case 'neutral':
      return 'bg-neutral-1 hover:bg-neutral-2 text-white';
    case 'success':
      return 'bg-success-1 hover:bg-success-2 text-white';
    case 'danger':
      return 'bg-danger-1 hover:bg-danger-2 text-white';
    case 'warning':
      return 'bg-warning-1 hover:bg-warning-2 text-black';
    case 'info':
      return 'bg-info-1 hover:bg-info-2 text-black';
    case 'light':
      return 'bg-light-1 hover:bg-light-2 text-black';
    case 'dark':
      return 'bg-dark-1 hover:bg-dark-2 text-white';
    default:
      return ' bg-primary-1 hover:bg-primary-2 text-white';
  }
}

const selectSizeBtn = (size) => {
  switch (size) {
    case 'small':
      return 'py-1 px-3 mx-1 text-sm';
    case 'medium':
      return 'py-2 px-4 mx-2 text-base';
    case 'large':
      return 'py-3 px-5 mx-2 text-lg';
    default:
      return 'py-2 px-4 mx-2 text-base';
  }
}
