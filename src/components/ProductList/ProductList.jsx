// Необходимо написать react компонент ProductList. 
// На экране должен отображаться список выбранных элементов и список добавленных элементов. 
// После добавления элемента в список он должен стать некликабельным
import "./styles.css";
import{availableProducts} from "./data.";
import { useState } from "react";


function ProductList() {
    let [selectedProducts,setProducts] = useState([]);

   const products = availableProducts.map((availableProduct) => {
    let onProductClick = () => { 
        setProducts([...selectedProducts,availableProduct])
    }


    return (
     <div key={availableProduct.id}>
        <button type='button' onClick={onProductClick}>{availableProduct.name}</button>
     </div>
)
   })








    return (
    <div className="productList_container">
        <div className="selected_products_container">
            <h1>Selected products</h1>
            <div></div>
        </div>
        <div className="available_products_container">
            <h1>Available products</h1>
        <div>{products}</div>
        </div>
    </div>
    );
}
export default ProductList;
