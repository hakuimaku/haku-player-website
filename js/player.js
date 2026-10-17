// Danh sách 40 bài hát riêng biệt thuộc 08 đĩa Album trong trình phát nhạc (05 bài mỗi Album)
const songs = [
    // Album 1: Memories That Never Happened (05 bài)
    {
        title: "Empty Hallway",
        artist: "Quiet Corridor",
        album: "Memories That Never Happened",
        duration: "00:18",
        src: "assets/music/track01.mp3",
        cover: "assets/covers/hallway.jpg"
    },
    {
        title: "Fluorescent Dreams",
        artist: "Quiet Corridor",
        album: "Memories That Never Happened",
        duration: "00:24",
        src: "assets/music/track02.mp3",
        cover: "assets/covers/hallway.jpg"
    },
    {
        title: "Locker Room Echo",
        artist: "Quiet Corridor",
        album: "Memories That Never Happened",
        duration: "00:20",
        src: "assets/music/track03.mp3",
        cover: "assets/covers/hallway.jpg"
    },
    {
        title: "Chalkboard Dust",
        artist: "Quiet Corridor",
        album: "Memories That Never Happened",
        duration: "00:19",
        src: "assets/music/track21.mp3",
        cover: "assets/covers/hallway.jpg"
    },
    {
        title: "Bell After Class",
        artist: "Quiet Corridor",
        album: "Memories That Never Happened",
        duration: "00:22",
        src: "assets/music/track22.mp3",
        cover: "assets/covers/hallway.jpg"
    },

    // Album 2: After Midnight (05 bài)
    {
        title: "Last Train Home",
        artist: "Platform 4",
        album: "After Midnight",
        duration: "00:21",
        src: "assets/music/track04.mp3",
        cover: "assets/covers/station.jpg"
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
        title: "Ticket Booth Static",
        artist: "Platform 4",
        album: "After Midnight",
        duration: "00:22",
        src: "assets/music/track06.mp3",
        cover: "assets/covers/station.jpg"
    },
    {
        title: "Subway Tunnel Wind",
        artist: "Platform 4",
        album: "After Midnight",
        duration: "00:18",
        src: "assets/music/track23.mp3",
        cover: "assets/covers/station.jpg"
    },
    {
        title: "Yellow Line Fog",
        artist: "Platform 4",
        album: "After Midnight",
        duration: "00:21",
        src: "assets/music/track24.mp3",
        cover: "assets/covers/station.jpg"
    },

    // Album 3: Poolside Static (05 bài)
    {
        title: "Summer 2007",
        artist: "Afternoon Echo",
        album: "Poolside Static",
        duration: "00:16",
        src: "assets/music/track07.mp3",
        cover: "assets/covers/pool.jpg"
    },
    {
        title: "Memory Lane",
        artist: "Afternoon Echo",
        album: "Poolside Static",
        duration: "00:20",
        src: "assets/music/track08.mp3",
        cover: "assets/covers/pool.jpg"
    },
    {
        title: "Chlorine Reflections",
        artist: "Afternoon Echo",
        album: "Poolside Static",
        duration: "00:23",
        src: "assets/music/track09.mp3",
        cover: "assets/covers/pool.jpg"
    },
    {
        title: "Blue Tile Ripple",
        artist: "Afternoon Echo",
        album: "Poolside Static",
        duration: "00:20",
        src: "assets/music/track25.mp3",
        cover: "assets/covers/pool.jpg"
    },
    {
        title: "Diving Board Silence",
        artist: "Afternoon Echo",
        album: "Poolside Static",
        duration: "00:23",
        src: "assets/music/track26.mp3",
        cover: "assets/covers/pool.jpg"
    },

    // Album 4: Sunday Closing Time (05 bài)
    {
        title: "Closed Mall",
        artist: "Atrium Ghosts",
        album: "Sunday Closing Time",
        duration: "00:22",
        src: "assets/music/track10.mp3",
        cover: "assets/covers/mall.jpg"
    },
    {
        title: "Escalator Hum",
        artist: "Atrium Ghosts",
        album: "Sunday Closing Time",
        duration: "00:18",
        src: "assets/music/track11.mp3",
        cover: "assets/covers/mall.jpg"
    },
    {
        title: "Food Court Neon",
        artist: "Atrium Ghosts",
        album: "Sunday Closing Time",
        duration: "00:24",
        src: "assets/music/track12.mp3",
        cover: "assets/covers/mall.jpg"
    },
    {
        title: "Fountain Coins",
        artist: "Atrium Ghosts",
        album: "Sunday Closing Time",
        duration: "00:17",
        src: "assets/music/track27.mp3",
        cover: "assets/covers/mall.jpg"
    },
    {
        title: "Mannequin Window",
        artist: "Atrium Ghosts",
        album: "Sunday Closing Time",
        duration: "00:24",
        src: "assets/music/track28.mp3",
        cover: "assets/covers/mall.jpg"
    },

    // Album 5: Cubicle 1998 (05 bài)
    {
        title: "Late Shift Cubicle",
        artist: "Dial-Up Dreams",
        album: "Cubicle 1998",
        duration: "00:23",
        src: "assets/music/track13.mp3",
        cover: "assets/covers/office.jpg"
    },
    {
        title: "Screensaver Maze",
        artist: "Dial-Up Dreams",
        album: "Cubicle 1998",
        duration: "00:19",
        src: "assets/music/track14.mp3",
        cover: "assets/covers/office.jpg"
    },
    {
        title: "Fax Machine Hum",
        artist: "Dial-Up Dreams",
        album: "Cubicle 1998",
        duration: "00:19",
        src: "assets/music/track29.mp3",
        cover: "assets/covers/office.jpg"
    },
    {
        title: "Watercooler Corner",
        artist: "Dial-Up Dreams",
        album: "Cubicle 1998",
        duration: "00:21",
        src: "assets/music/track30.mp3",
        cover: "assets/covers/office.jpg"
    },
    {
        title: "Floppy Drive Click",
        artist: "Dial-Up Dreams",
        album: "Cubicle 1998",
        duration: "00:22",
        src: "assets/music/track31.mp3",
        cover: "assets/covers/office.jpg"
    },

    // Album 6: Wet Asphalt & Streetlights (05 bài)
    {
        title: "Sodium Streetlight",
        artist: "Sodium Vapor",
        album: "Wet Asphalt & Streetlights",
        duration: "00:17",
        src: "assets/music/track15.mp3",
        cover: "assets/covers/parking.jpg"
    },
    {
        title: "Distant Highway Rain",
        artist: "Sodium Vapor",
        album: "Wet Asphalt & Streetlights",
        duration: "00:21",
        src: "assets/music/track16.mp3",
        cover: "assets/covers/parking.jpg"
    },
    {
        title: "Puddle Reflections",
        artist: "Sodium Vapor",
        album: "Wet Asphalt & Streetlights",
        duration: "00:18",
        src: "assets/music/track32.mp3",
        cover: "assets/covers/parking.jpg"
    },
    {
        title: "24 Hour Convenience",
        artist: "Sodium Vapor",
        album: "Wet Asphalt & Streetlights",
        duration: "00:20",
        src: "assets/music/track33.mp3",
        cover: "assets/covers/parking.jpg"
    },
    {
        title: "Wiper Blade Rhythm",
        artist: "Sodium Vapor",
        album: "Wet Asphalt & Streetlights",
        duration: "00:25",
        src: "assets/music/track34.mp3",
        cover: "assets/covers/parking.jpg"
    },

    // Album 7: Lobby Television (05 bài)
    {
        title: "Waiting Room TV",
        artist: "Channel 03",
        album: "Lobby Television",
        duration: "00:25",
        src: "assets/music/track17.mp3",
        cover: "assets/covers/waiting.jpg"
    },
    {
        title: "Vending Machine Glow",
        artist: "Channel 03",
        album: "Lobby Television",
        duration: "00:18",
        src: "assets/music/track18.mp3",
        cover: "assets/covers/waiting.jpg"
    },
    {
        title: "Weather Channel Loop",
        artist: "Channel 03",
        album: "Lobby Television",
        duration: "00:19",
        src: "assets/music/track35.mp3",
        cover: "assets/covers/waiting.jpg"
    },
    {
        title: "Plastic Chair Creak",
        artist: "Channel 03",
        album: "Lobby Television",
        duration: "00:22",
        src: "assets/music/track36.mp3",
        cover: "assets/covers/waiting.jpg"
    },
    {
        title: "Midnight Test Pattern",
        artist: "Channel 03",
        album: "Lobby Television",
        duration: "00:18",
        src: "assets/music/track37.mp3",
        cover: "assets/covers/waiting.jpg"
    },

    // Album 8: Exit Level B2 (05 bài)
    {
        title: "Concrete Stairwell",
        artist: "Concrete Echo",
        album: "Exit Level B2",
        duration: "00:20",
        src: "assets/music/track19.mp3",
        cover: "assets/covers/stairwell.jpg"
    },
    {
        title: "Basement Fire Door",
        artist: "Concrete Echo",
        album: "Exit Level B2",
        duration: "00:22",
        src: "assets/music/track20.mp3",
        cover: "assets/covers/stairwell.jpg"
    },
    {
        title: "Fluorescent Flicker B2",
        artist: "Concrete Echo",
        album: "Exit Level B2",
        duration: "00:21",
        src: "assets/music/track38.mp3",
        cover: "assets/covers/stairwell.jpg"
    },
    {
        title: "Ventilation Shaft",
        artist: "Concrete Echo",
        album: "Exit Level B2",
        duration: "00:23",
        src: "assets/music/track39.mp3",
        cover: "assets/covers/stairwell.jpg"
    },
    {
        title: "Emergency Exit Sign",
        artist: "Concrete Echo",
        album: "Exit Level B2",
        duration: "00:20",
        src: "assets/music/track40.mp3",
        cover: "assets/covers/stairwell.jpg"
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
const playlistTitle = document.querySelector("#playlist-title");
const showAllBtn = document.querySelector("#show-all-btn");

const prevBtn = document.querySelector("#prev-btn");
const playBtn = document.querySelector("#play-btn");
const nextBtn = document.querySelector("#next-btn");

const progressBar = document.querySelector("#progress-bar");
const currentTimeEl = document.querySelector("#current-time");
const durationTimeEl = document.querySelector("#duration-time");
const volumeBar = document.querySelector("#volume-bar");
const albumFilterItems = document.querySelectorAll(".filter-album");

// Lưu danh sách bài hát đang hiển thị (mặc định là cả 40 bài hoặc theo từng Album)
let currentPlaylist = songs;
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

// Tạo bảng danh sách bài hát theo danh sách hiện tại (của riêng Album hoặc cả 40 bài)
function renderPlaylist() {
    playlistBody.innerHTML = "";

    currentPlaylist.forEach(function (song, index) {
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

        const albumCell = document.createElement("td");
        albumCell.classList.add("d-none", "d-sm-table-cell");
        albumCell.textContent = song.album;

        const timeCell = document.createElement("td");
        timeCell.classList.add("text-end", "col-time");
        timeCell.textContent = song.duration;

        row.appendChild(numCell);
        row.appendChild(titleCell);
        row.appendChild(artistCell);
        row.appendChild(albumCell);
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

// Tải thông tin và file nhạc của bài hát theo vị trí index trong danh sách hiện tại
function loadSong(index) {
    const song = currentPlaylist[index];

    audio.src = song.src;
    coverImage.src = song.cover;
    coverImage.alt = "Ảnh bìa " + song.title;

    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    songAlbum.textContent = song.album;

    trackNumber.textContent =
        formatTrackNumber(index + 1) + " / " + formatTrackNumber(currentPlaylist.length);

    progressBar.value = 0;
    currentTimeEl.textContent = "00:00";
    durationTimeEl.textContent = song.duration;
    nowPlayingTime.textContent = "00:00 / " + song.duration;

    updateActivePlaylistRow();
}

// Lọc danh sách bài hát theo từng Album riêng biệt hoặc hiển thị tất cả 40 bài
function filterByAlbum(albumName) {
    if (!albumName || albumName === "ALL") {
        currentPlaylist = songs;
        playlistTitle.textContent = "PLAYLIST — ALL MUSIC (40 TRACKS)";
    } else {
        const filtered = songs.filter(function (song) {
            return song.album === albumName;
        });

        if (filtered.length > 0) {
            currentPlaylist = filtered;
            playlistTitle.textContent =
                "ALBUM PLAYLIST: " +
                albumName.toUpperCase() +
                " (" +
                formatTrackNumber(filtered.length) +
                " TRACKS)";
        } else {
            currentPlaylist = songs;
            playlistTitle.textContent = "PLAYLIST — ALL MUSIC (40 TRACKS)";
        }
    }

    // Đánh dấu mục Album tương ứng trên thanh Sidebar bên trái
    albumFilterItems.forEach(function (item) {
        const itemAlbum = item.getAttribute("data-album");
        if ((!albumName && itemAlbum === "ALL") || itemAlbum === albumName) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    currentIndex = 0;
    renderPlaylist();
    loadSong(currentIndex);
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

// Chuyển sang bài hát trước đó trong danh sách hiện tại
function prevSong() {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = currentPlaylist.length - 1;
    }

    loadSong(currentIndex);
    playSong();
}

// Chuyển sang bài hát tiếp theo trong danh sách hiện tại
function nextSong() {
    currentIndex = currentIndex + 1;
    if (currentIndex >= currentPlaylist.length) {
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

// Sự kiện khi bấm chọn một Album trong thanh Sidebar bên trái
albumFilterItems.forEach(function (item) {
    item.addEventListener("click", function () {
        const selectedAlbum = item.getAttribute("data-album");
        filterByAlbum(selectedAlbum);
    });
});

// Nút bấm hiển thị lại toàn bộ 20 bài hát
showAllBtn.addEventListener("click", function () {
    filterByAlbum("ALL");
});

// Kiểm tra xem người dùng có bấm chuyển từ trang Albums sang một Album cụ thể hay không
const urlParams = new URLSearchParams(window.location.search);
const selectedAlbumFromUrl = urlParams.get("album");

audio.volume = Number(volumeBar.value);
if (selectedAlbumFromUrl) {
    filterByAlbum(selectedAlbumFromUrl);
} else {
    filterByAlbum("ALL");
}


