import React from 'react';
import { withTranslation } from 'react-i18next';
import AppContent from './AppContent';
import { pathUtils, getRouterByPath } from '../utils/routeUtils';
import './css/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: null,
        };
        this.pageRef = React.createRef();
        window.navigateTo = this.navigateTo.bind(this);
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.navigateToByHash();
        });
        this.navigateToByHash();
        this.updateDocumentTitle();
    }
    componentDidUpdate() {
        this.updateDocumentTitle();
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
    updateDocumentTitle() {
        const { t } = this.props;
        const title = ` · ${t('text.title')}`;
        document.title = title;
    }
    render() {
        return (
            <s-page class="App" ref={this.pageRef} theme="auto">
                {!pathUtils.isNotFound(this.state.path) ? (
                    <AppContent
                        router={getRouterByPath(this.state.path)}
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

export default withTranslation()(App);
