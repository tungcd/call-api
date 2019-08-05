import React, { Component } from 'react';
// import ProducItem from '../ProductItem/ProductItem';

class ProductsList extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                </div>
                <div className="panel-body">

                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Trạng Thái</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td />
                                <td>
                                    <input type="text"
                                        className="form-control"
                                        name="filterName"
                                    />
                                </td>
                                <td>
                                    <input type="text"
                                        className="form-control"
                                        name="filterName"
                                    />
                                </td>
                                <td>
                                    <input type="text"
                                        className="form-control"
                                        name="filterName"
                                    />
                                </td>
                                <td>
                                    <select className="form-control"
                                        name="filterStatus"
                                    >
                                        <option value={0}>còn hàng</option>
                                        <option value={1}>kích Hoạt</option>
                                    </select>
                                </td>
                                <td />
                            </tr>
                            {this.props.children}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ProductsList;
