import React, {Component} from 'react';
import './App.css';
import {Header, Sidebar, Content, Footer} from "./Components";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Sidebar/>
                <div className="Row">
                    <Content number={4523} from={'Лондон'} where={'Нью-Йорк'} date={'20 сентября'} price={'950'}/>
                    <Content number={4523} from={'Лондон'} where={'Нью-Йорк'} date={'20 сентября'} price={'950'}/>
                    <Content number={2478} from={'Бишкек'} where={'Москва'} date={'15 августа'} price={'320'}/>
                    <Content number={1124} from={'Ташкент'} where={'Бишкек'} date={'24 июля'} price={'290'}/>
                    <Content number={1124} from={'Ташкент'} where={'Бишкек'} date={'24 июля'} price={'290'}/>
                    <Content number={1974} from={'Алматы'} where={'Омск'} date={'19 июня'} price={'500'}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
