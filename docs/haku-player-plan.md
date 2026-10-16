# Haku Player — Project Plan

## 1. Mục tiêu dự án

Xây dựng một website nghe nhạc đơn giản cho môn Thiết kế Web, sử dụng:

- HTML5
- CSS3
- Bootstrap 5
- Vanilla JavaScript
- HTML5 Audio API

Không sử dụng:

- React
- Vue
- Angular
- Tailwind CSS
- TypeScript
- Backend
- Database

Mục tiêu chính là tạo một website nghe nhạc có giao diện khác biệt, dễ trình bày, dễ giải thích và phù hợp với kiến thức HTML/CSS/Bootstrap cơ bản.

---

## 2. Concept

Tên tạm thời:

**Haku Player 2001**

Phong cách:

- Nostalgia 1998–2008
- Classic desktop application
- Early Internet
- MP3 player / CD player
- Liminal space
- CRT / analog atmosphere

Cảm giác tổng thể:

- Hoài niệm
- Yên tĩnh
- Hơi cô độc
- Quen thuộc nhưng mơ hồ
- Dreamlike
- Không mang phong cách horror

---

## 3. Phạm vi chức năng

### Chức năng bắt buộc

- Hiển thị danh sách bài hát
- Phát nhạc
- Play / Pause
- Previous / Next
- Chọn bài hát từ playlist
- Progress bar
- Seek bài hát
- Hiển thị thời gian hiện tại
- Hiển thị tổng thời lượng
- Điều chỉnh âm lượng
- Tự động chuyển bài khi bài hiện tại kết thúc
- Responsive trên desktop, tablet và mobile

### Chức năng nên có

- Hiển thị album cover
- Hiển thị tên bài hát
- Hiển thị nghệ sĩ
- Hiển thị album
- Track number
- Trạng thái bài đang phát
- Sidebar Library
- Recently Played
- Favorites dạng giao diện

### Chức năng nâng cao nếu còn thời gian

- Search bài hát
- Shuffle
- Repeat
- Favorite thực sự bằng JavaScript
- Playlist custom
- Dark / alternate theme
- Lyrics

---

## 4. Cấu trúc giao diện

```text
app-window
├── titlebar
├── menubar
├── main-layout
│   ├── sidebar
│   └── content
│       ├── now-playing
│       └── playlist
└── player-controls
```

Ví dụ layout desktop:

```text
┌─────────────────────────────────────────────────────┐
│ HAKU PLAYER 2001                         _  □  X    │
├─────────────────────────────────────────────────────┤
│ FILE   VIEW   PLAYER   HELP                         │
├─────────────┬───────────────────────────────────────┤
│             │                                       │
│ LIBRARY     │         NOW PLAYING                   │
│             │                                       │
│ > All Music │         [ Album Cover ]               │
│   Favorites │                                       │
│   Memories  │         Empty Hallway                 │
│   Night     │         Unknown Artist                │
│   Rain      │                                       │
│             │         03:12 / 04:35                 │
│             │                                       │
├─────────────┴───────────────────────────────────────┤
│ PLAYLIST                                            │
│ 01 Empty Hallway          Unknown          03:40    │
│ 02 Last Train             Unknown          04:12    │
│ 03 Summer 2007            Unknown          03:20    │
├─────────────────────────────────────────────────────┤
│ <<     |>     ||     >>      ─────●────       VOL   │
└─────────────────────────────────────────────────────┘
```

---

## 5. Các khu vực chính

### Titlebar

Hiển thị:

- HAKU PLAYER 2001
- Minimize giả
- Maximize giả
- Close giả

Các nút này chỉ mang tính trang trí nếu chưa cần xử lý JavaScript.

### Menubar

```text
FILE   VIEW   PLAYER   HELP
```

Có thể dùng để tạo cảm giác phần mềm desktop cổ điển.

### Sidebar

Các nhóm:

```text
LIBRARY

> All Music
  Recently Played
  Favorites

MEMORIES

  Summer 2007
  Empty Mall
  Night Drive
  Rainy Afternoon
```

### Now Playing

Hiển thị:

- Album cover
- Song title
- Artist
- Album
- Track number
- Playback time
- Metadata giả kiểu MP3

Ví dụ:

```text
NOW PLAYING

Empty Hallway
Unknown Artist

ALBUM
Memories That Never Happened

TRACK
04 / 12

128 KBPS
44.1 KHZ
STEREO
```

### Playlist

Các cột:

- Track number
- Title
- Artist
- Duration

Playlist gợi ý:

1. Empty Hallway
2. Last Train Home
3. Summer 2007
4. Fluorescent Dreams
5. Rain at 2AM
6. Closed Mall
7. Memory Lane

### Player Controls

Bao gồm:

- Previous
- Play / Pause
- Next
- Progress bar
- Current time
- Duration
- Volume

---

## 6. Cấu trúc project

```text
haku-player/
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── crt.css
│   └── responsive.css
│
├── js/
│   └── player.js
│
├── assets/
│   ├── covers/
│   │   ├── hallway.jpg
│   │   ├── mall.jpg
│   │   ├── pool.jpg
│   │   └── station.jpg
│   │
│   ├── music/
│   │   ├── track01.mp3
│   │   ├── track02.mp3
│   │   └── track03.mp3
│   │
│   └── textures/
│       └── noise.png
│
└── README.md
```

---

## 7. Dữ liệu bài hát

Dữ liệu sẽ lưu trong JavaScript.

Ví dụ:

```javascript
const songs = [
    {
        title: "Empty Hallway",
        artist: "Unknown Artist",
        album: "Memories That Never Happened",
        src: "assets/music/track01.mp3",
        cover: "assets/covers/hallway.jpg"
    },
    {
        title: "Last Train Home",
        artist: "Unknown Artist",
        album: "After Midnight",
        src: "assets/music/track02.mp3",
        cover: "assets/covers/station.jpg"
    }
];
```

Không cần database.

---

## 8. Các phase triển khai

### Phase 1 — Setup

Tạo:

- `index.html`
- `css/style.css`
- `css/crt.css`
- `css/responsive.css`
- `js/player.js`

Import Bootstrap 5.

Mục tiêu:

- Project chạy được
- Không lỗi path
- Có cấu trúc thư mục rõ ràng

---

### Phase 2 — HTML Structure

Tạo các phần:

- App window
- Titlebar
- Menubar
- Sidebar
- Now Playing
- Playlist
- Player controls

Chưa cần JavaScript.

---

### Phase 3 — Bootstrap Layout

Dùng:

- Container
- Grid
- Flex
- Table
- Responsive utilities

Mục tiêu:

- Desktop layout rõ ràng
- Không bị vỡ giao diện

---

### Phase 4 — Retro Styling

Thêm:

- Classic borders
- Muted color palette
- Tahoma / Verdana
- Monospace metadata
- Small border radius
- Classic buttons

Không thêm CRT effect ở phase này.

---

### Phase 5 — Responsive

Desktop >= 992px:

- Sidebar + content

Tablet 768–991px:

- Giảm padding
- Giảm kích thước cover
- Giữ layout chính

Mobile < 768px:

```text
Titlebar

Now Playing

Album Cover

Song Info

Controls

Playlist
```

Ẩn hoặc collapse sidebar.

---

### Phase 6 — Audio Player

Thêm một thẻ:

```html
<audio id="audio"></audio>
```

JavaScript xử lý:

- load song
- play
- pause
- next
- previous

---

### Phase 7 — Player Controls

Thêm:

- progress update
- seek
- current time
- duration
- volume
- auto next

---

### Phase 8 — Playlist Interaction

Khi click một row:

- load bài tương ứng
- đổi album cover
- đổi metadata
- đánh dấu bài đang phát
- tự phát bài

---

### Phase 9 — Liminal Effects

Thêm nhẹ:

- CRT scanline
- Noise
- Filter album cover
- Slight flicker nếu cần

Không được ảnh hưởng khả năng đọc.

---

### Phase 10 — Polish

Kiểm tra:

- Responsive
- Đường dẫn file
- Audio
- Hover
- Active state
- Button state
- Typography
- Contrast
- Mobile layout

---

## 9. Thứ tự commit Git gợi ý

```text
chore: initialize haku player project

feat: create base desktop layout

feat: add library sidebar

feat: add now playing panel

feat: add playlist table

style: add retro desktop theme

style: add responsive layout

feat: add html5 audio player

feat: add play pause controls

feat: add previous next controls

feat: add progress and volume controls

feat: add playlist interaction

style: add subtle crt effects

style: polish responsive interface
```

---

## 10. Nguyên tắc triển khai

- Không code quá phức tạp.
- Không tạo abstraction không cần thiết.
- Ưu tiên HTML semantic.
- Bootstrap dùng chủ yếu cho layout và responsive.
- CSS custom dùng để tạo phong cách riêng.
- JavaScript giữ đơn giản và dễ giải thích.
- Không copy giao diện Spotify.
- Không làm UI quá hiện đại.
- Không để hiệu ứng làm giảm readability.
- Mỗi phase phải giữ website đang hoạt động trước khi sang phase tiếp theo.

---

## 11. Definition of Done

Project được xem là hoàn thành khi:

- Website chạy trực tiếp trong browser.
- Có tối thiểu 5 bài hát.
- Có thể chọn và phát bài.
- Play / Pause hoạt động.
- Previous / Next hoạt động.
- Progress bar hoạt động.
- Volume hoạt động.
- Metadata thay đổi theo bài hát.
- Responsive trên desktop và mobile.
- Giao diện thống nhất theo nostalgia / liminal theme.
- Code dễ đọc và có thể trình bày trước giảng viên.
