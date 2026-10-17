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
├── index.html          # Trang chủ - Trình phát nhạc chính (Tông Xanh Cổ Điển, lọc theo 08 Album hoặc cả 40 bài)
├── albums.html         # Trang kệ đĩa 08 CD-ROM Album (Tông Nâu Hổ Phách, lưới 4 cột & bảng mở từng đĩa)
├── gallery.html        # Trang phòng tối xem 08 ảnh Liminal (Tông Xanh Đêm Darkroom, khung ngắm tương tác)
├── about.html          # Trang bảng điều khiển hệ thống & Sổ lưu bút (Tông Tím Xám Control Panel)
├── info-frame.html     # Trang con hiển thị nhật ký hệ thống (ARCHIVE_LOG.TXT) nhúng trong iframe
├── manual-frame.html   # Trang con hiển thị hướng dẫn sử dụng (USER_MANUAL.TXT) nhúng trong iframe
├── css/
│   ├── style.css       # Giao diện cửa sổ cổ điển, khung 1400px, bảng màu riêng cho 4 trang, menu đa cấp, footer
│   ├── crt.css         # Hiệu ứng màn hình CRT scanline, lớp hạt nhiễu và bộ lọc màu ảnh bìa
│   └── responsive.css  # Tùy chỉnh bố cục cho Desktop, Tablet và Mobile
├── js/
│   └── player.js       # Logic điều khiển HTML5 Audio, 40 bài hát và bộ lọc Playlist riêng từng Album
├── assets/
│   ├── covers/         # 08 ảnh bìa không gian Liminal (hallway, station, pool, mall, office, parking, waiting, stairwell)
│   ├── music/          # 40 file nhạc MP3 ambient riêng biệt (track01.mp3 - track40.mp3)
│   └── textures/       # Ảnh nền hạt nhiễu (noise.png)
└── docs/
    ├── haku-player-plan.md
    └── haku-player-style.md
```

---

## 3. Các trang và chức năng chính

1. **Khung giao diện rộng `1400px`, tỷ lệ hiển thị lớn & Chân trang (`.site-footer`)**:
   - Container chính (`max-width: 1400px`) cùng cỡ chữ (`15px–30px`), nút bấm, ảnh bìa (`300x300px`) và bảng danh sách phát dễ quan sát.
   - Chân trang chi tiết 3 cột ở cuối mọi trang hiển thị thông tin kho lưu trữ, danh mục điều hướng nhanh và thông tin đồ án.
2. **Thiết kế màu sắc & bố cục riêng biệt cho 4 trang**:
   - `index.html`: Tông **Xám Xanh Cổ Điển** (`#2f4868`) — bố cục Sidebar + Now Playing + Playlist.
   - `albums.html`: Tông **Nâu Hổ Phách / Vàng Ấm** (`#6b4226`) — bố cục lưới 4 cột trưng bày 08 đĩa CD-ROM.
   - `gallery.html`: Tông **Xanh Đêm Phòng Tối** (`#162a3a`) — bố cục khung ngắm máy ảnh Sony Mavica lớn ở trên và dải 08 ảnh nhỏ bên dưới.
   - `about.html`: Tông **Tím Xám Hệ Thống** (`#4a3b5c`) — bố cục hộp thoại Control Panel 3 tầng và biểu mẫu Guestbook.
3. **Menu đa cấp 3 tầng (`.menubar`) & Khung nhúng `<iframe>`**:
   - Điều hướng trực tiếp giữa 4 trang chính kèm menu con cấp 2 (`.submenu`) và cấp 3 (`.submenu-level2`) mở bằng CSS `:hover`.
   - Khung `<iframe>` tại `index.html` và `about.html` hiển thị nội dung từ `info-frame.html` và `manual-frame.html`.
4. **40 Bài hát thuộc 08 Album & Playlist riêng cho từng Album (`js/player.js`)**:
   - Tổng cộng **40 bản nhạc ambient không trùng nhau**, chia đều cho **08 Album (05 bài mỗi Album)**.
   - Hỗ trợ lọc và phát danh sách bài hát riêng biệt của từng Album khi bấm từ trang `albums.html`, `gallery.html` (`index.html?album=...`) hoặc chọn trực tiếp tại thanh Sidebar bên trái trên trang chủ.

---

## 4. Cách chạy dự án

Mở trực tiếp file `index.html` trên trình duyệt web (Chrome, Firefox, Edge) hoặc chạy qua tiện ích Live Server trong VS Code.
