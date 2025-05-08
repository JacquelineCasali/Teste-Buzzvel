
import "./Button.css";
interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
}

export default function Button({ text, variant = 'primary',onClick }: ButtonProps) {
  return (
    <button className={`${"btn"} ${variant}`}
    onClick={onClick}
    >
    {text}
 
    
          </button>
  )
}