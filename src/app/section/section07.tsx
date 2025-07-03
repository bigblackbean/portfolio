import NaverMap from "@/components/navermap";
import { copyToClipboard } from "@/constant/copy";
import { useToast } from "@/context/ToastContext";

export default function Section07() {
  const { showToast } = useToast();
  const address = "서울 영등포구 신길로 89 베뉴비안 웨딩";

  return (
    <div className="bg-[var(--bg-pink)] relative py-[19vw] overflow-x-hidden">
      <div className="h-[68vw]">
        <NaverMap />
      </div>
      <div className="px-[4vw]">
        <div className="flex justify-between items-center py-[4vw]">
          <div style={{ fontSize: "var(--fz-16)" }}>
            <p style={{ fontWeight: 600 }}>VENUEVIAN WEDDING</p>
            <p>{address}</p>
          </div>
          <div>
            <button
              onClick={() =>
                copyToClipboard(address)
                  .then(() => showToast("주소를 복사했어요!"))
                  .catch(() => showToast("어라..? 복사가 안됐어요!"))
              }
              className="py-[2vw] px-[4vw] bg-[var(--basic-800)] text-[var(--basic-0)] rounded-[4vw]"
              style={{ fontSize: "var(--fz-16)", fontWeight: 700 }}
              type="button"
            >
              주소복사
            </button>
          </div>
        </div>
        <p
          style={{
            fontSize: "var(--fz-11)",
            fontWeight: 400,
            color: "var(--basic-600)",
          }}
        >
          ※ 자차를 이용할 경우 지상, 지하 주차 가능하지만 다소 공간이 협소할 수
          있습니다.
        </p>
      </div>
    </div>
  );
}
