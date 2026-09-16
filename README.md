# Jirasudanee — Computer Engineering Portfolio

เว็บไซต์ Portfolio สองภาษา (ไทย/อังกฤษ) แบบหน้าเดียว สร้างด้วย React, Vite, Tailwind CSS, Framer Motion และ Lucide React โดยใช้ข้อมูลและภาพจาก PDF ที่ให้มา พร้อมโหมดมืด/สว่างและการจดจำค่าที่ผู้ใช้เลือก

## ติดตั้งและเปิดใช้งาน

ใช้ Node.js 20.19+ หรือ 22.12+ (ทดสอบด้วย Node.js 24)

```powershell
cd C:\Users\UserM\Downloads\website_Port
npm install
npm run dev
```

เปิด URL ที่แสดงใน Terminal (ปกติคือ http://127.0.0.1:5173)

สร้างไฟล์พร้อมนำขึ้นโฮสต์และทดสอบเวอร์ชัน production:

```powershell
npm run build
npm run preview
```

ไฟล์พร้อมใช้งานอยู่ใน `dist/` สามารถนำโฟลเดอร์นี้ขึ้น static hosting ได้ เว็บไซต์ไม่มี backend หรือฐานข้อมูล และลิงก์ติดต่อเปิดโปรแกรมอีเมล/โทรศัพท์ของผู้เข้าชม

## โครงสร้างโปรเจกต์

```text
website_Port/
├── index.html                 # SEO / Open Graph / title
├── package.json
├── package-lock.json
├── vite.config.js
├── src/
│   ├── main.jsx               # จุดเริ่มต้นและฟอนต์ในเครื่อง
│   ├── App.jsx                # ลำดับ section
│   ├── i18n.jsx               # ข้อความแปลและสถานะภาษา/ธีม
│   ├── styles.css             # สี / spacing / responsive / motion
│   ├── data/portfolio.js      # ข้อมูลและลิงก์ทั้งหมด
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Projects.jsx       # Projects / ProjectCard / ProjectModal
│       ├── Skills.jsx
│       ├── Experience.jsx
│       ├── Awards.jsx
│       ├── Education.jsx
│       ├── Activities.jsx
│       ├── Certifications.jsx
│       ├── Contact.jsx        # Contact / Footer
│       └── Shared.jsx         # Reveal / SectionHeading / Tags
├── public/
│   ├── favicon.svg
│   ├── images/                # ภาพจริงที่ดึงจากเอกสาร บีบอัดเป็น WebP
│   └── resume/Jirasudanee_Resume.pdf
├── docs/
│   ├── DESIGN.md              # วิเคราะห์ข้อมูล, IA, design system, source mapping
│   └── QA.md                  # ผลตรวจสอบ
└── .openai/hosting.json       # Site identity, ถ้ามีการใช้ Sites
```

## จุดที่แก้ไขได้ง่าย

| สิ่งที่ต้องการแก้ | ตำแหน่ง |
|---|---|
| ชื่อ, อีเมล, โทรศัพท์, ที่อยู่แบบย่อ | `src/data/portfolio.js` → `profile` |
| รูปโปรไฟล์ | แทนที่ `public/images/profile.webp` หรือแก้ `profile.portrait` |
| Resume ดาวน์โหลด | แทนที่ `public/resume/Jirasudanee_Resume.pdf` หรือแก้ `profile.resume` |
| GitHub / LinkedIn | เติม URL จริงใน `profile.github` / `profile.linkedin` (ค่าว่างจะไม่แสดง) |
| โปรเจกต์และรายละเอียด Modal | `projects` ใน `src/data/portfolio.js` |
| Skills / ประสบการณ์ / รางวัล / กิจกรรม | array ที่มีชื่อตรงกันใน `src/data/portfolio.js` |
| รูปโปรเจกต์และกิจกรรม | `public/images/` และฟิลด์ `image`, `imageAlt` หรือ `alt` |
| ข้อความ About / Education / Contact | คอมโพเนนต์ที่มีชื่อตรงกัน |
| สีและรูปแบบ | ตัวแปร `:root` และกฎที่เกี่ยวข้องใน `src/styles.css` |
| คำแปลภาษาไทยและป้ายกำกับ | `src/i18n.jsx` |
| Title / SEO | `index.html` |
| ลำดับเนื้อหา | `src/App.jsx` |

ใช้ path รูปในข้อมูลเป็น `/images/ชื่อไฟล์.webp` (ไม่ต้องใส่ `public`) และใส่คำอธิบายรูปใน `alt` ทุกครั้ง

## ข้อมูลและการตัดสินใจด้านเนื้อหา

- Resume เป็นแหล่งอ้างอิงหลักของ Contact: `Jirasudanee.oak@spumail.net`
- ไม่สร้าง GitHub/LinkedIn URL จากชื่อที่พบในเอกสาร
- ใช้ปีรางวัล QuakeLink ตาม Resume และหลักฐานภาพ เนื่องจากบางคำบรรยายกิจกรรมใน Portfolio ไม่ตรงกัน
- ตรวจเทียบภาพ Resume จริงแล้ว: motor monitoring / SITTUI / Best Project อยู่ในปี 2026; งานตรวจวัดฝุ่นอยู่กับ VT Innovative Alliances ปี 2025
- บนหน้าเว็บแสดงเพียง Bangkok, Thailand ไม่มีที่อยู่เต็มหรือเอกสารสุขภาพ
- Resume ดาวน์โหลดเป็นไฟล์ต้นฉบับที่ผู้ใช้ส่งมา จึงยังมีข้อมูลและที่อยู่ตามต้นฉบับ หากต้องการเปลี่ยนเป็นฉบับสำหรับเผยแพร่ ให้แทนที่ไฟล์ตามตารางด้านบน
- ฟอนต์และภาพให้บริการจากเว็บไซต์เอง ไม่ต้องเรียก Google Fonts ขณะเปิดหน้าเว็บ
- `docs/DESIGN.md` อธิบายแหล่งข้อมูลแต่ละส่วนและโครงสร้างก่อนเริ่มเขียนเว็บไซต์

## ความสามารถที่มี

เมนูติดด้านบนพร้อม section highlight, mobile menu, smooth scroll, modal รายละเอียด 4 โปรเจกต์, รองรับ Tab/Escape และ focus restoration, ดาวน์โหลด Resume, Email/Phone links, รูปโหลดแบบ lazy, prefers-reduced-motion, responsive layout, SEO metadata, สลับภาษาไทย/อังกฤษ, สลับโหมดมืด/สว่าง และจดจำค่าที่เลือกผ่าน localStorage
