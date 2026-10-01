# Nhật ký Read Monkey

Extension **chưa lên store nào**. Server ở repo riêng `epitchi/read-monkey-server`, đã deploy.
Mỗi buổi ghi: 👤 người dùng thấy · 🔧 bên trong · 🐞 lỗi từng chạy thật · ⚠️ điều đã rút lại.

## 2026-10-02 — bộ phát hành Chrome Web Store

- 👤 Cài mới thì **ngôn ngữ đích = ngôn ngữ trình duyệt** (trình duyệt tiếng Việt → dịch sang tiếng Việt),
  thay cho tiếng Trung gán cứng của bản gốc. Trình duyệt tiếng Anh giữ mặc định cũ.
- 🔧 `store/`: 5 ảnh 1280×800 chụp từ extension thật + server thật, promo 440×280, icon, và
  `LISTING.md` — đủ mọi ô Developer Dashboard hỏi (mô tả, single purpose, giải trình từng quyền,
  khai báo dữ liệu). File zip giờ tên `read-monkey-<version>-chrome.zip`.
- ⚠️ **Chưa lên store.** GPL buộc công khai repo này trước khi phát; chờ Epitchi quyết.
- 🔧 Repo giờ là submodule `read-monkey/` trong repo `idea`.

## 2026-10-01 khuya — server tách repo riêng

- 🔧 `server/` chuyển sang repo private `epitchi/read-monkey-server`, giữ nguyên lịch sử commit.
  Nhật ký server từ đây ghi ở repo đó.
- 👤 Server **đã deploy** ở `https://read-monkey.epitchi.com` (smoke test production qua). Có thêm
  web app: `/notebases` xem/xoá note, `/notebase/{id}/review` ôn flashcard (FSRS), Free 20 lượt/ngày.

## 2026-10-01 tối — server thay thế (`server/`), chạy local

- 👤 Đăng nhập bằng email + mật khẩu ở `/log-in`; popup extension nhận ngay tài khoản và gói
  ("Monkey Tester · Free") — kiểm bằng trình duyệt thật với extension thật.
- 👤 **AI có sẵn** chạy trên Workers AI (không cần API key): Free 30 lượt/ngày, Pro 200/ngày, chỉ
  cho Custom AI Action + gợi ý lưu từ; Ultra 2.000 lượt/tuần cho mọi tính năng, thêm tier "advance".
  Phạm vi tính năng chép luật bản gốc; **các con số quota là mình đặt**, chưa đo. Từ điển Việt–Anh trả JSON hợp lệ 5/5 lần.
- 👤 **Notebase**: tạo sổ, lưu note từ extension; gói Free giới hạn 10 note như bản gốc.
- 🔧 Extension giờ trỏ vào `https://read-monkey.epitchi.com` thay cho `.invalid`.
- 🐞 `workers-ai-provider` (mọi bản tới 4.0.0) lặp đôi từng token — "Con Con kh kh…", JSON hỏng.
  Bắt được nhờ falsifier viết trước; bỏ provider, gọi thẳng `env.AI.run`. Lỗi gốc: cloudflare/ai PR #663, còn mở.
- 🐞 `wrangler dev` viết lại header `Origin` khi có route custom domain → đăng ký bị 403 ở local.
  Chạy dev với `--local-upstream localhost:8787`.

## 2026-10-01 — fork từ Read Frog `c72749d4` (v1.49.3)

- 👤 Tên **Read Monkey** ở cả 10 ngôn ngữ (Nhật 読書ザル, Trung 陪读猴 / 陪讀猴).
- 👤 Icon mặt khỉ, tự vẽ bằng SVG (`assets/brand/`), cả bản "đã dịch" có dấu tick xanh; thay luôn
  logo trong nút nổi, side panel, nút phụ đề YouTube, và 2 ảnh demo.
- 👤 Email hỗ trợ → thienvanlea1@gmail.com. "Góp ý", "Báo lỗi", "Roadmap", "Đánh giá" → GitHub
  issues/repo `epitchi/read-monkey`. **Bỏ** Discord và WeChat của Read Frog.
- 🔧 Server (`api`, website, cookie đăng nhập) trỏ vào `*.read-monkey.invalid` — không bao giờ phân
  giải. Không còn gọi tới server Read Frog, không gửi analytics (PostHog), không gửi khảo sát
  gỡ cài đặt về Tally của họ, link giới thiệu Jalapeno/Atlas không còn ghi công cho họ.
- 🔧 Không tự mở tab hướng dẫn khi cài (trang đó nằm trên website mình chưa có).
- 🔧 Đã kiểm trên Chromium thật: nạp được, dịch song ngữ cả trang Wikipedia bằng Google miễn phí
  (1.788 đoạn), 3.848 test pass, lint sạch.

## CHƯA có — đừng tìm

- **Phụ đề AI, thanh toán, MCP, đăng nhập Google** — chưa làm (theo dõi ở repo server).
- **Sync Google Drive** — cần OAuth client ID riêng (`WXT_GOOGLE_CLIENT_ID`).
- **Link docs/tutorial** — server chưa có trang `/docs`, `/guide` (404); trang biến prompt vẫn trỏ docs Read Frog.
- Repo GitHub `epitchi/read-monkey` là **private**; listing store chưa có.
- Thư mục `readmes/` và ảnh marketing trong `assets/` vẫn là của Read Frog.
