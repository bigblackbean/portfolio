import Image from "next/image";
import photo from "/public/images/section08/photo.png";
import { copyToClipboard } from "@/constant/copy";
import { useToast } from "@/context/ToastContext";

const AccountButton = ({
  account,
  name,
  bg,
}: {
  account: string;
  name: string;
  bg: string;
}) => {
  const { showToast } = useToast();

  return (
    <div className="">
      <p style={{ fontSize: "var(--fz-14)" }}>
        <span style={{ fontWeight: 600 }}>신한은행&nbsp;</span>
        {account}
      </p>
      <button
        className={`py-[2vw] px-[3vw] rounded-[4vw] text-[var(--basic-0)]`}
        style={{
          fontSize: "var(--fz-16)",
          fontWeight: 600,
          backgroundColor: bg,
        }}
        onClick={() => {
          copyToClipboard(account)
            .then(() => showToast("계좌번호를 복사했어요!"))
            .catch(() => showToast("어라..? 복사가 안됐어요!"));
        }}
        type="button"
      >{`${name}에게 마음 전달하기`}</button>
    </div>
  );
};

export default function Section08() {
  const groom = {
    account: "110-304-642985",
    name: "강희",
    bg: "#7696C5",
  };
  const bride = {
    account: "110-442-565656",
    name: "다솜",
    bg: "#CD6485",
  };

  return (
    <div className="bg-[var(--bg-pink)] py-[10vw]">
      <div className="flex ml-[4vw]">
        <AccountButton {...groom} />
      </div>
      <div className="my-[8vw]">
        <Image src={photo} alt="photo" />
      </div>
      <div className="flex justify-end mr-[4vw]">
        <AccountButton {...bride} />
      </div>
    </div>
  );
}
