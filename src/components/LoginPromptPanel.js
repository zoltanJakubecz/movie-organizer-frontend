import React from 'react'
import { Result } from 'antd'
import MovieIcon from '../img/movie-icon.png';

export default function LoginPromptPanel({ title, subtitle }) {
  return (
    <Result
      title={title}
      subTitle={subtitle}
      icon={<img height="200" src={MovieIcon} alt="movie-icon.png" />}
    />
  )
}
