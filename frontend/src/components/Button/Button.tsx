
import { FiPlayCircle } from "react-icons/fi";
import "./Button.css";
import { FaArrowRight } from "react-icons/fa";
interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'blue'| 'gray';
  onClick?: () => void;
  showIcon?: boolean; 
  showIconarrow?: boolean; 
  style?: React.CSSProperties;
}

export default function Button({text, variant = 'primary',onClick,  showIcon = false ,showIconarrow=false,  style}: ButtonProps) {
  return (
    <button className={`${"btn"} ${variant}`}
    onClick={onClick} style={style}
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