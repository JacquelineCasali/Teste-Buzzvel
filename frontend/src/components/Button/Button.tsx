
import { FiPlayCircle } from "react-icons/fi";
import "./Button.css";
import { FaArrowRight } from "react-icons/fa";
interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'blue';
  onClick?: () => void;
  showIcon?: boolean; 
  showIconarrow?: boolean; 
}

export default function Button({ text, variant = 'primary',onClick,  showIcon = false ,showIconarrow=false}: ButtonProps) {
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
    {showIconarrow && <FaArrowRight 
        color="#2563EB"
        size={20}
    
        />}

   
    
          </button>
  )
}