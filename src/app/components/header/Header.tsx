
import React from 'react'
import s from './Header.module.scss';
import Link from 'next/link';
export const Header = () => {
	return (
	<header className={s.header}>
		<div className={s.header__left}>
		<h1><Link href="/products">My App</Link></h1>
		</div>
		<nav className={s.header__right}>
			<ul className={s.navStyle}>
				<li>
					<Link href="/products">Home</Link>
				</li>
				<li>
					<Link href="/user">My profile</Link>
				</li>
			</ul>
		</nav>
	</header>
	);
  };

