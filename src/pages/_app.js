import '@/styles/globals.scss'
import React from 'react';
import propTypes from 'prop-types';
import Context from '@/context/context'

export default function App({ Component, pageProps }) {
  return (
    <Context >
      <Component {...pageProps} />
    </Context>
  )
}

App.propTypes = {
  Component: propTypes.shape({}).isRequired,
  pageProps: propTypes.shape({}).isRequired
}
