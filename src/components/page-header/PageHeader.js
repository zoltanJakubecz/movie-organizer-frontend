import React from 'react';
import styled from 'styled-components';
import { PageHeader as AntPageHeader, Menu } from 'antd';

const StyledHeader = styled(AntPageHeader)`
  background-color: var(--primary-bg-color);
  margin-bottom: 1.5rem;
`;

export default function PageHeader() {
  return (
    
    <StyledHeader
      className="pageHeader"
      title="Movie Organizer v0.0.1"
      ghost={false}
    >
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
        <a rel="noopener noreferrer" href="/movies">
        Movies
      </a></Menu.Item>
        <Menu.Item key="2">
        <a rel="noopener noreferrer" href="/artists">
        Persons
      </a>
        </Menu.Item>
      </Menu>
    </StyledHeader>
    
  )
}
