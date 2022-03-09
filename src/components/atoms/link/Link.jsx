const sizeOptions = {
  xsmall: 'text-xs',
  small: 'text-sm',
  medium: 'text-md',
  large: 'text-lg',
  xlarge: 'text-xl',
  default: 'text-base',
}
// block text-xs md:text-sm leading-4 md:leading-5
const Link = (props) => {

  const {
    link = './',
    text = 'link',
    size = 'small',
    underlineOnHover = false,
    vertical = false } = props;


  return (
    <a
      href={link}
      className={`font-normal ${!(text.length > 20) && 'whitespace-nowrap'} hover:font-medium cursor-pointer \
      ${vertical ? 'block leading-5' : 'px-3 py-2'} \
      ${underlineOnHover ? 'hover:underline' : ''} \
      ${sizeOptions[size]}`}
    >
      {text}
    </a>
  )
}

export default Link
