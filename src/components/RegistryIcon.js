import React from 'react';
import 'sober';

class RegistryIcon extends React.Component {
    /**
     * Sober 内置图标
     * @type {Array.<string>}
     * @static
     * @memberof Icon
     */
    static builtInIcons = [
        'none',
        'add',
        'home',
        'search',
        'menu',
        'arrow_back',
        'arrow_forward',
        'arrow_upward',
        'arrow_downward,arrow_drop_up',
        'arrow_drop_down',
        'arrow_drop_left',
        'arrow_drop_right',
        'more_vert',
        'more_horiz',
        'close',
        'done',
        'chevron_up',
        'chevron_down',
        'chevron_left',
        'chevron_right,light_mode',
        'dark_mode',
        'star',
        'favorite',
    ];
    /**
     * SVG图标注册表
     * @type {Object.<string, React.JSX.Element>}
     * @static
     * @memberof RegistryIcon
     */
    static SVGIconsRegistry = {
        github: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
        ),
        light_mode: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"></path>
            </svg>
        ),
        sentiment_satisfied: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"></path>
            </svg>
        ),
    };
    render() {
        if (RegistryIcon.builtInIcons.includes(this.props.type)) {
            return <s-icon slot={this.props.slot} type={this.props.type} />;
        }
        let svg = <svg xmlns="http://www.w3.org/2000/svg"></svg>;
        if (RegistryIcon.SVGIconsRegistry[this.props.type]) {
            svg = RegistryIcon.SVGIconsRegistry[this.props.type];
        }
        return <s-icon slot={this.props.slot}>{svg}</s-icon>;
    }
}

export default RegistryIcon;
