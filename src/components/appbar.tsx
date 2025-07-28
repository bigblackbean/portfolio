import arrow from "/public/images/icons/arrow-up.svg";
import gallery from "/public/images/icons/gallery.svg";
import calendar from "/public/images/icons/calendar.svg";
import map from "/public/images/icons/map.svg";
import mail from "/public/images/icons/mail.svg";
import Image from "next/image";

const nav = [
  { id: 1, name: "맨위로", src: arrow, key: "main" },
  { id: 2, name: "갤러리", src: gallery, key: "gallery" },
  { id: 3, name: "날짜", src: calendar, key: "calendar" },
  { id: 4, name: "결혼식장", src: map, key: "map" },
  { id: 5, name: "마음전하기", src: mail, key: "message" },
] as const;

type NavKey = (typeof nav)[number]["key"];

export default function Appbar({
  isScrollingDown,
  onNavigate,
}: {
  isScrollingDown: boolean;
  onNavigate: Record<NavKey, () => void>;
}) {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <ul
        className={`flex w-full bg-[#000000] ${
          isScrollingDown ? "pb-[6vw]" : "pb-[0]"
        }`}
      >
        {nav.map((item) => (
          <li key={item.id} className="w-1/5 shrink-0">
            <button
              className="flex flex-col items-center w-full py-[2vw] opacity-80 active:opacity-100"
              onClick={onNavigate[item.key]}
              type="button"
            >
              <div className="w-[5vw] h-[5vw] mb-[1vw]">
                <Image src={item.src} alt={item.name} />
              </div>
              <p
                className="text-white"
                style={{ fontSize: "var(--fz-12)", fontWeight: 600 }}
              >
                {item.name}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
