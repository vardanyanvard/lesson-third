import { Product } from "./Product";

export const ProductList = (props) => {
    const { items, onMove } = props;
    return (
        <div className="col-md-7">
            <p>Product List </p>
            <div className="row">
                {items.map((elm) => (
                    <Product key={elm.id} {...elm} onMove={onMove} />
                ))}
            </div>
        </div>
    );
};
