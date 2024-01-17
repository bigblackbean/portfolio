import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
      </ul>
    </div>
  );
}
