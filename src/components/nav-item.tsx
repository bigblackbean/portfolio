import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "@/styles/nav.module.css";

interface Navigator {
  name: string;
  url: string;
  icon: StaticImageData;
  description: string;
}

export default function NavItem({
  item,
  current,
}: {
  item: Navigator;
  current: string;
}) {
  return (
    <div>
      <Link href={item.url} scroll={false}>
        <div
          className={styles.item}
          style={{ background: current === item.url ? "var(--basic-100)" : "" }}
        >
          <div className={styles.icon}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={item.icon}
              alt={item.name}
            />
          </div>
          <div className={styles.text}>
            <h3 className="h3">{item.name}</h3>
            <p className="body3" style={{ color: "var(--basic-500)" }}>
              {item.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
