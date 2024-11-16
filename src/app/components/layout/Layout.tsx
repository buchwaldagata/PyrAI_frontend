import React, { FC } from 'react'
import { Header } from '../header/Header'

interface Props {
	children: React.ReactNode;
}

export const Layout:FC<Props> =(props) => {
	const {children} = props;
  return (
	<div>
	  <Header />
	  {children}
	</div>
  )
}
