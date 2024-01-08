import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';

function NavBar() {
    const {amountOfProductsToBuy} = useSelector(state => state.productsReducer)
    return (
        <ul>
            <li>
                <NavLink to="/">Main</NavLink>
            </li>
            <li>
                <NavLink to="products">Products</NavLink>
            </li>
            <li>
                <span>&#9993;{amountOfProductsToBuy}</span>
            </li>
        </ul>
    );
}

export default NavBar;