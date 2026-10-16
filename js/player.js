// Danh sách dữ liệu các bài hát trong trình phát nhạc
const songs = [
    {
        title: "Empty Hallway",
        artist: "Unknown Artist",
        album: "Memories That Never Happened",
        duration: "00:18",
        src: "assets/music/track01.mp3",
        cover: "assets/covers/hallway.jpg"
    },
    {
        title: "Last Train Home",
        artist: "Unknown Artist",
        album: "After Midnight",
        duration: "00:21",
        src: "assets/music/track02.mp3",
        cover: "assets/covers/station.jpg"
    },
    {
        title: "Summer 2007",
        artist: "Afternoon Echo",
        album: "Poolside Static",
        duration: "00:16",
        src: "assets/music/track03.mp3",
        cover: "assets/covers/pool.jpg"
    },
    {
        title: "Fluorescent Dreams",
        artist: "Quiet Corridor",
        album: "Memories That Never Happened",
        duration: "00:24",
        src: "assets/music/track04.mp3",
        cover: "assets/covers/hallway.jpg"
    },
    {
        title: "Rain at 2AM",
        artist: "Platform 4",
        album: "After Midnight",
        duration: "00:19",
        src: "assets/music/track05.mp3",
        cover: "assets/covers/station.jpg"
    },
    {
        title: "Closed Mall",
        artist: "Atrium Ghosts",
        album: "Sunday Closing Time",
        duration: "00:22",
        src: "assets/music/track06.mp3",
        cover: "assets/covers/mall.jpg"
    },
    {
        title: "Memory Lane",
        artist: "Afternoon Echo",
        album: "Poolside Static",
        duration: "00:20",
        src: "assets/music/track07.mp3",
        cover: "assets/covers/pool.jpg"
    }
];

// Lấy các phần tử HTML cần điều khiển
const audio = document.querySelector("#audio");
const coverImage = document.querySelector("#cover-image");
const songTitle = document.querySelector("#song-title");
const songArtist = document.querySelector("#song-artist");
const songAlbum = document.querySelector("#song-album");
const trackNumber = document.querySelector("#track-number");
const nowPlayingTime = document.querySelector("#now-playing-time");
const playerStatus = document.querySelector("#player-status");

const playlistBody = document.querySelector("#playlist-body");
const prevBtn = document.querySelector("#prev-btn");
const playBtn = document.querySelector("#play-btn");
const nextBtn = document.querySelector("#next-btn");

const progressBar = document.querySelector("#progress-bar");
const currentTimeEl = document.querySelector("#current-time");
const durationTimeEl = document.querySelector("#duration-time");
const volumeBar = document.querySelector("#volume-bar");
const sidebarItems = document.querySelectorAll(".sidebar-item");

// Lưu vị trí bài hát hiện tại và trạng thái phát nhạc
let currentIndex = 0;
let isPlaying = false;

// Đổi số giây thành định dạng phút:giây (MM:SS)
function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    const minsText = mins < 10 ? "0" + mins : String(mins);
    const secsText = secs < 10 ? "0" + secs : String(secs);

    return minsText + ":" + secsText;
}

// Thêm số 0 phía trước cho số thứ tự bài hát nhỏ hơn 10
function formatTrackNumber(num) {
    return num < 10 ? "0" + num : String(num);
}

// Tạo bảng danh sách bài hát trên giao diện
function renderPlaylist() {
    playlistBody.innerHTML = "";

    songs.forEach(function (song, index) {
        const row = document.createElement("tr");
        row.classList.add("playlist-row");

        const numCell = document.createElement("td");
        numCell.classList.add("col-num");
        numCell.textContent = formatTrackNumber(index + 1);

        const titleCell = document.createElement("td");
        titleCell.textContent = song.title;

        const artistCell = document.createElement("td");
        artistCell.classList.add("col-artist");
        artistCell.textContent = song.artist;

        const timeCell = document.createElement("td");
        timeCell.classList.add("text-end", "col-time");
        timeCell.textContent = song.duration;

        row.appendChild(numCell);
        row.appendChild(titleCell);
        row.appendChild(artistCell);
        row.appendChild(timeCell);

        // Khi nhấn vào một dòng trong bảng thì chọn và phát bài đó
        row.addEventListener("click", function () {
            currentIndex = index;
            loadSong(currentIndex);
            playSong();
        });

        playlistBody.appendChild(row);
    });
}

// Cập nhật dòng đang được chọn trong bảng danh sách phát
function updateActivePlaylistRow() {
    const rows = document.querySelectorAll(".playlist-row");

    rows.forEach(function (row, index) {
        const numCell = row.querySelector(".col-num");
        const numberText = formatTrackNumber(index + 1);

        if (index === currentIndex) {
            row.classList.add("active");
            numCell.textContent = "> " + numberText;
        } else {
            row.classList.remove("active");
            numCell.textContent = numberText;
        }
    });
}

// Tải thông tin và file nhạc của bài hát theo vị trí index
function loadSong(index) {
    const song = songs[index];

    audio.src = song.src;
    coverImage.src = song.cover;
    coverImage.alt = "Ảnh bìa " + song.title;

    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    songAlbum.textContent = song.album;

    trackNumber.textContent =
        formatTrackNumber(index + 1) + " / " + formatTrackNumber(songs.length);

    progressBar.value = 0;
    currentTimeEl.textContent = "00:00";
    durationTimeEl.textContent = song.duration;
    nowPlayingTime.textContent = "00:00 / " + song.duration;

    updateActivePlaylistRow();
}

// Phát bài hát hiện tại
function playSong() {
    audio.play();
    isPlaying = true;
    playBtn.textContent = "PAUSE";
    playerStatus.textContent = "PLAYING";
}

// Tạm dừng bài hát hiện tại
function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.textContent = "PLAY";
    playerStatus.textContent = "PAUSED";
}

// Chuyển sang bài hát trước đó
function prevSong() {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = songs.length - 1;
    }

    loadSong(currentIndex);
    playSong();
}

// Chuyển sang bài hát tiếp theo
function nextSong() {
    currentIndex = currentIndex + 1;
    if (currentIndex >= songs.length) {
        currentIndex = 0;
    }

    loadSong(currentIndex);
    playSong();
}

// Sự kiện nút Play / Pause
playBtn.addEventListener("click", function () {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Sự kiện nút Previous và Next
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Cập nhật tổng thời lượng khi file nhạc đã tải xong thông tin
audio.addEventListener("loadedmetadata", function () {
    const totalText = formatTime(audio.duration);
    durationTimeEl.textContent = totalText;
    nowPlayingTime.textContent = formatTime(audio.currentTime) + " / " + totalText;
});

// Cập nhật thanh tiến trình và thời gian khi nhạc đang phát
audio.addEventListener("timeupdate", function () {
    if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressBar.value = percent;

        const currentText = formatTime(audio.currentTime);
        const totalText = formatTime(audio.duration);

        currentTimeEl.textContent = currentText;
        durationTimeEl.textContent = totalText;
        nowPlayingTime.textContent = currentText + " / " + totalText;
    }
});

// Tua bài hát khi người dùng kéo thanh tiến trình
progressBar.addEventListener("input", function () {
    if (audio.duration) {
        const seekTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    }
});

// Điều chỉnh âm lượng khi kéo thanh VOL
volumeBar.addEventListener("input", function () {
    audio.volume = Number(volumeBar.value);
});

// Tự động chuyển sang bài tiếp theo khi bài hiện tại kết thúc
audio.addEventListener("ended", function () {
    nextSong();
});

// Đổi mục đang chọn trên thanh Sidebar bên trái
sidebarItems.forEach(function (item) {
    item.addEventListener("click", function () {
        sidebarItems.forEach(function (el) {
            el.classList.remove("active");
        });
        item.classList.add("active");
    });
});

// Khởi tạo giao diện và tải bài hát đầu tiên khi mở trang
audio.volume = Number(volumeBar.value);
renderPlaylist();
loadSong(currentIndex);

