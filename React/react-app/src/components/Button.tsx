
interface ButtonProps{
    text: string;
    value: string;
    onClick: () => void;
    color?: 'primary' | 'secondary'; // ? optional, ony supported colors
}

function Button({text, value, onClick, color = 'primary'}: ButtonProps) {
  return (
      <button type="button" className={
        "btn btn-" + color
      } value={value} onClick={onClick}>{text}</button>
  )
}

export default Button
