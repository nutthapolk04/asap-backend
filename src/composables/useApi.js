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

const mockProvinces = ref([
  {
    id: 1,
    name: 'กรุงเทพมหานคร',
    image: 'https://placehold.co/570x320/FF595A/white?text=Bangkok',
    link: '/search?province=bangkok',
    order: 1,
    isActive: true
  },
  {
    id: 2,
    name: 'ภูเก็ต',
    image: 'https://placehold.co/570x320/2574FF/white?text=Phuket',
    link: '/search?province=phuket',
    order: 2,
    isActive: true
  },
  {
    id: 3,
    name: 'กระบี่',
    image: 'https://placehold.co/570x320/36B37E/white?text=Krabi',
    link: '/search?province=krabi',
    order: 3,
    isActive: true
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
    status: 'published'
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
    status: 'published'
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
    status: 'draft'
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

const mockPrivacyPolicy = ref({
  title: 'นโยบายความเป็นส่วนตัว',
  content: '<h2>1. ข้อมูลที่เราเก็บรวบรวม</h2><p>เราเก็บรวบรวมข้อมูลส่วนบุคคลที่คุณให้กับเรา...</p>',
  lastUpdated: '2025-11-01'
})

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

  // ===== Privacy Policy =====
  const getPrivacyPolicy = async () => {
    return { ...mockPrivacyPolicy.value }
  }

  const updatePrivacyPolicy = async (data) => {
    mockPrivacyPolicy.value = { ...mockPrivacyPolicy.value, ...data }
    return mockPrivacyPolicy.value
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
    // Privacy Policy
    getPrivacyPolicy,
    updatePrivacyPolicy
  }
}
