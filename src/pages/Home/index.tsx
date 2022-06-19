import React from "react";
import { Container } from "./styles";
import Img from "../../assets/img/img-01.jpg";
import ImgProfile from "../../assets/img/img-profile.png";
import IconSearch from "../../assets/img/icon-search.svg";

export const Home = () => {
    return (
        <Container>
            <div className="container-home">
                <div className="hero">
                    <div className="title">
                        <h1>Encontre hashtags de maneira fácil.</h1>
                        <p>
                            Digite o que deseja no campo de buscas e confira os
                            resultados do Twitter abaixo
                        </p>
                    </div>
                    <div className="search">
                        <form action="">
                            <img
                                src={IconSearch}
                                alt="search"
                                className="search-img"
                            />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Buscar..."
                            />
                        </form>
                    </div>
                </div>
                <div className="content">
                    <h2>
                        Exibindo os 10 resultados mais recentes para #natureza
                    </h2>
                    <div className="content-twitter">
                        <div className="content-twitter-images">
                            <div
                                className="twitter-image"
                                style={{ backgroundImage: `url(${Img})` }}
                            >
                                <div className="twitter-image-info">
                                    <p>postador por:</p>
                                    <span>@twitterusername</span>
                                </div>
                            </div>
                            <div
                                className="twitter-image"
                                style={{ backgroundImage: `url(${Img})` }}
                            >
                                <div className="twitter-image-info">
                                    <p>postador por:</p>
                                    <span>@twitterusername</span>
                                </div>
                            </div>
                            <div
                                className="twitter-image"
                                style={{ backgroundImage: `url(${Img})` }}
                            >
                                <div className="twitter-image-info">
                                    <p>postador por:</p>
                                    <span>@twitterusername</span>
                                </div>
                            </div>
                            <div
                                className="twitter-image"
                                style={{ backgroundImage: `url(${Img})` }}
                            >
                                <div className="twitter-image-info">
                                    <p>postador por:</p>
                                    <span>@twitterusername</span>
                                </div>
                            </div>
                        </div>

                        <div className="content-twitter-tweets">
                            <div className="twitter-tweet">
                                <img src={ImgProfile} alt="Foto de perfil" />
                                <div>
                                    <div className="tweet-head">
                                        <p>UserName</p>
                                        <span>@twitterusername</span>
                                    </div>
                                    <p className="tweet">
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt...
                                    </p>
                                    <a href="/">Ver mais no Twitter</a>
                                </div>
                            </div>
                            <div className="twitter-tweet">
                                <img src={ImgProfile} alt="Foto de perfil" />
                                <div>
                                    <div className="tweet-head">
                                        <p>UserName</p>
                                        <span>@twitterusername</span>
                                    </div>
                                    <p className="tweet">
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt...
                                    </p>
                                    <a href="/">Ver mais no Twitter</a>
                                </div>
                            </div>
                            <div className="twitter-tweet">
                                <img src={ImgProfile} alt="Foto de perfil" />
                                <div>
                                    <div className="tweet-head">
                                        <p>UserName</p>
                                        <span>@twitterusername</span>
                                    </div>
                                    <p className="tweet">
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt...
                                    </p>
                                    <a href="/">Ver mais no Twitter</a>
                                </div>
                            </div>
                            <div className="twitter-tweet">
                                <img src={ImgProfile} alt="Foto de perfil" />
                                <div>
                                    <div className="tweet-head">
                                        <p>UserName</p>
                                        <span>@twitterusername</span>
                                    </div>
                                    <p className="tweet">
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt...
                                    </p>
                                    <a href="/">Ver mais no Twitter</a>
                                </div>
                            </div>
                            <div className="twitter-tweet">
                                <img src={ImgProfile} alt="Foto de perfil" />
                                <div>
                                    <div className="tweet-head">
                                        <p>UserName</p>
                                        <span>@twitterusername</span>
                                    </div>
                                    <p className="tweet">
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt...
                                    </p>
                                    <a href="/">Ver mais no Twitter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
