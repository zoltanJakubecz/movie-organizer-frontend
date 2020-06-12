import React, { useContext } from 'react';
import styled from 'styled-components';
import { PageHeader as AntPageHeader, Menu, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import { UserContext } from '../../contexts/UserContext';

const StyledHeader = styled(AntPageHeader)`
  background-color: var(--primary-bg-color);
  margin-bottom: 1.5rem;
`;

export default function PageHeader() {

  const { err } = useContext(UserContext);

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
          <Menu.Item key="2" >
            <Tooltip placement="bottomLeft" title="Not implemented yet.">
              <Link to="/artists">
                Staff
              </Link>
            </Tooltip>
          </Menu.Item>
          <span style={{ "float": "right", "color": "red", "paddingRight": "28em" }}>{err}</span>
        </Menu>
      </StyledHeader>
    </>
  )
}
