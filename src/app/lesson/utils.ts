export interface LessonData {
  id: number;
  name: string;
  description: string[];
}

export const lessons: LessonData[] = [
  {
    id: 1,
    name: "웹디자이너&웹퍼블리셔 과정",
    description: [
      "[취업반] 실무자 양성 프로그램.",
      "포토샵, 일러스트레이터 위주의 툴 활용 연습 디자인에 대한 개념 및 실제 작업 위주의 경험. 콘텐츠 디자이너, 편집디자이너, 웹디자이너로의 기초적인 지식과 능력 습득.",
      "HTML의 마크업 작업에 필요한 구조 이해. CSS의 스타일과 레이아웃에 대한 이해, 다양한 단위와 엘리먼트 간의 관계 이해. Javascript를 활용한 이벤트 활용과 애니메이션 작업. 프레임워크와 라이브러리의 활용. 웹서비스 제작에 필요한 개념 이해",
    ],
  },
  {
    id: 2,
    name: "그래픽 디자인 강의",
    description: [
      "포토샵, 일러스트레이터를 활용한 교육. 기본적인 툴 활용에 대한 이해. 실제 디자이너 및 프리랜서로 근무하는 환경에서 작업하게 되는 업무 경험해보기.",
      "폰트/색상/레이아웃에 대한 개념, 저작권 등 실무에서의 주의사항 알아보기.",
      "이미지 합성 및 편집과 보정, 썸네일, 배너, 상세페이지, SNS광고, 포스터, 명함, 스티커 등을 직접 제작해보기",
    ],
  },
  {
    id: 3,
    name: "웹퍼블리셔 기초",
    description: [
      "HTML의 기본적인 개념과 마크업에 대한 이해. 노드 구조와 Element의 관계. Tag의 종류와 사용 방법 및 목적.",
      "CSS의 역할 및 개념과 스타일에 대한 이해. 요소의 종류에 따른 스타일의 차이. 단위, 구조, 적용에 대한 이해.",
      "Javascript의 기초와 웹퍼블리셔가 활용하는 방법 및 범위에 대한 이해.",
      "서비스 제작을 위해 웹퍼블리셔가 갖춰야 하는 디자이너와 개발자 사이에서의 역할 이해",
    ],
  },
  {
    id: 4,
    name: "UI&UX디자이너 기초",
    description: [
      "피그마 툴을 활용하여 UIUX디자이너가 되기 위한 내용을 교육.",
      "피그마 툴을 사용하는 이유와 사용 방법을 안내. 서비스 개발을 위한 UIUX디자이너의 역할과 필요한 지식 습득",
    ],
  },
  {
    id: 5,
    name: "이모티콘 제작",
    description: [
      "포토샵, 일러스트레이터, 프로크리에이터(아이패드 전용 앱)를 활용한 이모티콘 제작하여 제안하기까지의 교육.",
      "그래픽 툴 혹은 그림 등에 대한 기초가 전혀 없는 수강생들을 대상자로 선정 PC, 태블릿 어느 것 하나만 있어도 이모티콘을 제작할 수 있도록 안내.",
      "움직이지 않는 기본 이모티콘, 움직이는 이모티콘 제작. 카카오톡 외의 플랫폼 등록하는 방법. 제작한 캐릭터로 이모티콘 외의 수익 창출 혹은 활용하는 방법 알아보기 등으로 진행",
    ],
  },
  {
    id: 6,
    name: "웹디자인기능사 자격증 취득",
    description: [
      "웹디자인기능사 자격증을 취득하기 위한 교육.",
      "포토샵, 일러스트레이터를 활용한 이미지 편집. HTML, CSS, Javascript, jQuery를 활용한 웹사이트 제작",
      "문제 유형별 메뉴구성/슬라이드/목록 제작하기",
    ],
  },
  {
    id: 7,
    name: "GTQ 자격증 강의",
    description: [
      "어도비 프로그램을 활용한 KPC자격인증센터의 GTQ 1급(포토샵), GTQi 1급(일러스트레이터) 자격증 취득을 위한 교육.",
      "프로그램의 활용 능력 및 문제 풀이 위주의 교육으로 진행",
    ],
  },
];
