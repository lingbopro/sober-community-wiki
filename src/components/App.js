import React from 'react';
import AppContent from './AppContent';
import { pathUtils } from '../router';
import './css/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: null,
        };
        this.pageRef = React.createRef();
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.navigateToByHash();
        });
        this.navigateToByHash();
    }
    navigateToByHash() {
        let hash = pathUtils.parsePath(window.location.hash);
        if (hash === this.state.path) {
            return;
        }
        this.navigateTo(window.location.hash);
    }
    navigateTo(path) {
        let state = this.state;
        state.path = pathUtils.parsePath(path);
        this.setState(state);
        window.location.hash = state.path;
    }
    render() {
        return (
            <s-page class="App" ref={this.pageRef} theme="auto">
                {!pathUtils.isNotFound(this.state.path) ? (
                    <AppContent
                        routerPath={this.state.path}
                        setThemeFunc={(themeType) => {
                            this.pageRef.current.theme = themeType;
                        }}
                    />
                ) : (
                    <></>
                )}
            </s-page>
        );
    }
}

export default App;
