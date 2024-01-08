import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {addProduct} from "../redux/productsSlice"

export default function ProductsPage() {

    const dispatch = useDispatch()
    const {products} = useSelector(state => state.productsReducer)

    const handleClick = () => {
        dispatch(addProduct())
    }

    return (
        <div>
            <h1>Store</h1>
            {products.map(item => (
                <div key={item._id} >
                    <img src={item.picture} alt=""/>
                    <p>{item.name}</p>
                    <p>Tags: </p>
                    {item.tags?.map((tag, index) => (
                        <ul key={index}>
                            <li>{tag}</li>
                        </ul>
                    ))}
                    <p>{item.price}</p>
                    <button onClick={handleClick}>Купить</button>
                    ========================================
                </div>
            ))}
        </div>
    )
}
