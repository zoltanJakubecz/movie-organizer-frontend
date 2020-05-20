import React from 'react';
import styled from 'styled-components';
import { PageHeader as AntPageHeader, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoginForm from './LoginForm';


const StyledHeader = styled(AntPageHeader)`
  background-color: var(--primary-bg-color);
  margin-bottom: 1.5rem;
`;

export default function PageHeader() {


  return (

<>
    <StyledHeader
      className="pageHeader"
      title="Movie Organizer v0.0.2"
      ghost={false}
      extra={<LoginForm />}
    >
      
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/movies">
            Movies
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/artists">
            Staff
          </Link>
        </Menu.Item>
      </Menu>
    </StyledHeader>
</>
  )
}
