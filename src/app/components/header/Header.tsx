import Link from 'next/link'
import React from 'react'

export default function Header() {

	
	return (
		<ul>
		  <li>
			<Link href="/">Home</Link>
		  </li>
		  <li>
			<Link href="/user">My profile</Link>
		  </li>
		  <li>
			<Link href="/login">Login</Link>
		  </li>
		</ul>

  )
}
