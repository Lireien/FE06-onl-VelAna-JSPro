import { useEffect, useState } from "react";
import Item from "../Item";
import { StyledH2, StyledInput, StyledRow, StyledUl } from "./StyledForList";

const List = ({ list, title, changeType }) => {
  const [filteredList, setFilteredList] = useState(list);
  const [filter, setFilter] = useState("");

  const handleFilterChange = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };
  const listFilterer = (i) => i.name.includes(filter);
  useEffect(() => {
    setFilteredList(list.filter(listFilterer));
  }, [filter]);

  return (
    <StyledRow>
      <StyledH2>{`${title} ${filteredList.length}/${list.length}`}</StyledH2>
      <StyledInput type="text" value={filter} onChange={handleFilterChange} />
      <StyledUl>
        {(filter ? filteredList : list).map((i) => (
          <Item key={i.name} item={i} changeType={changeType} />
        ))}
      </StyledUl>
    </StyledRow>
  );
};
export default List;
