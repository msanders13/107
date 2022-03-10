import "./catalog.css";
import Product from "./product";

const Catalog = () => {
    return (<div className="catalog">
        <h1>This is the catalog!</h1>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
    </div>);
};

export default Catalog;