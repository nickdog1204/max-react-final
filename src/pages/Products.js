import {Link} from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1>產品列表</h1>
            <ul>
                <li>
                    <Link to='/products/a-book'>一本書</Link>
                </li>
                <li>
                    <Link to='/products/a-carpet'>一個地毯</Link>
                </li>
                <li>
                    <Link to='/products/a-course'>線上課程</Link>
                </li>
            </ul>
        </section>
    );

}

export default Products;