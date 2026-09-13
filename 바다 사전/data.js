// ==========================================
// 한자 낱자 데이터베이스 (3~4천 개 확장 영역)
// ==========================================
const HANJA_DICT = {
  "父": { file: "emojis/父.svg", desc: "아버지 / 성인 남성" },
  "母": { file: "emojis/母.svg", desc: "어머니 / 성인 여성" },
  "山": { file: "emojis/山.svg", desc: "우뚝 솟은 산" },
  "水": { file: "emojis/水.svg", desc: "흐르는 물" },
  "日": { file: "emojis/日.svg", desc: "이글거리는 해 / 태양" },
  "月": { file: "emojis/月.svg", desc: "밤하늘의 초승달" },
  "一": { file: "emojis/一.svg", desc: "숫자 1 / 하나" },
  "石": { file: "emojis/石.svg", desc: "단단한 바위 / 돌" },
  "二": { file: "emojis/二.svg", desc: "숫자 2 / 둘" },
  "鳥": { file: "emojis/鳥.svg", desc: "깃털 달린 새" },
  "呼": { file: "emojis/呼.svg", desc: "숨을 밖으로 내쉬는 중" },
  "吸": { file: "emojis/吸.svg", desc: "공기를 들이마시는 중" },
  "飲": { file: "emojis/飲.svg", desc: "시원한 물을 마시는 모습" },
  "木": { file: "emojis/木.svg", desc: "푸른 나무" },
  "花": { file: "emojis/花.svg", desc: "활짝 핀 꽃" },
  "車": { file: "emojis/車.svg", desc: "바퀴 달린 수레 / 자동차" },
  "咽": { file: "emojis/咽.svg", desc: "음식물을 삼키는 곳 / 목구멍" },
  "喉": { file: "emojis/喉.svg", desc: "호흡을 하는 곳 / 목구멍" },
  "渴": { file: "emojis/渴.svg", desc: "물이 부족해 목구멍이 타고 애가 탈 때" },
  "症": { file: "emojis/症.svg", desc: "질병을 앓을 때 나타나는 상태나 징후" },
  "枯": { file: "emojis/枯.svg", desc: "초목이나 수분이 바싹 말라 생기를 잃었을 때" }
  // 앞으로 여기에 3~4천 개를 계속 이어붙이시면 됩니다.
};

// ==========================================
// 한자 단어 카드 데이터베이스 (1만 개 확장 영역)
// ==========================================
const WORD_DATABASE = [
{ hanja: "渴症", desc: "갈증 : 목이 말라 물을 마시고 싶어 하는 증세", file: "words/갈증.png" },
{ hanja: "呼吸", desc: "호흡 : 숨을 들이쉬고 내쉬는 작용", file: "words/호흡.png" },
{ hanja: "枯木", desc: "고목 : 바짝 말라 잎이 다 떨어진 죽은 나무.", file: "words/고목.png" },
{ hanja: "咽喉", desc: "인후 : 음식물을 삼킬 때 지나가고, 호흡할 때 공기가 지나가는 핵심 통로.", file: "words/인후.png" }
  // 앞으로 여기에 1만 개를 계속 추가하시면 됩니다.
];