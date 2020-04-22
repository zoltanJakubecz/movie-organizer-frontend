import React from 'react';
import styled from 'styled-components';
import { PageHeader as AntPageHeader } from 'antd';

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
    />
  )
}
