import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
import {useEffect, useState} from "react";

const Catalog = () => {

    let [products, selProducts] = useState([]);

    const loadCatalog = () => {
        console.log("Data retrieved");
        let service = new DataService();
        let data = service.getCatalog();
        selProducts(data);
    };

    useEffect( () => {
        loadCatalog();
    } );


    return (<div className="catalog">
        <h1>This is the catalog!</h1>
        <h2>We have {products.length} products!!</h2>
        {products.map(
            (prod) => (<Product key={prod._id} title={prod.title}/>)
            )
        }
    </div>);
};

export default Catalog;