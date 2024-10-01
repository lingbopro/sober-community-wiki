import React from 'react';
import AppContent from './AppContent';
import './css/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.pageRef = React.createRef();
    }
    render() {
        return (
            <s-page class="App" ref={this.pageRef} theme="auto">
                <AppContent
                    setThemeFunc={(themeType) => {
                        this.pageRef.current.theme = themeType;
                    }}
                />
            </s-page>
        );
    }
}

export default App;
