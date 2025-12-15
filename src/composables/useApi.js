// Mock API composable - จะเปลี่ยนเป็น API จริงภายหลัง
import { ref } from 'vue'

// Mock Data
const mockBanners = ref([
  {
    id: 1,
    title: 'แบนเนอร์หลัก - เช่ารถราคาดีที่สุด',
    imageDesktop: 'https://placehold.co/1280x500/FF595A/white?text=Banner+Desktop+1',
    imageMobile: 'https://placehold.co/390x300/FF595A/white?text=Banner+Mobile+1',
    link: 'https://example.com/promo1',
    order: 1,
    isActive: true
  },
  {
    id: 2,
    title: 'แบนเนอร์โปรโมชั่นพิเศษ',
    imageDesktop: 'https://placehold.co/1280x500/2574FF/white?text=Banner+Desktop+2',
    imageMobile: 'https://placehold.co/390x300/2574FF/white?text=Banner+Mobile+2',
    link: 'https://example.com/promo2',
    order: 2,
    isActive: true
  },
  {
    id: 3,
    title: 'แบนเนอร์รถใหม่',
    imageDesktop: 'https://placehold.co/1280x500/36B37E/white?text=Banner+Desktop+3',
    imageMobile: 'https://placehold.co/390x300/36B37E/white?text=Banner+Mobile+3',
    link: '',
    order: 3,
    isActive: false
  }
])

const mockPromotions = ref([
  {
    id: 1,
    title: 'Mom\'s Day Special Price',
    image: 'https://placehold.co/736x507/FF595A/white?text=Promotion+1',
    link: 'https://example.com/moms-day',
    startDate: '2025-11-01',
    endDate: '2025-11-30',
    order: 1,
    isActive: true
  },
  {
    id: 2,
    title: 'September Double Deal',
    image: 'https://placehold.co/736x507/FFAB00/white?text=Promotion+2',
    link: 'https://example.com/september',
    startDate: '2025-09-01',
    endDate: '2025-09-30',
    order: 2,
    isActive: false
  }
])

// Mock Branches (สาขา)
const mockBranches = ref([
  { id: 1, name: 'กรุงเทพ - สนามบิน สุวรรณภูมิ' },
  { id: 2, name: 'กรุงเทพ - สนามบิน ดอนเมือง' },
  { id: 3, name: 'กรุงเทพ - สีลม' },
  { id: 4, name: 'กรุงเทพ - รัชดา' },
  { id: 5, name: 'ภูเก็ต - สนามบิน' },
  { id: 6, name: 'ภูเก็ต - ป่าตอง' },
  { id: 7, name: 'ภูเก็ต - เมือง' },
  { id: 8, name: 'กระบี่ - สนามบิน' },
  { id: 9, name: 'กระบี่ - อ่าวนาง' },
  { id: 10, name: 'เชียงใหม่ - สนามบิน' },
  { id: 11, name: 'เชียงใหม่ - นิมมาน' },
  { id: 12, name: 'พัทยา - สาขาหลัก' },
  { id: 13, name: 'หาดใหญ่ - สนามบิน' },
  { id: 14, name: 'สมุย - สนามบิน' }
])

const mockProvinces = ref([
  {
    id: 1,
    name: 'กรุงเทพมหานคร',
    image: 'https://placehold.co/570x320/FF595A/white?text=Bangkok',
    link: '/search?province=bangkok',
    order: 1,
    isActive: true,
    branches: [1, 2, 3, 4]
  },
  {
    id: 2,
    name: 'ภูเก็ต',
    image: 'https://placehold.co/570x320/2574FF/white?text=Phuket',
    link: '/search?province=phuket',
    order: 2,
    isActive: true,
    branches: [5, 6, 7]
  },
  {
    id: 3,
    name: 'กระบี่',
    image: 'https://placehold.co/570x320/36B37E/white?text=Krabi',
    link: '/search?province=krabi',
    order: 3,
    isActive: true,
    branches: [8, 9]
  }
])

const mockArticleCategories = ref([
  { id: 1, name: 'ท่องเที่ยว', slug: 'travel', order: 1, isActive: true },
  { id: 2, name: 'โปรโมชั่น', slug: 'promotion', order: 2, isActive: true },
  { id: 3, name: 'ข่าวสาร', slug: 'news', order: 3, isActive: true },
  { id: 4, name: 'แนะนำ', slug: 'tips', order: 4, isActive: true }
])

const mockArticles = ref([
  {
    id: 1,
    title: '10 เส้นทางท่องเที่ยวยอดนิยมในประเทศไทย',
    slug: '10-travel-routes-thailand',
    categoryId: 1,
    category: 'ท่องเที่ยว',
    coverImage: 'https://placehold.co/302x302/FF595A/white?text=Article+1',
    content: '<p>เนื้อหาบทความ...</p>',
    publishedDate: '2025-11-28',
    metaTitle: '',
    metaDescription: '',
    status: 'published',
    tags: ['ท่องเที่ยว', 'เที่ยวทะเล', 'เที่ยวภูเขา']
  },
  {
    id: 2,
    title: 'วิธีเช่ารถสำหรับมือใหม่',
    slug: 'how-to-rent-car-beginner',
    categoryId: 4,
    category: 'แนะนำ',
    coverImage: 'https://placehold.co/302x302/2574FF/white?text=Article+2',
    content: '<p>เนื้อหาบทความ...</p>',
    publishedDate: '2025-11-27',
    metaTitle: '',
    metaDescription: '',
    status: 'published',
    tags: ['รถประหยัด', 'ขับรถระยะไกล']
  },
  {
    id: 3,
    title: 'โปรโมชั่นส่งท้ายปี 2025',
    slug: 'year-end-promotion-2025',
    categoryId: 2,
    category: 'โปรโมชั่น',
    coverImage: 'https://placehold.co/302x302/36B37E/white?text=Article+3',
    content: '<p>เนื้อหาบทความ...</p>',
    publishedDate: '2025-11-26',
    metaTitle: '',
    metaDescription: '',
    status: 'draft',
    tags: ['โปรโมชั่น', 'รถEV', 'Deepal']
  }
])

const mockFAQCategories = ref([
  { id: 1, name: 'การจอง', order: 1, isActive: true },
  { id: 2, name: 'การชำระเงิน', order: 2, isActive: true },
  { id: 3, name: 'การรับ-คืนรถ', order: 3, isActive: true },
  { id: 4, name: 'เอกสารที่ต้องใช้', order: 4, isActive: true }
])

const mockFAQs = ref([
  {
    id: 1,
    title: 'ฉันสามารถจองรถล่วงหน้าได้กี่วัน?',
    detail: '<p>คุณสามารถจองรถล่วงหน้าได้สูงสุด 90 วัน</p>',
    categoryId: 1,
    category: 'การจอง',
    order: 1,
    status: 'published'
  },
  {
    id: 2,
    title: 'รับชำระเงินด้วยบัตรเครดิตอะไรบ้าง?',
    detail: '<p>เรารับบัตร Visa, Mastercard, JCB และ American Express</p>',
    categoryId: 2,
    category: 'การชำระเงิน',
    order: 1,
    status: 'published'
  },
  {
    id: 3,
    title: 'เอกสารอะไรบ้างที่ต้องใช้ในการรับรถ?',
    detail: '<p>1. บัตรประชาชน หรือ Passport<br/>2. ใบขับขี่ที่ยังไม่หมดอายุ<br/>3. บัตรเครดิต (สำหรับค้ำประกัน)</p>',
    categoryId: 4,
    category: 'เอกสารที่ต้องใช้',
    order: 1,
    status: 'published'
  }
])

const mockAccounts = ref([
  {
    id: 1,
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@asap.com',
    role: 'super_admin',
    isActive: true,
    lastLogin: '2025-11-28 10:30:00'
  },
  {
    id: 2,
    firstName: 'สมชาย',
    lastName: 'ใจดี',
    email: 'somchai@asap.com',
    role: 'editor',
    isActive: true,
    lastLogin: '2025-11-27 15:45:00'
  },
  {
    id: 3,
    firstName: 'สมหญิง',
    lastName: 'รักดี',
    email: 'somying@asap.com',
    role: 'viewer',
    isActive: false,
    lastLogin: '2025-11-20 09:00:00'
  }
])

const mockContactUs = ref({
  heroImage: 'https://placehold.co/1280x400/FF595A/white?text=Contact+Us',
  phone: '02-123-4567',
  email: 'contact@asap.com',
  lineId: '@asapcarrental',
  address: '123 อาคาร ABC ชั้น 10 ถนน XYZ แขวง ABC เขต XYZ กรุงเทพมหานคร 10100',
  mapEmbed: '',
  workingHours: 'จันทร์-ศุกร์ 08:00-18:00 น.'
})

// Mock Contact Submissions (ข้อความจากลูกค้า)
const mockContactSubmissions = ref([
  {
    id: 1,
    firstName: 'สมชาย',
    lastName: 'ใจดี',
    email: 'somchai@gmail.com',
    phone: '+66909990000',
    subject: 'การเช่ารถมากกว่า 1 เดือน',
    message: 'สนใจเช่ารถเป็นระยะเวลา 2 เดือนขึ้นไป มีส่วนลดเพิ่มเติมไหมครับ อยากทราบรายละเอียดเพิ่มเติมครับ',
    createdAt: '2025-12-15T10:30:00',
    isRead: false,
    readAt: null,
    readBy: null,
    remark: null
  },
  {
    id: 2,
    firstName: 'สมหญิง',
    lastName: 'รักเที่ยว',
    email: 'somying@hotmail.com',
    phone: '+66812345678',
    subject: 'สอบถามเรื่องประกันภัย',
    message: 'อยากทราบว่าค่าเช่ารถรวมประกันภัยชั้น 1 หรือไม่คะ และถ้าเกิดอุบัติเหตุต้องรับผิดชอบค่าใช้จ่ายอย่างไรบ้าง',
    createdAt: '2025-12-14T15:45:00',
    isRead: true,
    readAt: '2025-12-14T16:30:00',
    readBy: 'Admin',
    remark: 'ติดต่อกลับทางโทรศัพท์แล้ว'
  },
  {
    id: 3,
    firstName: 'วิชัย',
    lastName: 'ขับดี',
    email: 'wichai@yahoo.com',
    phone: '+66898765432',
    subject: 'ขอใบเสนอราคาสำหรับบริษัท',
    message: 'บริษัทต้องการเช่ารถจำนวน 5 คัน สำหรับพนักงาน ระยะเวลา 1 ปี รบกวนส่งใบเสนอราคามาที่อีเมลด้วยครับ',
    createdAt: '2025-12-13T09:00:00',
    isRead: true,
    readAt: '2025-12-13T10:00:00',
    readBy: 'Admin',
    remark: 'ส่งใบเสนอราคาทางอีเมลแล้ว รอการตอบกลับ'
  },
  {
    id: 4,
    firstName: 'นภา',
    lastName: 'ท่องโลก',
    email: 'napa.travel@gmail.com',
    phone: '+66876543210',
    subject: 'สอบถามเรื่องรถ EV',
    message: 'สนใจเช่ารถ EV ไปเที่ยวต่างจังหวัด อยากทราบว่ามีจุดชาร์จไฟตามเส้นทางไหมคะ และแนะนำรุ่นไหนดี',
    createdAt: '2025-12-12T14:20:00',
    isRead: false,
    readAt: null,
    readBy: null,
    remark: null
  },
  {
    id: 5,
    firstName: 'ประยุทธ์',
    lastName: 'ขับปลอดภัย',
    email: 'prayut@company.co.th',
    phone: '+66891234567',
    subject: 'ขอเปลี่ยนวันรับรถ',
    message: 'มีการจองรถไว้วันที่ 20 ธ.ค. หมายเลขการจอง ASP12345 ขอเปลี่ยนเป็นวันที่ 22 ธ.ค. แทนได้ไหมครับ',
    createdAt: '2025-12-11T11:30:00',
    isRead: false,
    readAt: null,
    readBy: null,
    remark: null
  }
])

const mockPrivacyPolicy = ref({
  title: 'นโยบายความเป็นส่วนตัว',
  content: '<h2>1. ข้อมูลที่เราเก็บรวบรวม</h2><p>เราเก็บรวบรวมข้อมูลส่วนบุคคลที่คุณให้กับเรา...</p>',
  lastUpdated: '2025-11-01'
})

const mockAppBanner = ref({
  title: 'จองสะดวกขึ้นผ่านแอปเอแซ็ป (asap app)',
  description: 'ค้นหารถเช่า check-in สะสม ASC Coin ผ่านแอป',
  bannerImage: 'https://placehold.co/600x400/FF595A/white?text=App+Banner',
  logoImage: 'https://placehold.co/100x100/FF595A/white?text=ASAP',
  backgroundColor: '#FF595A',
  appStoreLink: 'https://apps.apple.com/app/asap',
  googlePlayLink: 'https://play.google.com/store/apps/asap',
  isActive: true
})

// Mock Car Categories (ประเภทกลุ่มรถ)
const mockCarCategories = ref([
  {
    id: 1,
    name: 'Economy',
    slug: 'economy',
    image: 'https://placehold.co/400x300/FF595A/white?text=Economy',
    order: 1,
    isActive: true,
    carCount: 5
  },
  {
    id: 2,
    name: 'SUV',
    slug: 'suv',
    image: 'https://placehold.co/400x300/2574FF/white?text=SUV',
    order: 2,
    isActive: true,
    carCount: 8
  },
  {
    id: 3,
    name: 'EV Car',
    slug: 'ev-car',
    image: 'https://placehold.co/400x300/36B37E/white?text=EV+Car',
    order: 3,
    isActive: true,
    carCount: 3
  },
  {
    id: 4,
    name: 'Hybrid Car',
    slug: 'hybrid-car',
    image: 'https://placehold.co/400x300/9B59B6/white?text=Hybrid+Car',
    order: 4,
    isActive: true,
    carCount: 4
  },
  {
    id: 5,
    name: 'Luxury',
    slug: 'luxury',
    image: 'https://placehold.co/400x300/FFAB00/white?text=Luxury',
    order: 5,
    isActive: true,
    carCount: 2
  }
])

// Mock Car Brands & Models
const mockCarBrands = ref([
  {
    id: 1,
    name: 'Toyota',
    logo: 'https://placehold.co/100x100/FF595A/white?text=Toyota',
    order: 1,
    isActive: true,
    models: [
      {
        id: 1,
        name: 'Revo',
        images: [
          'https://placehold.co/400x300/FF595A/white?text=Revo+1',
          'https://placehold.co/400x300/FF595A/white?text=Revo+2',
          null,
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-08T10:30:00'
      },
      {
        id: 2,
        name: 'Vios',
        images: [
          'https://placehold.co/400x300/FF595A/white?text=Vios+1',
          'https://placehold.co/400x300/FF595A/white?text=Vios+2',
          'https://placehold.co/400x300/FF595A/white?text=Vios+3',
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-07T14:20:00'
      },
      {
        id: 3,
        name: 'Yaris',
        images: [
          'https://placehold.co/400x300/FF595A/white?text=Yaris+1',
          null,
          null,
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-05T09:15:00'
      },
      {
        id: 14,
        name: 'Camry',
        images: [null, null, null, null, null, null],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: null
      },
      {
        id: 15,
        name: 'Fortuner',
        images: [
          'https://placehold.co/400x300/FF595A/white?text=Fortuner+1',
          null,
          null,
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-01T11:00:00'
      },
      {
        id: 16,
        name: 'Corolla Cross',
        images: [null, null, null, null, null, null],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: null
      },
      {
        id: 17,
        name: 'Hilux',
        images: [
          'https://placehold.co/400x300/FF595A/white?text=Hilux+1',
          'https://placehold.co/400x300/FF595A/white?text=Hilux+2',
          null,
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-11-28T16:45:00'
      }
    ]
  },
  {
    id: 2,
    name: 'Honda',
    logo: 'https://placehold.co/100x100/2574FF/white?text=Honda',
    order: 2,
    isActive: true,
    models: [
      {
        id: 4,
        name: 'City',
        images: [
          'https://placehold.co/400x300/2574FF/white?text=City+1',
          'https://placehold.co/400x300/2574FF/white?text=City+2',
          null,
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-09T08:30:00'
      },
      {
        id: 5,
        name: 'Brio',
        images: [
          'https://placehold.co/400x300/2574FF/white?text=Brio+1',
          null,
          null,
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-06T13:00:00'
      },
      {
        id: 6,
        name: 'Civic',
        images: [
          'https://placehold.co/400x300/2574FF/white?text=Civic+1',
          'https://placehold.co/400x300/2574FF/white?text=Civic+2',
          'https://placehold.co/400x300/2574FF/white?text=Civic+3',
          'https://placehold.co/400x300/2574FF/white?text=Civic+4',
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-10T07:00:00'
      },
      {
        id: 18,
        name: 'Accord',
        images: [null, null, null, null, null, null],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: null
      },
      {
        id: 19,
        name: 'HR-V',
        images: [
          'https://placehold.co/400x300/2574FF/white?text=HRV+1',
          null,
          null,
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-04T10:20:00'
      },
      {
        id: 20,
        name: 'CR-V',
        images: [null, null, null, null, null, null],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: null
      }
    ]
  },
  {
    id: 3,
    name: 'Deepal',
    logo: 'https://placehold.co/100x100/36B37E/white?text=Deepal',
    order: 3,
    isActive: true,
    models: [
      {
        id: 7,
        name: 'S07',
        images: [
          'https://placehold.co/400x300/36B37E/white?text=S07+1',
          'https://placehold.co/400x300/36B37E/white?text=S07+2',
          'https://placehold.co/400x300/36B37E/white?text=S07+3',
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-09T15:30:00'
      },
      {
        id: 8,
        name: 'S05',
        images: [
          'https://placehold.co/400x300/36B37E/white?text=S05+1',
          'https://placehold.co/400x300/36B37E/white?text=S05+2',
          null,
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-08T12:00:00'
      }
    ]
  },
  {
    id: 4,
    name: 'Nissan',
    logo: 'https://placehold.co/100x100/FFAB00/white?text=Nissan',
    order: 4,
    isActive: true,
    models: [
      {
        id: 9,
        name: 'Almera',
        images: [
          'https://placehold.co/400x300/FFAB00/white?text=Almera+1',
          null,
          null,
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-03T09:00:00'
      },
      {
        id: 10,
        name: 'Kicks',
        images: [
          'https://placehold.co/400x300/FFAB00/white?text=Kicks+1',
          'https://placehold.co/400x300/FFAB00/white?text=Kicks+2',
          null,
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-07T11:30:00'
      },
      {
        id: 21,
        name: 'Note',
        images: [null, null, null, null, null, null],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: null
      }
    ]
  },
  {
    id: 5,
    name: 'Mazda',
    logo: 'https://placehold.co/100x100/9B59B6/white?text=Mazda',
    order: 5,
    isActive: true,
    models: [
      {
        id: 11,
        name: 'Mazda 2',
        images: [
          'https://placehold.co/400x300/9B59B6/white?text=Mazda2+1',
          'https://placehold.co/400x300/9B59B6/white?text=Mazda2+2',
          null,
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-06T14:00:00'
      },
      {
        id: 12,
        name: 'Mazda 3',
        images: [
          'https://placehold.co/400x300/9B59B6/white?text=Mazda3+1',
          null,
          null,
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-02T16:00:00'
      },
      {
        id: 13,
        name: 'CX-5',
        images: [
          'https://placehold.co/400x300/9B59B6/white?text=CX5+1',
          'https://placehold.co/400x300/9B59B6/white?text=CX5+2',
          'https://placehold.co/400x300/9B59B6/white?text=CX5+3',
          null,
          null,
          null
        ],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: '2025-12-09T09:45:00'
      },
      {
        id: 22,
        name: 'CX-30',
        images: [null, null, null, null, null, null],
        displayOrder: [1, 2, 3, 4, 5, 6],
        isActive: true,
        lastImageUpdate: null
      }
    ]
  }
])

export const useApi = () => {
  // ===== Banners =====
  const getBanners = async () => {
    return [...mockBanners.value].sort((a, b) => a.order - b.order)
  }

  const getBanner = async (id) => {
    return mockBanners.value.find(b => b.id === parseInt(id))
  }

  const createBanner = async (data) => {
    const newId = Math.max(...mockBanners.value.map(b => b.id)) + 1
    const newBanner = { ...data, id: newId }
    mockBanners.value.push(newBanner)
    return newBanner
  }

  const updateBanner = async (id, data) => {
    const index = mockBanners.value.findIndex(b => b.id === parseInt(id))
    if (index !== -1) {
      mockBanners.value[index] = { ...mockBanners.value[index], ...data }
      return mockBanners.value[index]
    }
    return null
  }

  const deleteBanner = async (id) => {
    const index = mockBanners.value.findIndex(b => b.id === parseInt(id))
    if (index !== -1) {
      mockBanners.value.splice(index, 1)
      return true
    }
    return false
  }

  const reorderBanners = async (items) => {
    items.forEach((item, index) => {
      const banner = mockBanners.value.find(b => b.id === item.id)
      if (banner) banner.order = index + 1
    })
    return true
  }

  // ===== Promotions =====
  const getPromotions = async () => {
    return [...mockPromotions.value].sort((a, b) => a.order - b.order)
  }

  const getPromotion = async (id) => {
    return mockPromotions.value.find(p => p.id === parseInt(id))
  }

  const createPromotion = async (data) => {
    const newId = Math.max(...mockPromotions.value.map(p => p.id)) + 1
    const newPromotion = { ...data, id: newId }
    mockPromotions.value.push(newPromotion)
    return newPromotion
  }

  const updatePromotion = async (id, data) => {
    const index = mockPromotions.value.findIndex(p => p.id === parseInt(id))
    if (index !== -1) {
      mockPromotions.value[index] = { ...mockPromotions.value[index], ...data }
      return mockPromotions.value[index]
    }
    return null
  }

  const deletePromotion = async (id) => {
    const index = mockPromotions.value.findIndex(p => p.id === parseInt(id))
    if (index !== -1) {
      mockPromotions.value.splice(index, 1)
      return true
    }
    return false
  }

  // ===== Provinces =====
  const getProvinces = async () => {
    return [...mockProvinces.value].sort((a, b) => a.order - b.order)
  }

  const getProvince = async (id) => {
    return mockProvinces.value.find(p => p.id === parseInt(id))
  }

  const createProvince = async (data) => {
    const newId = Math.max(...mockProvinces.value.map(p => p.id)) + 1
    const newProvince = { ...data, id: newId }
    mockProvinces.value.push(newProvince)
    return newProvince
  }

  const updateProvince = async (id, data) => {
    const index = mockProvinces.value.findIndex(p => p.id === parseInt(id))
    if (index !== -1) {
      mockProvinces.value[index] = { ...mockProvinces.value[index], ...data }
      return mockProvinces.value[index]
    }
    return null
  }

  const deleteProvince = async (id) => {
    const index = mockProvinces.value.findIndex(p => p.id === parseInt(id))
    if (index !== -1) {
      mockProvinces.value.splice(index, 1)
      return true
    }
    return false
  }

  // ===== Branches =====
  const getBranches = async () => {
    return [...mockBranches.value]
  }

  // ===== Article Categories =====
  const getArticleCategories = async () => {
    return [...mockArticleCategories.value].sort((a, b) => a.order - b.order)
  }

  const getArticleCategory = async (id) => {
    return mockArticleCategories.value.find(c => c.id === parseInt(id))
  }

  const createArticleCategory = async (data) => {
    const newId = Math.max(...mockArticleCategories.value.map(c => c.id)) + 1
    const newCategory = { ...data, id: newId }
    mockArticleCategories.value.push(newCategory)
    return newCategory
  }

  const updateArticleCategory = async (id, data) => {
    const index = mockArticleCategories.value.findIndex(c => c.id === parseInt(id))
    if (index !== -1) {
      mockArticleCategories.value[index] = { ...mockArticleCategories.value[index], ...data }
      return mockArticleCategories.value[index]
    }
    return null
  }

  const deleteArticleCategory = async (id) => {
    const index = mockArticleCategories.value.findIndex(c => c.id === parseInt(id))
    if (index !== -1) {
      mockArticleCategories.value.splice(index, 1)
      return true
    }
    return false
  }

  // ===== Articles =====
  const getArticles = async () => {
    return [...mockArticles.value]
  }

  const getArticle = async (id) => {
    return mockArticles.value.find(a => a.id === parseInt(id))
  }

  const createArticle = async (data) => {
    const newId = Math.max(...mockArticles.value.map(a => a.id)) + 1
    const category = mockArticleCategories.value.find(c => c.id === data.categoryId)
    const newArticle = { ...data, id: newId, category: category?.name || '' }
    mockArticles.value.push(newArticle)
    return newArticle
  }

  const updateArticle = async (id, data) => {
    const index = mockArticles.value.findIndex(a => a.id === parseInt(id))
    if (index !== -1) {
      const category = mockArticleCategories.value.find(c => c.id === data.categoryId)
      mockArticles.value[index] = { ...mockArticles.value[index], ...data, category: category?.name || '' }
      return mockArticles.value[index]
    }
    return null
  }

  const deleteArticle = async (id) => {
    const index = mockArticles.value.findIndex(a => a.id === parseInt(id))
    if (index !== -1) {
      mockArticles.value.splice(index, 1)
      return true
    }
    return false
  }

  // ===== FAQ Categories =====
  const getFAQCategories = async () => {
    return [...mockFAQCategories.value].sort((a, b) => a.order - b.order)
  }

  const getFAQCategory = async (id) => {
    return mockFAQCategories.value.find(c => c.id === parseInt(id))
  }

  const createFAQCategory = async (data) => {
    const newId = Math.max(...mockFAQCategories.value.map(c => c.id)) + 1
    const newCategory = { ...data, id: newId }
    mockFAQCategories.value.push(newCategory)
    return newCategory
  }

  const updateFAQCategory = async (id, data) => {
    const index = mockFAQCategories.value.findIndex(c => c.id === parseInt(id))
    if (index !== -1) {
      mockFAQCategories.value[index] = { ...mockFAQCategories.value[index], ...data }
      return mockFAQCategories.value[index]
    }
    return null
  }

  const deleteFAQCategory = async (id) => {
    const index = mockFAQCategories.value.findIndex(c => c.id === parseInt(id))
    if (index !== -1) {
      mockFAQCategories.value.splice(index, 1)
      return true
    }
    return false
  }

  // ===== FAQs =====
  const getFAQs = async () => {
    return [...mockFAQs.value]
  }

  const getFAQ = async (id) => {
    return mockFAQs.value.find(f => f.id === parseInt(id))
  }

  const createFAQ = async (data) => {
    const newId = Math.max(...mockFAQs.value.map(f => f.id)) + 1
    const category = mockFAQCategories.value.find(c => c.id === data.categoryId)
    const newFAQ = { ...data, id: newId, category: category?.name || '' }
    mockFAQs.value.push(newFAQ)
    return newFAQ
  }

  const updateFAQ = async (id, data) => {
    const index = mockFAQs.value.findIndex(f => f.id === parseInt(id))
    if (index !== -1) {
      const category = mockFAQCategories.value.find(c => c.id === data.categoryId)
      mockFAQs.value[index] = { ...mockFAQs.value[index], ...data, category: category?.name || '' }
      return mockFAQs.value[index]
    }
    return null
  }

  const deleteFAQ = async (id) => {
    const index = mockFAQs.value.findIndex(f => f.id === parseInt(id))
    if (index !== -1) {
      mockFAQs.value.splice(index, 1)
      return true
    }
    return false
  }

  // ===== Accounts =====
  const getAccounts = async () => {
    return [...mockAccounts.value]
  }

  const getAccount = async (id) => {
    return mockAccounts.value.find(a => a.id === parseInt(id))
  }

  const createAccount = async (data) => {
    const newId = Math.max(...mockAccounts.value.map(a => a.id)) + 1
    const newAccount = { ...data, id: newId, lastLogin: null }
    mockAccounts.value.push(newAccount)
    return newAccount
  }

  const updateAccount = async (id, data) => {
    const index = mockAccounts.value.findIndex(a => a.id === parseInt(id))
    if (index !== -1) {
      mockAccounts.value[index] = { ...mockAccounts.value[index], ...data }
      return mockAccounts.value[index]
    }
    return null
  }

  const deleteAccount = async (id) => {
    const index = mockAccounts.value.findIndex(a => a.id === parseInt(id))
    if (index !== -1) {
      mockAccounts.value.splice(index, 1)
      return true
    }
    return false
  }

  // ===== Contact Us =====
  const getContactUs = async () => {
    return { ...mockContactUs.value }
  }

  const updateContactUs = async (data) => {
    mockContactUs.value = { ...mockContactUs.value, ...data }
    return mockContactUs.value
  }

  // ===== Contact Submissions =====
  const getContactSubmissions = async () => {
    return [...mockContactSubmissions.value].sort((a, b) =>
      new Date(b.createdAt) - new Date(a.createdAt)
    )
  }

  const markContactSubmissionRead = async (id, remark = '') => {
    const submission = mockContactSubmissions.value.find(s => s.id === parseInt(id))
    if (submission) {
      submission.isRead = true
      submission.readAt = new Date().toISOString()
      submission.readBy = 'Admin'
      submission.remark = remark
      return submission
    }
    return null
  }

  // ===== Privacy Policy =====
  const getPrivacyPolicy = async () => {
    return { ...mockPrivacyPolicy.value }
  }

  const updatePrivacyPolicy = async (data) => {
    mockPrivacyPolicy.value = { ...mockPrivacyPolicy.value, ...data }
    return mockPrivacyPolicy.value
  }

  // ===== App Banner =====
  const getAppBanner = async () => {
    return { ...mockAppBanner.value }
  }

  const updateAppBanner = async (data) => {
    mockAppBanner.value = { ...mockAppBanner.value, ...data }
    return mockAppBanner.value
  }

  // ===== Car Categories (ประเภทกลุ่มรถ) =====
  const getCarCategories = async () => {
    return [...mockCarCategories.value].sort((a, b) => a.order - b.order)
  }

  const getCarCategory = async (id) => {
    return mockCarCategories.value.find(c => c.id === parseInt(id))
  }

  const createCarCategory = async (data) => {
    const newId = Math.max(...mockCarCategories.value.map(c => c.id)) + 1
    const newCategory = { ...data, id: newId, carCount: 0 }
    mockCarCategories.value.push(newCategory)
    return newCategory
  }

  const updateCarCategory = async (id, data) => {
    const index = mockCarCategories.value.findIndex(c => c.id === parseInt(id))
    if (index !== -1) {
      mockCarCategories.value[index] = { ...mockCarCategories.value[index], ...data }
      return mockCarCategories.value[index]
    }
    return null
  }

  const deleteCarCategory = async (id) => {
    const index = mockCarCategories.value.findIndex(c => c.id === parseInt(id))
    if (index !== -1) {
      mockCarCategories.value.splice(index, 1)
      return true
    }
    return false
  }

  // ===== Car Brands & Models =====
  const getCarBrands = async () => {
    return mockCarBrands.value.map(brand => ({
      ...brand,
      models: [...brand.models]
    })).sort((a, b) => a.order - b.order)
  }

  const getCarBrand = async (id) => {
    const brand = mockCarBrands.value.find(b => b.id === parseInt(id))
    if (brand) {
      return { ...brand, models: [...brand.models] }
    }
    return null
  }

  const updateCarModelImages = async (brandId, modelId, images, displayOrder) => {
    const brand = mockCarBrands.value.find(b => b.id === parseInt(brandId))
    if (brand) {
      const model = brand.models.find(m => m.id === parseInt(modelId))
      if (model) {
        model.images = images
        model.displayOrder = displayOrder || [1, 2, 3, 4, 5, 6]
        return model
      }
    }
    return null
  }

  const updateCarModelStatus = async (brandId, modelId, isActive) => {
    const brand = mockCarBrands.value.find(b => b.id === parseInt(brandId))
    if (brand) {
      const model = brand.models.find(m => m.id === parseInt(modelId))
      if (model) {
        model.isActive = isActive
        return model
      }
    }
    return null
  }

  return {
    // Banners
    getBanners,
    getBanner,
    createBanner,
    updateBanner,
    deleteBanner,
    reorderBanners,
    // Promotions
    getPromotions,
    getPromotion,
    createPromotion,
    updatePromotion,
    deletePromotion,
    // Provinces
    getProvinces,
    getProvince,
    createProvince,
    updateProvince,
    deleteProvince,
    // Branches
    getBranches,
    // Article Categories
    getArticleCategories,
    getArticleCategory,
    createArticleCategory,
    updateArticleCategory,
    deleteArticleCategory,
    // Articles
    getArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
    // FAQ Categories
    getFAQCategories,
    getFAQCategory,
    createFAQCategory,
    updateFAQCategory,
    deleteFAQCategory,
    // FAQs
    getFAQs,
    getFAQ,
    createFAQ,
    updateFAQ,
    deleteFAQ,
    // Accounts
    getAccounts,
    getAccount,
    createAccount,
    updateAccount,
    deleteAccount,
    // Contact Us
    getContactUs,
    updateContactUs,
    // Contact Submissions
    getContactSubmissions,
    markContactSubmissionRead,
    // Privacy Policy
    getPrivacyPolicy,
    updatePrivacyPolicy,
    // App Banner
    getAppBanner,
    updateAppBanner,
    // Car Categories
    getCarCategories,
    getCarCategory,
    createCarCategory,
    updateCarCategory,
    deleteCarCategory,
    // Car Brands & Models
    getCarBrands,
    getCarBrand,
    updateCarModelImages,
    updateCarModelStatus
  }
}
