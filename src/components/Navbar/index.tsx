import { Container } from "./styles";
import Logo from "../../assets/img/logo.svg";
import IconInfo from "../../assets/img/icon-info-circle.svg";
import IconLogin from "../../assets/img/icon-user-alt.svg";

export const Navbar = () => {
    return (
        <Container>
            <div className="navbar-logo">
                <img src={Logo} alt="logo hashtagfinder" />
            </div>
            <div className="navbar-button">
                <button className="navbar-btn-about">
                    <img src={IconInfo} alt="" />
                    sobre
                </button>
                <button className="navbar-btn-login">
                    <img src={IconLogin} alt="" />
                    login
                </button>
            </div>
        </Container>
    );
};
