import styles from "@/styles/frame.module.css";
import Image from "next/image";
import { StaticImageData } from "next/image";

export default function Chat({
  direction,
  children,
  talkProfile,
  image,
}: {
  direction: string;
  children: React.ReactNode;
  talkProfile?: { image: StaticImageData; name: string };
  image?: boolean;
}) {
  return (
    <div
      className={`${styles.chat} ${
        direction === "left" ? styles.left : styles.right
      } ${image && styles.img} body1`}
    >
      {talkProfile && (
        <div className={styles.profile}>
          <Image src={talkProfile.image} alt={talkProfile.name} />
        </div>
      )}
      <div className={styles.balloon}>{children}</div>
    </div>
  );
}
