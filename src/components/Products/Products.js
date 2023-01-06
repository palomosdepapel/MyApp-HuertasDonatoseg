import React from 'react'
import Loading from '../Loading/Loading';
import Product from '../Product/Product';

const Products = (props) => {
    //console.log(props);
    const { products: { result, loading, error } ,
    addProductCart
    } = props;

    return (

        <div className='container'>
            <div className='row'>
                {/* Lista de Products */}
                {loading || !result
                    ? (<Loading />)
                    : result.map((product, index) => (
                        <Product key={index} product={product} addProductCart={addProductCart}/>
                    ))}
            </div>

        </div>
    )
}


export default Products