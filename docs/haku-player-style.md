# Haku Player — Style Guide

## 1. Art Direction

Haku Player sử dụng phong cách:

**Nostalgic Liminal Desktop Music Player**

Nguồn cảm hứng:

- Windows 98
- Windows 2000
- Windows XP-era utility software
- Winamp-era MP3 player
- CD player
- Early Internet
- CRT monitors
- VHS / analog imperfections
- Liminal spaces

Không khí cần đạt:

- Hoài niệm
- Yên tĩnh
- Cô độc nhẹ
- Dreamlike
- Familiar but strange
- Calm

Không hướng tới horror.

---

## 2. Nguyên tắc visual

### Nên dùng

- Màu giảm saturation
- Border sắc nét
- Small radius hoặc zero radius
- Font hệ thống cổ điển
- Layout giống application desktop
- Ảnh liminal hơi low-resolution
- Noise rất nhẹ
- CRT scanline rất nhẹ
- Monospace cho metadata
- Interaction đơn giản

### Không nên dùng

- Glassmorphism
- Neon gradient
- Gradient tím xanh hiện đại
- Card bo tròn lớn
- Shadow lớn
- Floating cards
- Blur background mạnh
- Animation spring
- Bounce animation
- Modern SaaS dashboard look

---

## 3. Color Palette

```css
:root {
    --bg: #d7d4c8;
    --surface: #c6c5b9;
    --surface-dark: #a9aa9f;

    --text: #252923;
    --muted: #62675f;

    --green: #72866b;
    --blue: #71838c;
    --cream: #e7e0c9;

    --border-light: #eeeeea;
    --border-dark: #777b72;
}
```

### Background

```css
background: var(--bg);
```

### Panel

```css
background: var(--surface);
```

### Text chính

```css
color: var(--text);
```

### Text phụ

```css
color: var(--muted);
```

### Accent

Accent không nên quá sáng.

Có thể dùng:

```css
color: var(--green);
```

hoặc:

```css
color: var(--blue);
```

---

## 4. Typography

### Font chính

```css
font-family: "Tahoma", "Verdana", "Trebuchet MS", sans-serif;
```

Dùng cho:

- Navbar
- Sidebar
- Playlist
- Buttons
- Titles

### Font metadata

```css
font-family: "Courier New", monospace;
```

Dùng cho:

- Track info
- Playback status
- Time
- Bitrate
- Technical metadata

Ví dụ:

```text
TRACK 04
03:17 / 04:02
128 KBPS
44.1 KHZ
STEREO
```

---

## 5. Font Size

Gợi ý:

```css
--font-xs: 11px;
--font-sm: 12px;
--font-md: 14px;
--font-lg: 18px;
--font-xl: 24px;
```

Phong cách retro không nên dùng heading quá lớn.

---

## 6. Border Style

Classic desktop border:

```css
.retro-panel {
    border-top: 1px solid var(--border-light);
    border-left: 1px solid var(--border-light);
    border-right: 1px solid var(--border-dark);
    border-bottom: 1px solid var(--border-dark);
}
```

Button:

```css
.retro-button {
    background: var(--surface);
    border-top: 1px solid var(--border-light);
    border-left: 1px solid var(--border-light);
    border-right: 1px solid var(--border-dark);
    border-bottom: 1px solid var(--border-dark);
}
```

Pressed:

```css
.retro-button:active {
    border-top: 1px solid var(--border-dark);
    border-left: 1px solid var(--border-dark);
    border-right: 1px solid var(--border-light);
    border-bottom: 1px solid var(--border-light);

    transform: translate(1px, 1px);
}
```

---

## 7. Border Radius

Ưu tiên:

```css
border-radius: 0;
```

Hoặc tối đa:

```css
border-radius: 2px;
```

Không dùng:

```css
border-radius: 20px;
border-radius: 9999px;
```

trừ progress thumb nếu cần.

---

## 8. Titlebar

Ví dụ:

```text
HAKU PLAYER 2001                         _  □  X
```

Style:

```css
.titlebar {
    background: var(--blue);
    color: #ffffff;
    padding: 4px 6px;
    font-weight: bold;
    font-size: 12px;
}
```

Có thể thêm titlebar gradient rất nhẹ nếu muốn mô phỏng Windows cũ, nhưng không bắt buộc.

---

## 9. Menubar

Ví dụ:

```text
FILE   VIEW   PLAYER   HELP
```

Style:

```css
.menubar {
    background: var(--surface);
    padding: 4px 8px;
    font-size: 12px;
}
```

Không cần hover animation lớn.

Hover:

```css
.menu-item:hover {
    background: var(--blue);
    color: white;
}
```

---

## 10. Sidebar

Background:

```css
.sidebar {
    background: var(--surface-dark);
}
```

Item:

```css
.sidebar-item {
    padding: 5px 8px;
}
```

Hover:

```css
.sidebar-item:hover {
    background: var(--surface);
}
```

Active:

```css
.sidebar-item.active::before {
    content: "> ";
}
```

---

## 11. Now Playing Panel

Panel nên giống cửa sổ ứng dụng.

Cấu trúc:

```text
NOW PLAYING

[ Album Cover ]

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

Không dùng card hiện đại.

---

## 12. Album Cover

Desktop:

```css
.album-cover {
    width: 260px;
    height: 260px;
    object-fit: cover;
}
```

Tablet:

```css
.album-cover {
    width: 220px;
    height: 220px;
}
```

Mobile:

```css
.album-cover {
    width: min(80vw, 280px);
    height: auto;
    aspect-ratio: 1;
}
```

Filter gợi ý:

```css
.album-cover {
    filter:
        saturate(0.75)
        contrast(0.95)
        brightness(0.95);
}
```

Có thể thêm:

```css
image-rendering: auto;
```

Không cần làm ảnh quá nét.

---

## 13. Liminal Image Direction

Các loại ảnh phù hợp:

- Empty hallway
- Empty shopping mall
- Empty school corridor
- Indoor swimming pool
- Train station
- Empty waiting room
- Vending machine at night
- Rainy parking lot
- Fluorescent office
- Empty supermarket
- Quiet stairwell
- Old motel corridor

Tông ảnh:

- Low saturation
- Slight green cast
- Slight blue cast
- Warm fluorescent light
- Slight underexposure
- Low dynamic range

Không cần ảnh kinh dị.

---

## 14. Playlist

Nên dùng `<table>`.

Ví dụ:

```text
#    TITLE                    ARTIST          TIME

01   Empty Hallway            Unknown         03:42
02   Last Train Home          Unknown         04:01
03   Summer 2007              Unknown         03:18
04   Fluorescent Dreams       Unknown         05:02
```

Style:

```css
.playlist-row {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
```

Hover:

```css
.playlist-row:hover {
    background: #b9bbae;
}
```

Active:

```css
.playlist-row.active {
    background: var(--green);
    color: white;
}
```

Có thể dùng indicator:

```text
> 04 Fluorescent Dreams
```

---

## 15. Player Controls

Button label có thể dùng:

```text
|<<
<<
PLAY
PAUSE
>>
>>|
```

hoặc icon đơn giản.

Không cần icon library nếu không cần thiết.

Layout:

```text
<<   |>   ||   >>       ─────●─────      VOL
```

Buttons nên nhỏ, vuông, compact.

---

## 16. Progress Bar

Không dùng thanh quá dày.

```css
.progress-track {
    height: 6px;
    background: var(--surface-dark);
}
```

Progress fill:

```css
.progress-fill {
    height: 100%;
    background: var(--green);
}
```

Thumb:

```css
.progress-thumb {
    width: 10px;
    height: 14px;
}
```

---

## 17. Volume

Dạng đơn giản:

```text
VOL  ────●────
```

Có thể dùng:

```html
<input type="range">
```

Sau đó custom CSS nhẹ.

---

## 18. CRT Scanline

Dùng cực nhẹ.

```css
body::after {
    content: "";
    position: fixed;
    inset: 0;

    pointer-events: none;

    background:
        repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.025),
            rgba(0, 0, 0, 0.025) 1px,
            transparent 1px,
            transparent 3px
        );

    z-index: 9999;
}
```

Không tăng opacity quá cao.

---

## 19. Noise

Nếu dùng texture:

```css
.noise-layer {
    position: fixed;
    inset: 0;

    pointer-events: none;

    background-image: url("../assets/textures/noise.png");
    opacity: 0.025;
}
```

Noise chỉ nên xuất hiện nhẹ.

---

## 20. Animation

### Cho phép

```css
transition: background-color 120ms linear;
```

```css
transition: opacity 150ms linear;
```

```css
transform: translate(1px, 1px);
```

### Không nên

```css
transform: scale(1.1);
```

```css
animation: bounce;
```

```css
transition: all 0.5s ease-in-out;
```

---

## 21. Shadow

Hạn chế shadow.

Nếu cần:

```css
box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.18);
```

Không dùng:

```css
box-shadow: 0 20px 60px rgba(...);
```

---

## 22. Spacing

Phong cách desktop app dùng spacing nhỏ hơn web hiện đại.

Gợi ý:

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 12px;
--space-lg: 16px;
--space-xl: 24px;
```

---

## 23. Desktop Layout

Desktop >= 992px:

```text
Titlebar
Menubar

Sidebar | Now Playing
        | Playlist

Player Controls
```

Sidebar khoảng:

```css
width: 220px;
```

---

## 24. Tablet Layout

768px–991px:

- Sidebar nhỏ hơn
- Album cover nhỏ hơn
- Playlist vẫn giữ table
- Giảm padding
- Player controls có thể wrap nhẹ

---

## 25. Mobile Layout

< 768px:

Không cố giữ giao diện desktop đầy đủ.

Layout:

```text
Titlebar

Now Playing

Album Cover

Song Info

Player Controls

Playlist
```

Ẩn:

- Sidebar
- Một số metadata phụ
- Menubar nếu thiếu không gian

Giữ:

- Retro border
- Font
- Colors
- CRT effect nhẹ

---

## 26. Bootstrap Usage

Bootstrap dùng cho:

- Container
- Grid
- Flex
- Responsive breakpoints
- Utility classes
- Table structure

Custom CSS dùng cho:

- Retro visual
- Classic borders
- Player
- CRT
- Liminal atmosphere

Không để Bootstrap mặc định quyết định toàn bộ giao diện.

---

## 27. Naming Convention

Gợi ý class:

```text
app-window
titlebar
titlebar-controls
menubar
main-layout
sidebar
sidebar-section
sidebar-item
content-panel
now-playing
album-cover
track-info
track-meta
playlist
playlist-row
player-controls
transport-controls
progress-control
volume-control
retro-button
retro-panel
```

---

## 28. Accessibility

Dù giao diện retro, vẫn cần:

- Contrast đủ đọc
- Button có `aria-label`
- Album cover có `alt`
- Không dùng effect nhấp nháy mạnh
- Input range dùng được bằng keyboard
- Font không quá nhỏ trên mobile
- Player controls dễ click

---

## 29. Style Checklist

Trước khi hoàn thiện, kiểm tra:

- [ ] Không có gradient neon hiện đại
- [ ] Không có border radius lớn
- [ ] Không có shadow quá mạnh
- [ ] Font thống nhất
- [ ] Album cover đúng vibe liminal
- [ ] Playlist dễ đọc
- [ ] Active state rõ
- [ ] CRT scanline đủ nhẹ
- [ ] Mobile vẫn sử dụng được
- [ ] Button có cảm giác classic desktop
- [ ] UI không biến thành horror
- [ ] Toàn website giữ cùng một visual language

---

## 30. Style Summary

Haku Player nên tạo cảm giác giống một phần mềm nghe nhạc cũ được mở trên một chiếc máy tính từ đầu những năm 2000, trong một không gian vắng lặng và quen thuộc.

Giao diện phải ưu tiên:

**nostalgia + liminal + usability**

thay vì chỉ cố làm thật nhiều hiệu ứng retro.
