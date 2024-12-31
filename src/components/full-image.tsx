import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function FullImage({
  image,
  alt,
}: {
  image: StaticImport;
  alt: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Image src={image} alt={alt} />
    </div>
  );
}
