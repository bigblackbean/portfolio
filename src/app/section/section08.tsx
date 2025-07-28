import Image from "next/image";
import photo from "/public/images/section08/photo.png";
import { copyToClipboard } from "@/constant/copy";
import { useToast } from "@/context/ToastContext";

const family = [
  {
    id: 1,
    title: "🤵‍♂️ 신랑측 마음 전달하기",
    accounts: [
      {
        role: "신랑",
        name: "이강희",
        bank: "신한",
        account: "110-304-642985",
      },
      {
        role: "신랑아버지",
        name: "이순진",
        bank: "농협",
        account: "351-0844-3471-63",
      },
      {
        role: "신랑어머니",
        name: "강희주",
        bank: "신한",
        account: "110-385-044660",
      },
    ],
  },
  {
    id: 2,
    title: "👰‍♀️️ 신부측 마음 전달하기",
    accounts: [
      {
        role: "신부",
        name: "소다솜",
        bank: "신한",
        account: "110-442-565656",
      },
      {
        role: "신부아버지",
        name: "소정호",
        bank: "우체국",
        account: "102079-02-073554",
      },
    ],
  },
];

export default function Section08() {
  const { showToast } = useToast();

  return (
    <div className="bg-[var(--bg-pink)] py-[10vw]">
      <div className="my-[8vw]">
        <Image src={photo} alt="photo" />
      </div>
      <div className="px-[4vw]">
        <ul>
          {family.map((item) => (
            <li key={item.id} className="mb-[6vw]">
              <div
                className="py-[2vw] border-b-2 border-[var(--basic-900)]"
                style={{ fontSize: "var(--fz-18)", fontWeight: 600 }}
              >
                {item.title}
              </div>
              <ul className="py-[2vw]">
                {item.accounts.map((sub) => (
                  <li
                    key={sub.name}
                    className="w-full py-[2vw]"
                    style={{ fontSize: "var(--fz-16)" }}
                  >
                    <p
                      className="opacity-60"
                      style={{ fontSize: "var(--fz-12)" }}
                    >
                      {sub.role}
                    </p>
                    <div className="flex justify-between">
                      <div className="flex">
                        <p className="w-[14vw]" style={{ fontWeight: 600 }}>
                          {sub.name}
                        </p>
                        <p>
                          <span
                            className="mr-[1vw]"
                            style={{ fontWeight: 600 }}
                          >
                            {sub.bank}
                          </span>
                          <span>{sub.account}</span>
                        </p>
                      </div>
                      <button
                        className={`px-[3vw] py-[1vw] rounded-full ${
                          item.id === 1 ? "bg-[#7696C5]" : "bg-[#CD6485]"
                        }`}
                        style={{
                          fontSize: "var(--fz-14)",
                          fontWeight: 600,
                          color: "#fff",
                        }}
                        onClick={() => {
                          copyToClipboard(sub.account)
                            .then(() => showToast("계좌번호를 복사했어요!"))
                            .catch(() => showToast("어라..? 복사가 안됐어요!"));
                        }}
                        type="button"
                      >
                        복사하기
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
