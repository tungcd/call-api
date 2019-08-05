import React, { Component } from 'react';
import './../../App.css';
import { Link } from 'react-router-dom';

class ProductItem extends Component {


    onDelete = (id) => {
        // if (confirm('xoa')) {//eslint-disable-line
        this.props.onDelete(id);
    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.status ? 'primary' : 'warning';


        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} $</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-success mr-1"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger mr-1"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                        </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
