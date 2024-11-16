
import React from 'react'
import s from './Header.module.scss';
import Link from 'next/link';
export const Header = () => {
	return (
	<header className={s.header}>
		
		<h1 className={s.header__left}><Link href="/products">Investia</Link></h1>
		
		<nav className={s.header__right}>
			<ul className={s.navStyle}>
				<li>
					<Link href="/products">For business</Link>
				</li>
				<li>
					<Link href="/products">For investor</Link>
				</li>
			</ul>
		</nav>
	</header>
	);
  };

