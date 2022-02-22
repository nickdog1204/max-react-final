import {useParams} from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();

    return (
        <section>
            <h1>產品細節</h1>
            <p>{params.productId}</p>
        </section>
    )
}
export default ProductDetails;