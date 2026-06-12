import cameraTunnel from "./assets/camera-tunel.jpg"
import ciscoRouting from "./assets/ciscoRoutingSwitching.jpg"
import mikrotikConf from "./assets/configurationMikroTik.jpg"
import ciscoswitching from "./assets/cisco2.jpg"
export const resumeData = {
  name: "امیرحسین عباسی نژاد",
  title: "Network Administrator | IT Support Specialist ",
  contact: {
    phone: "09102678945",
    email: "amirabbasinezhad79@gmail.com",
    location: "تهران، ایران",
    linkedin: "linkedin.com/in/amir-abbasinejad",
    military: "پایان خدمت"
  },
  certificates: [
    { name: "+ CompTIA Network ", width: 58,vendor: "comptia" },
    { name: "MikroTik / MTCNA", width: 27 ,vendor: "MikroTik"},
    { name: "CCNA", width: 50 ,vendor: "cisco" },
    { name: "MCSA", width: 25,vendor: "windows" },
    { name: "VMware VCP (ICM)", width: 55,vendor: "VMware" },
  ],
  skills: [
    { name: "CCNA (شبکه)", percent: 90 },
    { name: "Windows Server", percent: 50 },
    { name: "VMware", percent: 85 },
    { name: "Linux", percent: 30 },
    { name: "Active Directory", percent: 50 },
    { name: "React / Next.js", percent: 90 },
    { name: "TypeScript", percent: 85 },
    { name: "Node.js / Express", percent: 75 },
  ],
  about: "کارشناس شبکه و فناوری اطلاعات با تجربه در زمینه طراحی و توسعه وب با React و Next.js. همچنین مسلط به راهکارهای شبکه، مجازی‌سازی، ویدئو سرو و رفع مشکلات سخت‌افزاری و نرم‌افزاری. علاقه‌مند به یادگیری مداوم، حل مسائل پیچیده و افزایش بهره‌وری سیستم‌ها.",
  experiences: [
    {
      title: "توسعه‌دهنده فرانت‌اند / ری‌اکت",
      date: "۱۴۰۱ - اکنون",
      company: "فناوران متحد رسانه گستر",
      description: [
        "توسعه و نگهداری وب‌سایت‌ها و پنل‌های تحت وب با React و Next.js",
        "پیاده‌سازی رابط کاربری پویا، بهینه‌سازی عملکرد و تجربه کاربری (UX)",
        "همکاری با تیم بک‌اند و یکپارچه‌سازی APIها"
      ]
    },
   
  ],
  projects: [
    {
      name: "Ezone",
      subtitle: "سیستم فروش محصولات نزدیک انقضا",
      description: "پلتفرم مدیریت کالاهای تاریخ‌گذشته با قابلیت اعلان و تخفیف پویا. استک: Next.js, Express, MongoDB",
      tech: "Next.js, MongoDB, Tailwind"
    },
    {
      name: "Chrome Extension API Viewer",
      subtitle: "ابزار توسعه‌دهندگان",
      description: "اکستنشن مرورگر برای نمایش و رصد درخواست‌های API در لحظه، ساخته شده با React و TypeScript.",
      tech: "React, TypeScript, Chrome API"
    },
    {
      name: "Portfolio Website (رزومه آنلاین)",
      subtitle: "وب‌سایت شخصی",
      description: "طراحی و پیاده‌سازی نمونه‌کار حرفه‌ای با React، تایپ‌اسکریپت و Material UI.",
      tech: "React, TypeScript, MUI"
    }
  ],
  gallery: [
    { src: cameraTunnel, caption: "تنظیم دوربین داهوا و انتقال تصویر بین دو مودم توسط تجهیزات سیسکو ." },
    { src: ciscoRouting, caption: "روتینگ و سویچینگ سیسکو به همراه لودبالانس" },
    { src: mikrotikConf, caption: "پیکر بندی انواع تونل ها و... در میکروتیک" },
    { src: ciscoswitching, caption: "زیرساخت و تجهیزات سیسکو" }
  ]
};