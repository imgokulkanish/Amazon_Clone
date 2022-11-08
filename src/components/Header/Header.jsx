import React from 'react'
import { ShoppingBasket } from "@material-ui/icons"
import { Search } from "@material-ui/icons"
import './Header.css'
import { NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider"
import { auth } from '../../firebase'
const Header = () => {
    const [{ basket, user }] = useStateValue();
    const logout = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <nav className="header">
            <NavLink to="/" className="header__link">
                <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBZsOV_lhvC7eymRovQqQ4bbxGVZ_JfgBWA&usqp=CAU" alt="logo" />
            </NavLink>
            <div className="header__search">
                <input className="header__searchInput" />
                <Search className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <NavLink to={!user && "/login"} className="header__link" onClick={logout}>
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </NavLink>
                <NavLink to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </div>
                </NavLink>
                <NavLink to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">
                            Prime
                        </span>
                    </div>
                </NavLink>
                <NavLink to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasket />
                        <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}

export default Header
