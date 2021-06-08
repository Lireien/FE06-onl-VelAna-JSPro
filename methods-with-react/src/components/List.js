import {Component} from "react";
import Item from "./Item";

class List extends Component {
    render() {
        const {list,title} = this.props;
        return (
            <div className="Methods-list">
                <h2>{title}</h2>
                <ul>
                    {list.map(i => <Item key = {i} item={i}/>)}
                </ul>
            </div>
        )
    }
}
export default List;