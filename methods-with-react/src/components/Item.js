import {PureComponent} from "react";

class Item extends PureComponent {
    render() {
        const {item} = this.props;
        return (
            <li className="Method">{`${item}`}</li>
        )
    }
}
export default Item;