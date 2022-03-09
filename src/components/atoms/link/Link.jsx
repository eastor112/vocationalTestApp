const Link = (props) => {

  const { link = './', text, size = 'small' } = props;

  const selectSize = (size) => {
    if (size === 'small') {
      return 'text-sm';
    } else if (size === 'medium') {
      return 'text-md';
    } else if (size === 'large') {
      return 'text-lg';
    } else if (size === 'xlarge') {
      return 'text-xl';
    } else {
      return 'text-base';
    }
  }

  return (
    <a
      href={link}
      className={"px-3 py-2 font-normal hover:font-semibold whitespace-nowrap " + selectSize(size)}
    >
      {text}
    </a>
  )
}

export default Link
