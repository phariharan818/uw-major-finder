import React from 'react';
import '../index.css';
import data from '../data/data.json'
import { useState } from 'react';
import { List } from './List';

export function Major(props) {
    const [inputText, setInputText] = useState("");
    let inputHandler = (event) => {
        setInputText(event.target.value)
    };
    const majorArray = data.map((listPoint) => {
        const dataPoints = <li key={listPoint.major}>{listPoint.major}</li>;
        return dataPoints;
    });

    return (
        <div>
            <header className="major-page">
                    <div className="container">
                        <div className="xs-4 sm-4 md-6">
                            <h2 className="p-3 fs-1">A Guide To the University of Washington's Major System</h2>
                        </div>
                    </div>
            </header>
                <div className="col-xs-4 col-sm-4 col-md-6">
                    <div className='form-edit'>
                        <form id="form-control" className="p-4">
                            <input className='fs-5' type="search bar" id="query" placeholder="Look up..." size="55" onChange={inputHandler}></input>
                        </form>
                    </div>
                </div>
            <div className="container">
                <div className="row">
                    <h5 className="p-2 fs-4">
                        List of possible majors:
                    </h5>
                    <div className='major-text d-flex align-items-lg-start fs-5'>
                        <List input={inputText} />
                    </div>
                </div>
            </div>
        </div>
    )
};
