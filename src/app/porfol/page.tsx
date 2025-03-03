import Frame from "@/components/frame";
import Container from "@/components/container";
import Nav from "@/components/nav";
import Chat from "@/components/chat";

export default function Lesson() {
  return (
    <Frame>
      <Nav />
      <Container title="포트폴리오">
        <Chat direction="right">
          <p>포트폴리오 사이트의 컨셉이 무엇인가요?</p>
        </Chat>
        <Chat direction="left" profile>
          <p>저에 대해 간단한 소개와 이력을 담아서 대화를 나누는 컨셉으로</p>
          <p>채팅 형식의 UI를 제작했습니다.</p>
        </Chat>
        <Chat direction="right">
          <p>이번 포트폴리오를 제작하며 어떤 기술을 사용했나요?</p>
        </Chat>
        <Chat direction="left">
          <p>Figma로 디자인을 구상하고, Typescript를 통해 구현했습니다.</p>
          <p>그리고 공부해 보고 싶었던 Next.js 환경에서 제작했습니다.</p>
        </Chat>
        <Chat direction="right">
          <p>Next.js를 사용하면서 어떤 점을 느꼈나요?</p>
        </Chat>
        <Chat direction="left">
          <p>파일 디렉토리 구조가 일반적인 React 프로젝트와 차이가 있습니다.</p>
          <p>기존 CSR방식에서는 index.html파일에서 작성하는</p>
          <p>Meta Data를 .tsx에 다른 방식으로 넣는 점이 색달랐습니다.</p>
          <p>또한 Image를 넣는 방식도 달라서,</p>
          <p>
            실제 운영중인 서비스에서 사용하는 효율적인 방식도 익혀보고 싶습니다.
          </p>
        </Chat>
        <Chat direction="right">
          <p>배포는 어떤 방식으로 진행했나요?</p>
        </Chat>
        <Chat direction="left">
          <p>AWS Amplify를 활용했습니다.</p>
          <p>Vercel도 많이 사용하는 것으로 알고 있지만,</p>
          <p>
            운영중인 서비스에서는 AWS의 서비스를 더 많이 활용하는 것으로
            파악되어
          </p>
          <p>이와 같은 선택을 했습니다.</p>
        </Chat>
        <Chat direction="right">
          <p>별도로 사이트를 만든 이유가 있나요?</p>
        </Chat>
        <Chat direction="left" profile>
          <p>
            저라는 사람에 대해 즐겁게 알아가는 시간이 되었으면 해서
            제작했습니다!
          </p>
        </Chat>
        <Chat direction="left">
          <p>
            더 자세한 이야기가 궁금하시다면,{" "}
            <a
              href="https://pattern-acoustic-8e2.notion.site/R-sum-920dd947430d45e6862f1fdd46a1eb6f"
              style={{
                color: "var(--primary-600)",
                textDecoration: "underline",
              }}
            >
              노션페이지
            </a>
            에서 확인해 주세요!
          </p>
        </Chat>
      </Container>
    </Frame>
  );
}
