import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        label: "Trang Chủ",
        to: '/',
        activeOnlyWhenExact: true
    },
    {
        label: "Quản Lý Sản Phẩm",
        to: '/products',
        activeOnlyWhenExact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';

                return (
                    <li className={active}>
                        <Link
                            to={to}
                            className="nav-link" >
                            {label}
                        </Link>
                    </li>
                );
            }} />
    )
}

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <div className="navbar navbar-default">
                    <a className="navbar-brand" >Demo</a>
                    <ul className="nav navbar-nav">
                        {/* {this.showMenu(menus)} */}
                    </ul>
                </div>
                <div>
                    <ul>
                        {this.showMenu(menus)}
                    </ul>
                </div>
            </div>
        );
    }
    showMenu = (menus) => {
        var result = null;
        result = menus.map((menu, index) => {
            return (
                
                <MenuLink
                    key={index}
                    to={menu.to}
                    label={menu.label}
                    activeOnlyWhenExact={menu.exact}
                />
            )
        });
        return result;
    }
}

export default Menu;
