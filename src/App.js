import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

import '../public/css/App.css'
import Yawn from  '../public/img/yawn.jpg'
import Teapot from '../public/img/teapot.gif'

const TooYoungTooSimpleSometimesNaive = () => (
    <div className="App-center-wrap">
        <div className="TYTS-headline">
            <div>Too Young,</div>
            <div>Too Simple,</div>
            <div>Somtimes Naive!</div>
        </div>
    </div>
)

const PlusOneSecondButton = () => (
    <div className="App-center-wrap">
        <button className="TYTS-Plus-One-Second-btn">
            <span className="TYTS-Plus-One-Second-btn__text">
                {`+1s`}
            </span>
        </button>
    </div>
)

const About = () => (
    <div className="App-center-wrap" style={{display: 'flex', justifyContent: 'space-around'}}>
        <div>
            <a href="https://www.quora.com/What-does-the-Chinese-saying-Too-young-too-simple-sometimes-naive-mean">About</a>
        </div>
        <div>
            <Link to='me'>Me</Link>
        </div>
        <div>
            <Link to='anythingelse'>Anything Else?</Link>
        </div>
    </div>
)

class Home extends Component {
    render() {
        return (
            <div>
                <TooYoungTooSimpleSometimesNaive />
                <PlusOneSecondButton />
                <About />
            </div>
        )
    }
}

const TooYoungTooSimple404 = () => (
    <div className="App-center-wrap">
        <div className="TYTS-headline">
            404 Not Found
        </div>
        <img src={Yawn} />
    </div>
)

const None = () => (
    <div className="App-center-wrap">
        <div className="TYTS-headline">
            No, nothing
        </div>
        <img src={Teapot} />
    </div>
)

const me = {
    name: 'Yichi Xing',
    tag: 'too young, too simple, sometimes naive',
    occupation: 'software engineer',
    location: 'san francisco bay area',
    github: 'https://github.com/xingmarc',

    experince: [
        {
            title: 'software engineer',
            company: 'Orcafly Inc',
            description: ''
        }, {
            title: 'front end engineer',
            company: 'socialgear.us',
            description: ''
        }
    ],
    education: [
        {
            school: 'UCLA',
            degree: 'Master',
            graduationDate: 'Mar 2016',
        }, {
            school: 'Shanghai Jiao Tong University',
            degree: 'Bachelor',
            graduationDate: 'July 2014'
        }
    ],
    skill:[
        {
            language: 'javascript',
            librariesOrFrameworks: [
                'react', 'angular'
            ]
        }, {
            language: 'java',
        }, {
            language: 'python',
            librariesOrFrameworks: [
                'django'
            ]
        }, {
            language: 'swift'
        }
    ],
    interest: ['guitar', 'painting', 'lego']
}

class IAmTooYoungTooSimpleAndSometimesNaive extends Component {
    render () {
        return (
            <div style={{fontSize: '4vw', margin: '5%'}}>
                <code> {`const me =`} </code>
                <pre style={{margin: 0}}>
                    {JSON.stringify(me, null, 2 )}
                </pre>
                <code> {`module.exports = { me }`} </code>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home} />
                <Route path="me" component={IAmTooYoungTooSimpleAndSometimesNaive} />
                <Route path="anythingelse" component={None} />
                <Route path="*" component={TooYoungTooSimple404} />
            </Router>
        )
    }
}

export default App
