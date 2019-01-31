import React from 'react';


function Header(props) {
    return (
        <div className="header">
            <div className="topnav">
                <a href="#"> Наши услуги </a>
                <a href="#"> О компании </a>
                <a href="#"> Напишите нам </a>
            </div>
        </div>
    )
}

function Sidebar(props) {
    return (
        <div className="sidebar">
            <p>Лучшие авиакомпании 2018 года</p>
            <ul>
                <li><a href="https://www.qatarairways.com/">Qatar Airways</a></li>
                <li><a href="https://www.singaporeair.com/">Singapore Airlines</a></li>
                <li><a href="https://www.emirates.com/english/">Emirates</a></li>
                <li><a href="https://www.cathaypacific.com/cx/ru_RU.html">Cathay Pacific</a></li>
                <li><a href="https://www.etihad.com/ru/">Etihad Airways</a></li>
            </ul>
        </div>

    )
}

function Content(props) {
    return (
        <div className="card">
            <p className="title">Рейс #{props.number}</p>
            <h1 className="address">{props.from} - {props.where}</h1>
            <p className="date">Дата вылета: {props.date}</p>
            <p className="price">Цена: {props.price}$  <a href="#">Купить</a></p>
        </div>
    )
}

function Footer(props) {
    return (
        <div className="footer">
            <h3>© 2019 Archer</h3>
        </div>
    )
}

export {Header, Sidebar, Content, Footer}