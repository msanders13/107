import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = () => {
    return (<div classname="product">
        <img src="https://picsum.photos/200/300" ></img>
        <h2>Title</h2>
        <label>$Price</label>
        <label>$Total</label>
        <QuantityPicker></QuantityPicker>
        <button>Add</button>
        </div>);
        
};
        

export default Product;