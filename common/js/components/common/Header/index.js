import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react';

const menuItems = [
  { name: 'Home', to: '/', exact: true },
  { name: 'Todos', to: '/todos' },
  { name: 'GMO_Payment', to: '/gmo_payment'},
  { name: 'Search_Reservation_Code', to: '/search_reservation_code'},
];

class HeaderView extends Component {
  render() {
    return (
      <Header>
        <Menu size="massive">
          {menuItems.map(item => (
            <Menu.Item {...item} as={NavLink} key={item.name}>
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    );
  }
}

export default HeaderView;
