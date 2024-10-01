import React from 'react';
import { withTranslation } from 'react-i18next';
import RegistryIcon from './RegistryIcon';
import './css/AppContent.css';

class AppContent extends React.Component {
    constructor(props) {
        super(props);
        this.drawerRef = React.createRef();
        this.themePickerRef = React.createRef();
    }
    componentDidMount() {
        this.themePickerRef.current?.addEventListener('change', () => {
            switch (this.themePickerRef.current?.selectedIndex) {
                case 1:
                    this.props.setThemeFunc('light');
                    break;
                case 2:
                    this.props.setThemeFunc('dark');
                    break;
                default:
                    this.props.setThemeFunc('auto');
                    break;
            }
        });
    }
    render() {
        // eslint-disable-next-line
        const { t } = this.props;
        return (
            <s-drawer ref={this.drawerRef}>
                <div className="App-sidebar" slot="start">
                    <s-navigation mode="rail"></s-navigation>
                </div>
                <div className="App-content">
                    <s-appbar>
                        <s-icon-button slot="navigation" onClick={() => this.drawerRef.current?.toggle('start')}>
                            <RegistryIcon type="menu" />
                        </s-icon-button>
                        <div slot="headline" className="App-headline">
                            <div className="App-headline-text">{t('ui.appBar.title')}</div>
                        </div>

                        <s-picker slot="action" ref={this.themePickerRef}>
                            <s-tooltip slot="trigger">
                                <s-icon-button slot="trigger">
                                    <RegistryIcon type="light_mode" />
                                </s-icon-button>
                                {t('tooltip.appBar.themeSwitch')}
                            </s-tooltip>
                            <s-picker-item selected>{t('text.theme.auto')}</s-picker-item>
                            <s-picker-item>{t('text.theme.lightMode')}</s-picker-item>
                            <s-picker-item>{t('text.theme.darkMode')}</s-picker-item>
                        </s-picker>
                        <s-popup-menu slot="action">
                            <s-tooltip slot="trigger">
                                <s-icon-button slot="trigger">
                                    <RegistryIcon type="github" />
                                </s-icon-button>
                                {t('text.github')}
                            </s-tooltip>
                            <s-popup-menu-item>
                                <a href="https://github.com/apprat/sober">{t('ui.appBar.github_repo.official')}</a>
                            </s-popup-menu-item>
                            <s-popup-menu-item>
                                <a href="https://github.com/lingbopro/sober-commuinty-wiki">{t('ui.appBar.github_repo.community_wiki')}</a>
                            </s-popup-menu-item>
                        </s-popup-menu>
                    </s-appbar>
                </div>
            </s-drawer>
        );
    }
}

export default withTranslation()(AppContent);
