import React from 'react';
import { withTranslation } from 'react-i18next';
import { routers } from '../router';
import { pathUtils } from '../utils/routeUtils';
import RegistryIcon from './RegistryIcon';
import Menu from './Menu';
import './css/AppContent.css';

class AppContent extends React.Component {
    constructor(props) {
        super(props);
        this.drawerRef = React.createRef();
        this.navbarRef = React.createRef();
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
        this.navbarRef.current?.addEventListener('change', () => {
            window.navigateTo(routers[this.navbarRef.current.selectedIndex].path);
        });
    }
    render() {
        const { t } = this.props;

        const navItems = routers.map((current, index) => {
            return (
                <s-navigation-item
                    key={index}
                    selected={
                        pathUtils.isPathEqual(this.props.routerPath, current.path) ||
                        pathUtils.isSubPath(this.props.routerPath, current.path)
                    }>
                    <RegistryIcon type={current.icon} slot="icon" />
                    <div slot="text">{t(`text.menu.${current.id}.name`)}</div>
                </s-navigation-item>
            );
        });
        const menus =
            this.props.router.subGroup.length > 0
                ? this.props.router.subGroup.map((value, index) => {
                      const items = value.sub.map((sub) => {
                          return {
                              component: (
                                  <>
                                      <div>{t(`text.menu.${this.props.router.id}.subGroups.${value.id}.sub.${sub.id}.name`)}</div>
                                  </>
                              ),
                          };
                      });
                      return <Menu label={t(`text.menu.${this.props.router.id}.subGroups.${value.id}.name`)} item={items} key={index} />;
                  })
                : [];

        return (
            <s-drawer ref={this.drawerRef}>
                <div className="App-sidebar" slot="start">
                    <s-navigation class="App-navbar" mode="rail" ref={this.navbarRef}>
                        {navItems}
                    </s-navigation>
                    {this.props.router.subGroup.length > 0 ? <s-scroll-view class="App-sidebar-menu">{menus}</s-scroll-view> : <></>}
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
                                <a href="https://github.com/lingbopro/sober-community-wiki">{t('ui.appBar.github_repo.community_wiki')}</a>
                            </s-popup-menu-item>
                        </s-popup-menu>
                    </s-appbar>
                </div>
            </s-drawer>
        );
    }
}

export default withTranslation()(AppContent);
