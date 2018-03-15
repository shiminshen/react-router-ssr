import React from 'react'
import { renderRoutes } from 'react-router-config'

const Html = props => {
  console.log(props)
  return (
    <html>
      <head />
      <body>{renderRoutes(props.route.routes)}</body>
    </html>
  )
}

export default Html
