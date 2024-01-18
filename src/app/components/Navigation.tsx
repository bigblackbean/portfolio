import Link from "next/link";
import styles from "../styles/navigation.module.css";
import Image from "next/image";

function NavigationItem(props: { name: string; path: string }) {
  return (
    <li>
      <Link href={props.path}>
        <Image src={""} alt="" />
        <p style={{ textAlign: "center", color: "#fff" }}>{props.name}</p>
      </Link>
    </li>
  );
}

export default function Navigation() {
  const NAVIGATION_LIST: { id: number; name: string; path: string }[] = [
    { id: 0, name: "Profile", path: "profile" },
    { id: 1, name: "Skills", path: "skills" },
  ];
  return (
    <div>
      <ul style={{ display: "flex", justifyContent: "center" }}>
        {NAVIGATION_LIST.map((item) => (
          <NavigationItem key={item.id} name={item.name} path={item.path} />
        ))}
      </ul>
    </div>
  );
}
