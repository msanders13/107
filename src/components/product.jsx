import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
    return (<div className="product">
        <img src="https://picsum.photos/200/300" ></img>
        <h2> {props.title} </h2>
        <label className="price">$Price</label>
        <label className="total">$Total</label>
        <QuantityPicker></QuantityPicker>
        <button className="btn btn-info btn-sm">Add</button>
        </div>);
        
};
        

export default Product;