import { FaCheck } from "react-icons/fa";

type CheckItemProps = {
  text: string;
};

const CheckItem = ({ text }: CheckItemProps) => (
  <p className="p-check">
    <FaCheck size={24} color="#0F172A" />
    {text}
  </p>
);

export default CheckItem;