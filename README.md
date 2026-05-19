# MOB Prompting Assignment — Self-Feedback Tool

학생들이 자신의 프롬프팅 과제를 제출 전에 스스로 점검할 수 있는 웹 툴입니다.
학생이 채팅 로그를 붙여넣으면 AI가 루브릭 기반 예상 점수와 피드백을 자동으로 생성합니다.

---

## 📁 파일 구조

```
mob-feedback/
├── index.html          ← 학생용 웹페이지 (수정 불필요)
├── api/
│   ├── prompt.js       ← 루브릭 / 피드백 지침 (수정 시 이 파일만)
│   └── feedback.js     ← API 호출 로직 (수정 불필요)
├── vercel.json         ← Vercel 설정 (수정 불필요)
└── README.md           ← 이 파일
```

> **핵심 원칙:** `api/prompt.js` 파일만 수정하면 됩니다. 나머지 파일은 건드리지 않아도 됩니다.

---

## 🔧 자주 할 작업

### 루브릭 또는 피드백 기준 수정하기

1. 이 GitHub 페이지에서 `api` 폴더 클릭
2. `prompt.js` 파일 클릭
3. 우상단 연필(✏️) 아이콘 클릭
4. `SYSTEM_PROMPT = \`` 와 `` \`` `` 사이의 텍스트를 원하는 대로 수정
5. 페이지 하단 **Commit changes** 클릭 → **Commit changes** 버튼 클릭
6. 약 1~2분 후 자동으로 반영됨

---

### API 키 교체하기 (예: 계정 변경 시)

1. [vercel.com](https://vercel.com) 접속 → 이 프로젝트 클릭
2. 상단 **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Environment Variables** 클릭
4. `ANTHROPIC_API_KEY` 항목 오른쪽 **Edit** 클릭
5. 새 API 키 입력 → **Save**
6. 상단 **Deployments** 탭 → 최신 항목 오른쪽 `...` → **Redeploy**

> Anthropic API 키는 [platform.anthropic.com](https://platform.anthropic.com) → API Keys 메뉴에서 발급/확인할 수 있습니다.

---

### 웹페이지 접속 URL 확인하기

1. [vercel.com](https://vercel.com) 접속 → 이 프로젝트 클릭
2. 상단 **Deployments** 탭
3. 가장 위 항목(최신 배포) 클릭 → 우상단에 URL 표시됨

또는 프로젝트 메인 화면 우상단 **Visit** 버튼을 클릭하면 바로 접속됩니다.

---

### 배포가 잘 됐는지 확인하기

1. [vercel.com](https://vercel.com) → 프로젝트 → **Deployments** 탭
2. 가장 위 항목의 상태 확인:
   - 🟢 **Ready** — 정상 배포됨
   - 🟡 **Building** — 배포 중 (1~2분 소요)
   - 🔴 **Error** — 오류 발생 (클릭하면 원인 확인 가능)

GitHub에 파일을 수정하면 보통 30초~1분 안에 자동으로 재배포가 시작됩니다.

---

## 🔄 계정 이전 방법

### GitHub 레포 이전

1. 이 GitHub 페이지 상단 **Settings** 탭 클릭
2. 맨 아래 **Danger Zone** 섹션까지 스크롤
3. **Transfer ownership** 클릭
4. 새 소유자의 GitHub 계정명 입력 → 확인

### Vercel 프로젝트 이전

1. [vercel.com](https://vercel.com) → 프로젝트 → **Settings**
2. 맨 아래 **Transfer Project** 클릭
3. 새 소유자의 Vercel 계정 이메일 입력 → 확인

> 이전 후에는 새 계정에서 Vercel 환경변수(API 키)를 다시 설정해야 합니다.

---

## ❗ 문제 발생 시 체크리스트

| 증상 | 확인할 것 |
|------|----------|
| 페이지가 열리지 않음 | Vercel Deployments 탭에서 🟢 Ready 상태인지 확인 |
| 피드백이 나오지 않음 | Vercel → Settings → Environment Variables에 `ANTHROPIC_API_KEY`가 정확히 입력됐는지 확인 |
| `prompt.js` 수정 후 반영이 안 됨 | Deployments 탭에서 자동 재배포 완료(🟢) 됐는지 확인 (최대 2분 소요) |
| API 오류 메시지가 뜸 | Anthropic API 키가 유효한지 [platform.anthropic.com](https://platform.anthropic.com)에서 확인 |

---

## 💰 비용 안내

- **웹 호스팅 (Vercel):** 무료
- **AI API 사용 (Anthropic):** 학생 사용량에 따라 과금
  - 사용 모델: Claude Sonnet 4.6
  - 예상 비용: 학생 150명 기준 학기당 약 $15~20 수준
  - 사용량 확인: [platform.anthropic.com](https://platform.anthropic.com) → Usage 메뉴

---

## 📞 기술 지원

이 툴을 처음 구축한 담당자에게 문의하세요.
GitHub, Vercel, Anthropic 관련 추가 설정이 필요한 경우 각 플랫폼의 고객지원을 이용할 수 있습니다.
- Vercel 고객지원: [vercel.com/help](https://vercel.com/help)
- Anthropic 고객지원: [support.anthropic.com](https://support.anthropic.com)
