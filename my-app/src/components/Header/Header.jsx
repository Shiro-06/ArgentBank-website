import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import argentBankLogo from "../../assets/images/argentBankLogo.webp";
import auth_service from "../../Redux/services/ApiService";
import { logoClick } from "../../Redux/actions/loginAction";
import SignOutIcon from "../../assets/icons/SignOutIcon";
import CircleUserIcon from "../../assets/icons/CircleUserIcon";
import './Header.scss';
import EditIcon from '../../assets/icons/EditIcon';


const Header = () => {
    //const user = useSelector(state => state.user); // Assurez-vous que vous extrayez correctement les données de l'utilisateur
    const isAuth = useSelector((state) => state.login.isAuth);
    const userName = useSelector((state) => state.user.userName);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(auth_service.logout());
        navigate("/login");
    };

    const onLogoClick = () => {
        dispatch(logoClick());
    };

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" onClick={onLogoClick} to="/">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {isAuth === false ? (
                <div>
                    <Link className="main-nav-item" to="/login">
                    Sign In
                    <CircleUserIcon />
                    </Link>
                </div>
            ) : isAuth === true ? (
                <div className="main-nav-items">
                    <Link className="main-nav-item" to="/profile">
                        
                        {userName}{" "}
                        <CircleUserIcon />
                        {/* Assurez-vous que la clé correspond à celle dans vos données */}
                    </Link>
                    <div className="main-nav-item">
                        <EditIcon />
                    </div>
                    <div className="main-nav-item" onClick={onLogout}>
                        <SignOutIcon />
                    </div>
                </div>
            ) : 
                ""
            }
        </nav>
    );
};

export default Header;