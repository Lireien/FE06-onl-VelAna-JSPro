import { StyledInput } from "./StyledInput";
import { useRef, useState } from "react";

const Input = ({ value, onChange }) => {
  const [filter, setFilter] = useState(value);
  const timer = useRef(null);

  const handleFilterChange = ({ target }) => {
    const { value } = target;
    timer.current = setTimeout(() => {
      onChange({ value });
    }, 1500);
    setFilter(value);
  };

  return (
    <StyledInput type="text" value={filter} onChange={handleFilterChange} />
  );
};
export default Input;
