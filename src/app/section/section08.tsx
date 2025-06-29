import styles from "@/styles/section.module.css";
import Image from "next/image";
import photo from "/public/images/section08/photo.png";

const AccountButton = ({
  account,
  name,
}: {
  account: string;
  name: string;
}) => {
  return (
    <div>
      <p>{account}</p>
      <button type="button">{`${name}에게 마음 전달하기`}</button>
    </div>
  );
};

export default function Section08() {
  const groom = { account: "신한은행 110-304-642985", name: "강희" };
  const bride = { account: "신한은행 110-442-565656", name: "다솜" };

  return (
    <div>
      <Image src={photo} alt="photo" />
      <AccountButton {...groom} />
      <AccountButton {...bride} />
    </div>
  );
}
