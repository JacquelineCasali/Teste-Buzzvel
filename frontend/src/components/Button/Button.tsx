
import { FiPlayCircle } from "react-icons/fi";
import "./Button.css";
interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  showIcon?: boolean; 
}

export default function Button({ text, variant = 'primary',onClick,  showIcon = false }: ButtonProps) {
  return (
    <button className={`${"btn"} ${variant}`}
    onClick={onClick}
    >
        {showIcon && <FiPlayCircle 
        color="#2563EB"
        size={24}
        style={{fontWeight:500}}
        />}
    {text}
   
    
          </button>
  )
}