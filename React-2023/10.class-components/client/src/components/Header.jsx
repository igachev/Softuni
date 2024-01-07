import { Component } from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import ToDoContext from "../contexts/ToDoContext";
import {Navigate} from 'react-router-dom'
import withNavigate from "../HOC/withNavigate";

 class Header extends Component {

    render() {

        const items = [
            {
              label: 'Navigation One',
              key: 'mail',
              icon: <MailOutlined />,
            },
            {
              label: 'Navigation Two',
              key: 'app',
              icon: <AppstoreOutlined />,
              disabled: true,
            },
            
            {
              label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              ),
              key: 'alipay',
            },
          ];

         //using redirect in class component using HOC
         // this.props.navigate('/404')

        return (
          <ToDoContext.Consumer>
          {({ name }) => (
            <>
              <Menu mode="horizontal" items={items} />
              <h3>{name}</h3>
            </>
          )}
        </ToDoContext.Consumer>
        )

    }

}

export default withNavigate(Header)