import React from 'react'

const Product = ({ product, col }) => {
    return (

        <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
            <div className="card p-3 rounded">
                <img
                    className="card-img-top mx-auto"
                    src={product.fields.thumbnail}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        {product.fields.headline}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Product
