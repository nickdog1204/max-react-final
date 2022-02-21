import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                <ProductItem
                    id='1'
                    title='商品1 - Angular'
                    price={6}
                    description='這是關於Angular開發的書本'
                />
                <ProductItem
                    id='2'
                    title='商品2 - Ionic'
                    price={8}
                    description='這是關於Ionic開發的書本'
                />
                <ProductItem
                    id='3'
                    title='商品3 - React'
                    price={10}
                    description='這是關於React開發的書本'
                />
                <ProductItem
                    id='4'
                    title='商品4 - Kotlin'
                    price={12}
                    description='這是關於Kotlin開發的書本'
                />
                <ProductItem
                    id='5'
                    title='商品5 = Swift'
                    price={14}
                    description='這是關於Swift開發的書本'
                />
            </ul>
        </section>
    );
};

export default Products;
