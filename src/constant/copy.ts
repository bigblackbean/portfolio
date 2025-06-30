export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("복사됨");
  } catch (err) {
    console.error("클립보드 복사 실패:", err);
  }
};
