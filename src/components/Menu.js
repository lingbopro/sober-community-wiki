import React from 'react';

class Menu extends React.Component {
    render() {
        const menuItems = this.props.items.map((value, index) => {
            return (
                <s-menu-item
                    {...value.props}
                    key={index}
                    onClick={typeof this.props.onChange === 'function' ? this.props.onChange(value, index) : () => {}}>
                    {value.component}
                </s-menu-item>
            );
        });
        return (
            <s-menu {...this.props}>
                <div slot="label">{this.props.label}</div>
                {menuItems}
            </s-menu>
        );
    }
}

export default Menu;
