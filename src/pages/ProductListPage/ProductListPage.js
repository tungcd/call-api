import React, { Component } from 'react';
import './../../App.css';
import ProductsList from './../../components/ProductsList/ProductsList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductsRequest } from './../../actions/index';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        this.props.fetchAllProducts();
        console.log("b");
        
    }

    onDelete = (id) => {
        this.props.onDeleteProducts(id);
    }

    render() {
        var { products } = this.props;
console.log(products);

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-primary mb-2">
                    Thêm sản phẩm
                </Link>
                <ProductsList>{this.showProductItem(products)}</ProductsList>
            </div>
        );
    }
    showProductItem = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    index={index}
                    onDelete={this.onDelete}
                />
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
            console.log("a");
            
        },
        onDeleteProducts: id => {
            dispatch(actDeleteProductsRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
