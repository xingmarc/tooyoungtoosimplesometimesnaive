import React, { Component } from 'react'
import '../public/css/App.css'

const TooYoungTooSimpleSometimesNaive = () => (
    <div className="TYTS-headline">
        <div>Too Young,</div>
        <div>Too Simple,</div>
        <div>Somtimes Naive</div>
    </div>
)

class App extends Component {
    render() {
        return (
            <div>
            <div className="App-center-wrap">
                <TooYoungTooSimpleSometimesNaive />
            </div>

            <div className="App-center-wrap">
                <button className="TYTS-Plus-One-Second-btn">
                    <span className="TYTS-Plus-One-Second-btn__text">
                        {`+1s`}
                    </span>
                </button>
            </div>
            </div>
        )
    }
}

export default App
