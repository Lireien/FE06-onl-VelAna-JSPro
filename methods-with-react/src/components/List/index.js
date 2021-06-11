import {useEffect, useState} from "react";
import Item from "../Item";
import {StyledH2,  StyledUl, } from "./StyledForList";


const List = ({list,title}) => {
    const [filteredList, setFilteredList] = useState(list);
    const [filter, setFilter] = useState('');

    const  handleFilterChange = ({target}) => {
        const {value} = target;
        setFilter(value);
    }
    useEffect(()=>{
        setFilteredList(list.filter(i => i.includes(filter)))
    },[filter]);

     return (
            <div >
                <StyledH2>{`${title} ${filteredList.length}/${list.length}`}</StyledH2>
                <input type='text' value = {filter} onChange={handleFilterChange}/>
                <StyledUl>
                    {(filter ? filteredList : list).map(i => <Item key = {i} item={i}/>)}
                </StyledUl>
            </div>
        );
}
export default List;