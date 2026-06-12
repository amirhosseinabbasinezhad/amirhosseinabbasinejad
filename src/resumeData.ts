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
    { name: "CCNA (شبکه)", percent: 95 },
    { name: "Windows Server", percent: 50 },
    { name: "VMware", percent: 65 },
    { name: "MikrotTik", percent: 90 },
    { name: "Active Directory", percent: 50 },
    { name: "React / Next.js", percent: 90 },
    { name: "TypeScript", percent: 85 },
    { name: "Node.js / Express", percent: 75 },
  ],
  about: "کارشناس شبکه و فناوری اطلاعات با تجربه در زمینه طراحی و توسعه وب با React و Next.js. همچنین مسلط به راهکارهای شبکه، مجازی‌سازی، ویدئو سرو و رفع مشکلات سخت‌افزاری و نرم‌افزاری. علاقه‌مند به یادگیری مداوم، حل مسائل پیچیده و افزایش بهره‌وری سیستم‌ها.",
  experiences: [
    {
      title: "توسعه‌دهنده فرانت‌اند / ری‌اکت",
      date: "۱۴۰۱ - ۱۴۰۲",
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
      name: "پیاده‌سازی شبکه سازمانی با تجهیزات واقعی",
      subtitle:"پیاده‌سازی کامل شبکه سازمانی با تجهیزات سیسکو و میکروتیک",
      description:["پیکربندی سوئیچ‌های Cisco و پیاده‌سازی VLAN، Trunk، STP و Port Security در محیط آزمایشگاهی","راه‌اندازی روتر و انجام تنظیمات NAT، Firewall، DHCP و مدیریت پهنای باند","شبیه‌سازی سناریوهای شبکه و عیب‌یابی مشکلات ارتباطی برای افزایش تسلط بر مفاهیم Switching و Routing","کار عملی با تجهیزات واقعی Cisco و MikroTik در محیط آزمایشگاهی"],
      tech: ""
    },
    {
      name: "پیکربندی و مدیریت روترهای MikroTik",
      subtitle: "تجهیزات واقعی",
      description:["راه‌اندازی و پیکربندی RouterOS در محیط آزمایشگاهی","پیاده‌سازی NAT, DHCP و مدیریت پهنای باند","پیکربندی پروتکل‌های مسیریابی OSPF و BGP","یجاد انواعTunnelها  و برقراری ارتباط بین شبکه‌ها "],
      tech: ""
    },
    {
      name: "مجازی‌سازی و Windows Server",
      subtitle: "پروژه های شبیه سازی",
      description: ["نصب و پیکربندی VMware ESXi در محیط آزمایشگاهی","ایجاد و مدیریت ماشین‌های مجازی" , "پیاده‌سازی سرویس‌های پایه Windows Server شامل Active Directory، Domain Controller ,DHCP ,DNS" ,"استفاده از Snapshot و مدیریت منابع ماشین‌های مجازی","شبیه‌سازی سناریوهای شبکه و سرویس‌های سازمانی برای افزایش مهارت عملی"],
      tech: "ESXI , VCenter ,windows server 2022"
    }
  ],
  gallery: [
    { src: cameraTunnel, caption: "تنظیم دوربین داهوا و انتقال تصویر بین دو مودم توسط تجهیزات سیسکو ." },
    { src: ciscoRouting, caption: "روتینگ و سویچینگ سیسکو به همراه لودبالانس" },
    { src: mikrotikConf, caption: "پیکر بندی انواع تونل ها و... در میکروتیک" },
    { src: ciscoswitching, caption: "زیرساخت و تجهیزات سیسکو" }
  ]
  
};