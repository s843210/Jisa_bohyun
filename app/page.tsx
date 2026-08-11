"use client";

import { useEffect, useMemo, useState } from "react";

type Lang = "ko" | "ja";
type Localized = Record<Lang, string>;

const copy = {
  ko: {
    skip: "본문으로 건너뛰기",
    role: "US Medical Inc. × POKEDEN · 일본 기업 현장실습",
    navWork: "무엇을 했나",
    navSystem: "어떻게 연결했나",
    navOutcome: "무엇을 남겼나",
    navReflection: "무엇이 달라졌나",
    heroKicker: "JAPAN FIELDWORK / 2026.07—08",
    heroLine1: "만들고,",
    heroLine2: "움직이고,",
    heroLine3: "남겨지게.",
    heroBody:
      "포케덴의 AI 광고 영상에서 시작해 웹 인터랙션, 운영 대시보드, 실제 인쇄 가능한 패키지까지. 결과물이 혼자서 계속 일하게 만드는 과정을 설계했습니다.",
    explore: "프로젝트 보기",
    scroll: "SCROLL TO CONNECT",
    heroNote: "일본 최초 양치 타블렛 ‘포케덴’을 위해 만든 하나의 연결된 시스템",
    month: "개월",
    works: "성과물",
    scenes: "영상 테마",
    languages: "운영 언어",
    thesisLabel: "THE THESIS",
    thesisTitle: "좋은 결과물은 완성되는 것이 아니라,\n계속 사용될 때 비로소 작동한다.",
    thesisBody:
      "영상, 웹, 관리 화면, 패키지를 각각의 과제가 아닌 하나의 흐름으로 보았습니다. 사용자가 보고, 반응하고, 담당자가 이어서 운영하는 지점까지가 제 작업의 범위였습니다.",
    systemLabel: "01 / CONNECTED SYSTEM",
    systemTitle: "MAKE → MOVE → MANAGE",
    systemBody: "보여주는 기술에서, 전달하는 기술을 거쳐, 지속되는 기술로.",
    make: "MAKE",
    makeTitle: "브랜드를 보이게",
    makeBody: "5개 사용 장면의 AI 광고 영상과 타깃별 패키지 크리에이티브를 만들었습니다.",
    move: "MOVE",
    moveTitle: "경험을 움직이게",
    moveBody: "영상 통합, 지연 로딩, 반응형 표시, 호버 재생으로 정적인 소개를 경험으로 바꿨습니다.",
    manage: "MANAGE",
    manageTitle: "팀이 이어가게",
    manageBody: "영상·문구·공지·문의 현황을 담당자가 직접 다룰 수 있는 운영 화면을 정리했습니다.",
    labLabel: "02 / INTERACTIVE CASE LAB",
    labTitle: "다섯 번의 핸드오프,\n하나의 브랜드 경험.",
    labIntro: "항목을 눌러 제가 무엇을 만들고, 어디서 막혔고, 어떻게 넘겼는지 확인해 보세요.",
    challenge: "CHALLENGE",
    response: "RESPONSE",
    result: "RESULT",
    live: "LIVE PROTOTYPE",
    hoverHint: "장면에 마우스를 올려보세요",
    adminTitle: "POKEDEN / CONTENT CONTROL",
    packageLabel: "03 / BRAND IN PHYSICAL FORM",
    packageTitle: "같은 제품,\n완전히 다른 두 시선.",
    packageBody:
      "어린이·보호자에게는 친근한 우주 세계관을, 선물용 프리미엄 고객에게는 절제된 네이비와 여백을 제안했습니다. ‘내가 좋아하는 디자인’이 아니라 ‘누가 보는 디자인인가’를 기준으로 나눴습니다.",
    kids: "KIDS / FAMILY",
    kidsDesc: "캐릭터 · 3가지 과일 맛 · 개별 포장 · 3세 이상",
    premium: "PREMIUM / GIFT",
    premiumDesc: "네이비 · 고급 여백 · 기능을 절제한 정보 계층",
    printReady: "PRINT-READY",
    printTitle: "화면에서 상자까지",
    printBody: "95 × 65 × 30 mm 전개도에 효능, 사용법, 성분, 주의사항을 면별로 배치해 실제 인쇄 데이터로 연결했습니다.",
    outcomeLabel: "04 / OUTPUT ≠ OUTCOME",
    outcomeTitle: "8개의 결과물보다\n중요했던 한 가지.",
    outcomeBody: "만든 사람이 떠난 뒤에도 결과물이 계속 쓰이는가. 이 질문이 모든 판단의 기준이 되었습니다.",
    deliverables: "DELIVERABLES",
    ops: "운영 가능",
    feedback: "주간 피드백 루프",
    targets: "타깃 패키지 라인",
    problemLabel: "THREE PROBLEMS I KEPT",
    problemTitle: "문제는 사라졌고,\n판단 기준은 남았습니다.",
    reflectionLabel: "05 / THE OTHER BUILD",
    reflectionTitle: "기술보다 먼저\n태도가 바뀌었다.",
    reflectionQuote: "‘실수하면 안 된다’에서\n‘모르면 묻고, 틀리면 고치면 된다’로.",
    reflectionBody:
      "서툰 일본어로 회의하고, 피드백을 오해해 엉뚱한 곳을 고치기도 했습니다. 그러나 다시 묻는 용기와 매주 수정하는 습관을 얻었습니다. 일본에서의 두 달은 포트폴리오를 채운 시간이 아니라, 일하는 방식을 바꾼 시간이었습니다.",
    language: "언어",
    languageBody: "모르는 표현을 메모하고 다음 회의에서 직접 사용하며, 일본어를 신뢰를 만드는 업무 도구로 익혔습니다.",
    feedbackTitle: "피드백",
    feedbackBody: "지적 → 수정 → 재검토를 반복하며 피드백을 부정이 아닌 ‘혼자서는 못 보는 시선’으로 받아들였습니다.",
    ownership: "오너십",
    ownershipBody: "내가 만족하는가보다 받는 사람이 계속 편하게 쓸 수 있는가를 먼저 생각하게 되었습니다.",
    closingSmall: "LIM BOHYUN × US MEDICAL INC.",
    closingTitle: "보여주는 기술과\n운용하는 기술을 잇다.",
    closingBody: "AI 광고 영상 · 웹 개발 · 운영 대시보드 · 패키지 디자인",
    top: "처음으로",
    source: "US Medical Inc. 기업 현장실습 보고서를 기반으로 구성했습니다.",
  },
  ja: {
    skip: "本文へ移動",
    role: "US Medical Inc. × POKEDEN · 日本企業現場実習",
    navWork: "担当したこと",
    navSystem: "どうつないだか",
    navOutcome: "何を残したか",
    navReflection: "何が変わったか",
    heroKicker: "JAPAN FIELDWORK / 2026.07—08",
    heroLine1: "つくって、",
    heroLine2: "動かして、",
    heroLine3: "残る仕組みに。",
    heroBody:
      "ポケデンのAI広告動画から、Webインタラクション、運用ダッシュボード、印刷可能なパッケージまで。成果物が自走し続ける流れを設計しました。",
    explore: "プロジェクトを見る",
    scroll: "SCROLL TO CONNECT",
    heroNote: "日本初の歯みがきタブレット「ポケデン」のためにつくった、一つのつながるシステム",
    month: "か月",
    works: "成果物",
    scenes: "動画テーマ",
    languages: "運用言語",
    thesisLabel: "THE THESIS",
    thesisTitle: "良い成果物は、完成した時ではなく、\n使われ続けて初めて機能する。",
    thesisBody:
      "動画、Web、管理画面、パッケージを別々の課題ではなく、一つの流れとして捉えました。ユーザーが見て、反応し、担当者が運用を続けられる地点までが私の仕事です。",
    systemLabel: "01 / CONNECTED SYSTEM",
    systemTitle: "MAKE → MOVE → MANAGE",
    systemBody: "見せる技術から、届ける技術を経て、続く技術へ。",
    make: "MAKE",
    makeTitle: "ブランドを見える形に",
    makeBody: "5つの利用シーンのAI広告動画と、ターゲット別パッケージを制作しました。",
    move: "MOVE",
    moveTitle: "体験を動かす",
    moveBody: "動画統合、遅延読み込み、レスポンシブ表示、ホバー再生で静的な紹介を体験に変えました。",
    manage: "MANAGE",
    manageTitle: "チームが続けられる形に",
    manageBody: "動画・文言・お知らせ・問い合わせを担当者が直接扱える運用画面を整えました。",
    labLabel: "02 / INTERACTIVE CASE LAB",
    labTitle: "5回のハンドオフ、\n一つのブランド体験。",
    labIntro: "項目を選び、何をつくり、どこでつまずき、どう次へつないだかをご覧ください。",
    challenge: "CHALLENGE",
    response: "RESPONSE",
    result: "RESULT",
    live: "LIVE PROTOTYPE",
    hoverHint: "シーンにカーソルを合わせてください",
    adminTitle: "POKEDEN / CONTENT CONTROL",
    packageLabel: "03 / BRAND IN PHYSICAL FORM",
    packageTitle: "同じ製品、\nまったく違う二つの視点。",
    packageBody:
      "子どもと保護者には親しみやすい宇宙の世界観を、ギフト向けには抑制したネイビーと余白を提案。「自分が好きか」ではなく「誰が見るか」を基準に分けました。",
    kids: "KIDS / FAMILY",
    kidsDesc: "キャラクター · 3種のフルーツ味 · 個包装 · 3歳以上",
    premium: "PREMIUM / GIFT",
    premiumDesc: "ネイビー · 上質な余白 · 機能を絞った情報設計",
    printReady: "PRINT-READY",
    printTitle: "画面から箱へ",
    printBody: "95 × 65 × 30 mmの展開図に効能、用法、成分、注意事項を面ごとに配置し、実際の印刷データにつなげました。",
    outcomeLabel: "04 / OUTPUT ≠ OUTCOME",
    outcomeTitle: "8つの成果物より\n大切だった一つのこと。",
    outcomeBody: "制作者が離れた後も、成果物が使われ続けるか。この問いがすべての判断基準になりました。",
    deliverables: "DELIVERABLES",
    ops: "運用可能",
    feedback: "週次フィードバック",
    targets: "ターゲット別ライン",
    problemLabel: "THREE PROBLEMS I KEPT",
    problemTitle: "問題は消え、\n判断基準が残った。",
    reflectionLabel: "05 / THE OTHER BUILD",
    reflectionTitle: "技術より先に、\n姿勢が変わった。",
    reflectionQuote: "「失敗してはいけない」から\n「分からなければ聞き、間違えれば直す」へ。",
    reflectionBody:
      "拙い日本語で会議をし、フィードバックを誤解して見当違いの箇所を直したこともありました。それでも、聞き返す勇気と毎週改善する習慣を得ました。日本での二か月は、作品を増やした時間ではなく、働き方を変えた時間でした。",
    language: "言葉",
    languageBody: "知らない表現をメモし、次の会議で自分から使うことで、日本語を信頼を築く仕事の道具として学びました。",
    feedbackTitle: "フィードバック",
    feedbackBody: "指摘 → 修正 → 再確認を重ね、フィードバックを否定ではなく「一人では見えない視点」と捉えました。",
    ownership: "オーナーシップ",
    ownershipBody: "自分が満足するかより、受け取る人が使い続けやすいかを先に考えるようになりました。",
    closingSmall: "LIM BOHYUN × US MEDICAL INC.",
    closingTitle: "「見せる」技術と\n「運用する」技術をつなぐ。",
    closingBody: "AI広告動画 · Web開発 · 運用ダッシュボード · パッケージデザイン",
    top: "トップへ",
    source: "US Medical Inc. 企業現場実習報告書をもとに構成しています。",
  },
} as const;

const cases: Array<{
  no: string;
  label: Localized;
  title: Localized;
  challenge: Localized;
  response: Localized;
  result: Localized;
  visual: "film" | "web" | "hover" | "admin" | "package";
}> = [
  {
    no: "01",
    label: { ko: "AI AD FILM", ja: "AI AD FILM" },
    title: { ko: "광고 영상을 기획하고 반복 개선", ja: "広告動画を企画し、反復改善" },
    challenge: { ko: "전개가 빠르고 자막이 읽히지 않았습니다.", ja: "展開が速く、字幕が読み取りにくい状態でした。" },
    response: { ko: "5개 사용 장면을 나누고 매주 수정·재리뷰했습니다.", ja: "5つの利用シーンに分け、毎週修正と再レビューを行いました。" },
    result: { ko: "브랜드 톤과 가독성이 정돈된 영상 시리즈", ja: "ブランドトーンと可読性を整えた動画シリーズ" },
    visual: "film",
  },
  {
    no: "02",
    label: { ko: "WEB INTEGRATION", ja: "WEB INTEGRATION" },
    title: { ko: "영상이 웹에서 제대로 보이게", ja: "動画がWebで正しく届く形に" },
    challenge: { ko: "영상 추가 후 로딩이 느리고 모바일 화면이 잘렸습니다.", ja: "動画追加後に表示が重くなり、モバイルで画面が切れました。" },
    response: { ko: "지연 로딩, 재생 제어, 반응형 표시를 조정했습니다.", ja: "遅延読み込み、再生制御、レスポンシブ表示を調整しました。" },
    result: { ko: "경험을 해치지 않는 영상 중심 랜딩 페이지", ja: "体験を損なわない動画中心のランディングページ" },
    visual: "web",
  },
  {
    no: "03",
    label: { ko: "HOVER PLAY", ja: "HOVER PLAY" },
    title: { ko: "사진을 움직이는 장면으로", ja: "写真を動くシーンへ" },
    challenge: { ko: "빠른 마우스 이동에서 영상이 겹치거나 멈추지 않았습니다.", ja: "素早いカーソル移動で動画が重なり、停止しない不具合が出ました。" },
    response: { ko: "이벤트 처리를 모으고 불필요한 리렌더링을 줄였습니다.", ja: "イベント処理を集約し、不要な再レンダリングを減らしました。" },
    result: { ko: "5개 장면 자동 순환 + 안정적인 호버 재생", ja: "5シーンの自動循環 + 安定したホバー再生" },
    visual: "hover",
  },
  {
    no: "04",
    label: { ko: "ADMIN OPS", ja: "ADMIN OPS" },
    title: { ko: "담당자가 직접 운영하는 화면", ja: "担当者が自ら運用できる画面" },
    challenge: { ko: "만든 사람에게 쉬운 화면이 처음 쓰는 사람에게는 어려웠습니다.", ja: "制作者には簡単でも、初めて使う人には分かりにくい画面でした。" },
    response: { ko: "정보 우선순위와 교체·편집 흐름을 다시 설계했습니다.", ja: "情報の優先順位と差し替え・編集フローを再設計しました。" },
    result: { ko: "미디어·다국어·공지·문의를 한 화면에서 관리", ja: "メディア・多言語・お知らせ・問い合わせを一画面で管理" },
    visual: "admin",
  },
  {
    no: "05",
    label: { ko: "PACKAGE", ja: "PACKAGE" },
    title: { ko: "타깃이 보이는 패키지", ja: "ターゲットが見えるパッケージ" },
    challenge: { ko: "어린이용과 프리미엄이 같은 인상으로 보였습니다.", ja: "子ども向けとプレミアムが同じ印象に見えました。" },
    response: { ko: "색, 질감, 캐릭터, 정보량을 타깃별로 분리했습니다.", ja: "色、質感、キャラクター、情報量をターゲット別に分けました。" },
    result: { ko: "키즈·스탠다드·프리미엄의 명확한 라인업", ja: "キッズ・スタンダード・プレミアムの明確なライン" },
    visual: "package",
  },
];

const problems = [
  {
    no: "01",
    title: { ko: "영상이 무거워졌다", ja: "動画が重くなった" },
    before: { ko: "멋진 영상 ≠ 좋은 웹 경험", ja: "魅力的な動画 ≠ 良いWeb体験" },
    after: { ko: "로딩과 기기 조건까지가 결과물", ja: "読み込みと端末条件までが成果物" },
  },
  {
    no: "02",
    title: { ko: "호버가 불안정했다", ja: "ホバーが不安定だった" },
    before: { ko: "기능 구현 ≠ 안정적인 사용", ja: "機能実装 ≠ 安定した利用" },
    after: { ko: "모르는 상태를 견디며 원인을 분리", ja: "分からない状態に耐え、原因を切り分ける" },
  },
  {
    no: "03",
    title: { ko: "두 패키지가 같아 보였다", ja: "二つの箱が同じに見えた" },
    before: { ko: "내 취향 ≠ 고객의 기준", ja: "自分の好み ≠ 顧客の基準" },
    after: { ko: "누가 보는가에서 디자인을 시작", ja: "誰が見るかからデザインを始める" },
  },
];

function CaseVisual({ visual, lang, hint, title }: { visual: (typeof cases)[number]["visual"]; lang: Lang; hint: string; title: string }) {
  if (visual === "film") {
    return (
      <div className="film-visual" aria-label={title}>
        <video
          src="/assets/pokeden-ad-web.mp4"
          poster="/assets/hero-product.jpg"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          aria-label={lang === "ko" ? "포케덴 제품 광고 영상" : "ポケデン製品広告動画"}
        >
          {lang === "ko" ? "포케덴 광고 영상" : "ポケデン広告動画"}
        </video>
        <div className="film-frame"><span>REC</span><b>POKEDEN / SCENE 05</b><i>00:24:12</i></div>
      </div>
    );
  }

  if (visual === "web") {
    return (
      <div className="browser-visual" aria-label={title}>
        <div className="browser-bar"><i /><i /><i /><span>usmedical.jp / pokeden</span></div>
        <div className="browser-body">
          <div className="browser-copy"><small>ORAL CARE, REFRAMED.</small><strong>水のいらない<br />新感覚ケア</strong><span className="browser-button">Discover product →</span></div>
          <img src="/assets/hero-product.jpg" alt="포케덴 웹 히어로 시안" />
          <div className="loading-chip"><b>92</b><span>PERFORMANCE<br />MOBILE READY</span></div>
        </div>
      </div>
    );
  }

  if (visual === "hover") {
    return (
      <div className="hover-capture" aria-label={title}>
        <img className="hover-capture-bg" src="/assets/hover-site.jpg" alt="" aria-hidden="true" />
        <img
          className="hover-capture-main"
          src="/assets/hover-site.jpg"
          alt={lang === "ko" ? "포케덴 호버 재생 웹사이트 화면" : "ポケデンのホバー再生ウェブサイト画面"}
        />
        <div className="hover-capture-note"><i />{hint}<b>HOVER EXPERIENCE / 08 SCENES</b></div>
      </div>
    );
  }

  if (visual === "admin") {
    const rows = lang === "ko" ? ["미디어 라이브러리", "다국어 콘텐츠", "공지사항", "문의 관리"] : ["メディアライブラリ", "多言語コンテンツ", "お知らせ", "問い合わせ管理"];
    return (
      <div className="admin-visual" aria-label={title}>
        <div className="admin-side"><b>P.</b>{[0, 1, 2, 3].map((i) => <i key={i} className={i === 0 ? "active" : ""} />)}</div>
        <div className="admin-main">
          <div className="admin-heading"><span>{lang === "ko" ? "운영 개요" : "運用概要"}</span><b>● LIVE</b></div>
          <div className="admin-stats"><span><b>08</b>{lang === "ko" ? "게시 콘텐츠" : "公開コンテンツ"}</span><span><b>03</b>{lang === "ko" ? "운영 언어" : "運用言語"}</span><span><b>12</b>{lang === "ko" ? "새 문의" : "新着問い合わせ"}</span></div>
          <div className="admin-list">{rows.map((row, index) => <div key={row}><span>0{index + 1}</span><b>{row}</b><i>{index === 0 ? "UPDATED" : "READY"}</i></div>)}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="package-visual" aria-label={title}>
      <div><img src="/assets/kids-package.jpg" alt="어린이용 포케덴 패키지" /><span>KIDS / FAMILY</span></div>
      <div><img src="/assets/premium.jpg" alt="프리미엄 포케덴 패키지" /><span>PREMIUM / GIFT</span></div>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("ko");
  const [activeCase, setActiveCase] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const t = copy[lang];
  const currentCase = cases[activeCase];
  const navItems = useMemo(() => [
    ["#work", t.navWork],
    ["#system", t.navSystem],
    ["#outcome", t.navOutcome],
    ["#reflection", t.navReflection],
  ], [t]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(available > 0 ? window.scrollY / available : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top" data-lang={lang}>
      <a className="skip-link" href="#content">{t.skip}</a>
      <div className="progress-rail" aria-hidden="true"><span style={{ transform: `scaleY(${scrollProgress})` }} /></div>

      <header className="site-header">
        <a className="identity" href="#top" aria-label="Lim Bohyun portfolio home">
          <span>LB.</span>
          <small>{t.role}</small>
        </a>
        <nav aria-label={lang === "ko" ? "주요 메뉴" : "メインメニュー"}>
          {navItems.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="lang-switch" aria-label={lang === "ko" ? "언어 선택" : "言語選択"}>
          <button className={lang === "ko" ? "active" : ""} onClick={() => setLang("ko")} aria-pressed={lang === "ko"}>KR</button>
          <span>/</span>
          <button className={lang === "ja" ? "active" : ""} onClick={() => setLang("ja")} aria-pressed={lang === "ja"}>JP</button>
        </div>
      </header>

      <section className="hero" id="content">
        <div className="hero-grid" />
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span />{t.heroKicker}</p>
          <h1><span>{t.heroLine1}</span><span>{t.heroLine2}</span><em>{t.heroLine3}</em></h1>
          <p className="hero-body">{t.heroBody}</p>
          <a className="primary-link" href="#work"><span>{t.explore}</span><i>↘</i></a>
        </div>
        <div className="hero-media" data-reveal>
          <div className="hero-media-tag">POKEDEN<br /><b>ORAL CARE</b></div>
          <img src="/assets/hero-product.jpg" alt="포케덴 양치 타블렛 제품" />
          <div className="hero-scan" />
          <div className="hero-coordinates"><span>35.6762° N</span><span>139.6503° E</span></div>
          <div className="floating-orbit"><span>AI FILM</span><span>WEB</span><span>OPS</span><span>PACK</span></div>
        </div>
        <p className="hero-caption">{t.heroNote}</p>
        <div className="scroll-mark"><span>{t.scroll}</span><i /></div>
      </section>

      <section className="stat-strip" aria-label={lang === "ko" ? "프로젝트 수치" : "プロジェクト数値"}>
        <div><b>02</b><span>{t.month}</span></div>
        <div><b>08</b><span>{t.works}</span></div>
        <div><b>05</b><span>{t.scenes}</span></div>
        <div><b>03</b><span>{t.languages}</span></div>
      </section>

      <section className="thesis section-pad">
        <div className="section-index">00</div>
        <div className="thesis-content" data-reveal>
          <p className="section-label">{t.thesisLabel}</p>
          <h2>{t.thesisTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
          <p>{t.thesisBody}</p>
        </div>
      </section>

      <section className="system section-pad" id="system">
        <div className="section-head" data-reveal>
          <div><p className="section-label light">{t.systemLabel}</p><h2>{t.systemTitle}</h2></div>
          <p>{t.systemBody}</p>
        </div>
        <div className="system-line" data-reveal>
          {[
            ["01", t.make, t.makeTitle, t.makeBody],
            ["02", t.move, t.moveTitle, t.moveBody],
            ["03", t.manage, t.manageTitle, t.manageBody],
          ].map(([no, word, title, body], index) => (
            <article key={no}>
              <div className="system-node"><span>{no}</span><i>{index === 0 ? "✦" : index === 1 ? "↗" : "◎"}</i></div>
              <p>{word}</p><h3>{title}</h3><span>{body}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="case-lab section-pad" id="work">
        <div className="section-head dark" data-reveal>
          <div><p className="section-label">{t.labLabel}</p><h2>{t.labTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2></div>
          <p>{t.labIntro}</p>
        </div>
        <div className="case-workspace" data-reveal>
          <div className="case-tabs" role="tablist" aria-label={lang === "ko" ? "업무 사례" : "業務事例"}>
            {cases.map((item, index) => (
              <button key={item.no} role="tab" aria-selected={activeCase === index} className={activeCase === index ? "active" : ""} onClick={() => setActiveCase(index)}>
                <span>{item.no}</span><b>{item.label[lang]}</b><i>↗</i>
              </button>
            ))}
          </div>
          <div className="case-panel" role="tabpanel" key={`${activeCase}-${lang}`}>
            <div className="case-visual-wrap">
              <div className="visual-label"><span><i />{t.live}</span><b>{currentCase.no} / 05</b></div>
              <CaseVisual visual={currentCase.visual} lang={lang} hint={t.hoverHint} title={currentCase.title[lang]} />
            </div>
            <div className="case-story">
              <p>{currentCase.label[lang]}</p>
              <h3>{currentCase.title[lang]}</h3>
              <dl>
                <div><dt>{t.challenge}</dt><dd>{currentCase.challenge[lang]}</dd></div>
                <div><dt>{t.response}</dt><dd>{currentCase.response[lang]}</dd></div>
                <div><dt>{t.result}</dt><dd>{currentCase.result[lang]}</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="package-section section-pad">
        <div className="package-intro" data-reveal>
          <p className="section-label">{t.packageLabel}</p>
          <h2>{t.packageTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
          <p>{t.packageBody}</p>
        </div>
        <div className="package-gallery">
          <article className="kids-card" data-reveal>
            <div className="image-wrap"><img src="/assets/kids-package.jpg" alt="어린이용 포케덴 패키지" /><img className="mascot" src="/assets/mascot.png" alt="포케덴군 캐릭터" /></div>
            <div><p>{t.kids}</p><span>{t.kidsDesc}</span></div>
          </article>
          <article className="premium-card" data-reveal>
            <div className="image-wrap"><img src="/assets/premium.jpg" alt="프리미엄 포케덴 패키지" /></div>
            <div><p>{t.premium}</p><span>{t.premiumDesc}</span></div>
          </article>
          <article className="dieline-card" data-reveal>
            <img src="/assets/dieline.jpg" alt="포케덴 패키지 인쇄 전개도" />
            <div><p>{t.printReady}</p><h3>{t.printTitle}</h3><span>{t.printBody}</span></div>
          </article>
        </div>
      </section>

      <section className="outcome section-pad" id="outcome">
        <div className="outcome-intro" data-reveal>
          <p className="section-label light">{t.outcomeLabel}</p>
          <h2>{t.outcomeTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
          <p>{t.outcomeBody}</p>
        </div>
        <div className="outcome-numbers" data-reveal>
          <div><span>01</span><b>08</b><p>{t.deliverables}</p></div>
          <div><span>02</span><b>03</b><p>{t.languages}</p></div>
          <div><span>03</span><b>01</b><p>{t.ops}</p></div>
          <div><span>04</span><b>WEEKLY</b><p>{t.feedback}</p></div>
          <div><span>05</span><b>02</b><p>{t.targets}</p></div>
        </div>
        <div className="problem-head" data-reveal><p>{t.problemLabel}</p><h3>{t.problemTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h3></div>
        <div className="problem-list">
          {problems.map((problem) => (
            <article key={problem.no} data-reveal>
              <span>{problem.no}</span><h4>{problem.title[lang]}</h4>
              <p className="before">{problem.before[lang]}</p><i>→</i><p>{problem.after[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reflection section-pad" id="reflection">
        <div className="reflection-grid">
          <div className="reflection-copy" data-reveal>
            <p className="section-label">{t.reflectionLabel}</p>
            <h2>{t.reflectionTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
            <blockquote>{t.reflectionQuote.split("\n").map((line) => <span key={line}>{line}</span>)}</blockquote>
            <p>{t.reflectionBody}</p>
          </div>
          <div className="reflection-photos" data-reveal>
            <figure className="team-photo"><img src="/assets/team.jpg" alt="US Medical 대표와 실습팀 기념 사진" /><figcaption>US MEDICAL INC. / TOKYO / 2026</figcaption></figure>
            <figure className="work-photo"><img src="/assets/working.jpg" alt="US Medical 오피스에서 작업 중인 임보현" /><figcaption>FIELD NOTE 02 / WORK IN PROGRESS</figcaption></figure>
          </div>
        </div>
        <div className="learning-grid">
          {[
            ["01", t.language, t.languageBody],
            ["02", t.feedbackTitle, t.feedbackBody],
            ["03", t.ownership, t.ownershipBody],
          ].map(([no, title, body]) => <article key={no} data-reveal><span>{no}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <footer className="closing">
        <div className="closing-orbit" aria-hidden="true"><span>MAKE</span><span>MOVE</span><span>MANAGE</span></div>
        <div data-reveal>
          <p>{t.closingSmall}</p>
          <h2>{t.closingTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
          <p className="closing-body">{t.closingBody}</p>
          <a href="#top">{t.top}<i>↑</i></a>
        </div>
        <small>{t.source}</small>
      </footer>
    </main>
  );
}
