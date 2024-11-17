import { Button } from "antd";
import Link from "next/link";
import s from './Home.module.scss';

export default function Home() {
    return (
    <div className={s.mainCard}>
		<div className={s.card}>
			Welcome to the Investia connect group! Choose your role on a tab and dive into creative projects. Find your best match.
			<div className={s.buttons}>
				<Button><Link href="/products"> Go to business page </Link></Button>
				<Button><Link href="/products"> Go to investors page </Link></Button>
			</div>
		</div>
	</div>
	)
}
