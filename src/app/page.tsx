import Link from "next/link";

export default function Home() {

      return (
    <ul>
      <li>
        <Link href="/product">Home</Link>
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
