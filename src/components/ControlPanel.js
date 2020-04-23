import React, { useContext } from 'react';


import './control-panel.css';
import NewMovieButton from './NewMovieButton';
import { Pagination } from 'antd';
import { MovieContext } from '../contexts/MovieContext';

export default function ControlPanel() {

  const { total, page, actions } = useContext(MovieContext);
  const loadPage = actions.loadPage;

  const onChange = function (page, pageSize) {
    loadPage(page);
  }

  return (
    <div className="controlPanel">
      <NewMovieButton />
      <Pagination
        current={page}
        defaultCurrent={1}
        total={total}
        pageSize={5}
        onChange={onChange}
      />
    </div>
  )
}