# Haku Player 2001

Website nghe nhạc đa trang phong cách **Nostalgic Liminal Desktop Music Player** (1998–2008) dành cho môn Thiết kế Web.

## 1. Công nghệ sử dụng

- **HTML5**: Semantic HTML (`header`, `nav`, `main`, `aside`, `section`, `table`, `footer`, `audio`, `iframe`, `form`).
- **CSS3**: CSS Variables, Flexbox, Menu đa cấp 3 tầng (`:hover`), hiệu ứng CRT scanline & hạt nhiễu nhẹ, Media Queries.
- **Bootstrap 5**: Grid system (`row`, `col-*`), Flex utilities, Table, Responsive utilities.
- **Vanilla JavaScript & HTML5 Audio API**: Điều khiển phát nhạc, danh sách phát, thanh tiến trình, âm lượng và xử lý biểu mẫu cơ bản.

---

## 2. Cấu trúc thư mục

```text
haku-player-website/
├── index.html          # Trang chủ - Trình phát nhạc chính (Player, Playlist, Iframe System Monitor)
├── albums.html         # Trang danh mục 4 đĩa CD-ROM Album & danh sách bài hát từng đĩa
├── gallery.html        # Trang thư viện ảnh không gian Liminal (Floppy Disk Photo Viewer)
├── about.html          # Trang giới thiệu cấu hình hệ thống, Iframe tài liệu & Form gửi yêu cầu bài hát
├── info-frame.html     # Trang con hiển thị nhật ký hệ thống (ARCHIVE_LOG.TXT) nhúng trong iframe
├── manual-frame.html   # Trang con hiển thị hướng dẫn sử dụng (USER_MANUAL.TXT) nhúng trong iframe
├── css/
│   ├── style.css       # Giao diện cửa sổ cổ điển, khung 1400px, tỷ lệ chữ lớn, menu đa cấp, nút bấm
│   ├── crt.css         # Hiệu ứng màn hình CRT scanline, lớp hạt nhiễu và bộ lọc màu ảnh bìa
│   └── responsive.css  # Tùy chỉnh bố cục cho Desktop, Tablet và Mobile
├── js/
│   └── player.js       # Logic điều khiển trình phát nhạc HTML5 Audio và bảng Playlist
├── assets/
│   ├── covers/         # Ảnh bìa và ảnh không gian Liminal (hallway, station, pool, mall)
│   ├── music/          # 7 file nhạc MP3 ambient (track01.mp3 - track07.mp3)
│   └── textures/       # Ảnh nền hạt nhiễu (noise.png)
└── docs/
    ├── haku-player-plan.md
    └── haku-player-style.md
```

---

## 3. Các trang và chức năng chính

1. **Khung giao diện rộng `1400px` & tỷ lệ hiển thị lớn**:
   - Container chính (`max-width: 1400px`) cùng cỡ chữ (`15px–30px`), nút bấm, ảnh bìa (`300x300px`) và bảng danh sách phát được thiết kế rõ ràng, dễ quan sát trên màn hình máy tính hiện đại.
2. **Menu đa cấp 3 tầng (`.menubar`)**:
   - Điều hướng trực tiếp giữa 4 trang chính: `PLAYER (TRANG CHỦ)`, `ALBUMS`, `LIMINAL GALLERY`, `ABOUT & CONTACT`.
   - Tích hợp menu con cấp 2 (`.submenu`) và cấp 3 (`.submenu-level2`) mở bằng CSS `:hover`.
3. **Khung nhúng `<iframe>` tương tác với Menu**:
   - Tại `index.html` và `about.html`, khung `<iframe>` hiển thị nội dung từ `info-frame.html` và `manual-frame.html` thông qua thuộc tính `target="info-frame"` / `target="about-frame"`.
4. **Trình phát nhạc HTML5 Audio (`index.html` & `js/player.js`)**:
   - Hiển thị và phát 7 bài hát kèm ảnh bìa, tên bài, nghệ sĩ, album, thứ tự bài (`01 / 07`) và thời lượng.
   - Đầy đủ chức năng `PLAY / PAUSE`, `|<<` (Previous), `>>|` (Next), tự động chuyển bài khi kết thúc, kéo thanh tiến trình để tua nhạc và chỉnh âm lượng (`VOL`).
5. **Các trang nội dung mở rộng**:
   - `albums.html`: Trưng bày 4 đĩa nhạc theo bố cục lưới Bootstrap.
   - `gallery.html`: Bộ sưu tập ảnh chụp không gian Liminal kèm thông số thời gian.
   - `about.html`: Bảng cấu hình phần cứng cổ điển và biểu mẫu (`<form>`) gửi yêu cầu bài hát.

---

## 4. Cách chạy dự án

Mở trực tiếp file `index.html` trên trình duyệt web (Chrome, Firefox, Edge) hoặc chạy qua tiện ích Live Server trong VS Code.
