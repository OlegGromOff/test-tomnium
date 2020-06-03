import React, { Component } from 'react';
import './DataList.css';
import store from '../../redux/store';

export default class DataList extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {}; // создаем пустой state
    }
    componentDidMount() {

        const promise = new Promise(function (resolve, reject) {
            setTimeout(() => { resolve(store) }, 500); //обещание исполнено
        });

        promise.then((store) => { //обрабатываем исполненный промис
            this.setState(store); // передал в state наш store
        });
    }
    render() {

        let content = <div></div>;
        let validStatus = null;

        if (this.state.currency) {
            let ratesKeys = Object.keys(this.state.currency.rates);
            let newRatesArray = [];

            if (this.state.currency.rates.hasOwnProperty(this.props.rate)) {
                if (this.state.currency.valid) {
                    validStatus = <span>true</span>
                }
                for (let key of ratesKeys) {
                    newRatesArray.push(<p> {key} : {this.state.currency.rates[key]} </p>)
                }
            }
            content = <div className="main_div">
                <div className="row">
                    <div className="col"><p>
                        <span>valid: {validStatus}</span>
                    </p>
                    </div>
                    <div className="col"><p>timestamp: {this.state.currency.timestamp}</p></div>
                    <div className="col"><p>base: {this.state.currency.base}</p></div>
                    <div className="col">
                        <p>rates</p>
                        {newRatesArray}
                    </div>
                </div>
            </div >





        }
        else { return null }

        return content;

    }
}




