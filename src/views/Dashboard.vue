<template>
  <div class="dashboard">
    <div class="page-header">
      <h1>แดชบอร์ด</h1>
    </div>

    <!-- Stats Grid -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-card-icon stat-card-icon--primary">
          <el-icon :size="24"><Picture /></el-icon>
        </div>
        <div class="stat-card-value">{{ stats.banners }}</div>
        <div class="stat-card-label">แบนเนอร์</div>
      </div>

      <div class="stat-card">
        <div class="stat-card-icon stat-card-icon--success">
          <el-icon :size="24"><Discount /></el-icon>
        </div>
        <div class="stat-card-value">{{ stats.promotions }}</div>
        <div class="stat-card-label">โปรโมชั่น</div>
      </div>

      <div class="stat-card">
        <div class="stat-card-icon stat-card-icon--warning">
          <el-icon :size="24"><Notebook /></el-icon>
        </div>
        <div class="stat-card-value">{{ stats.articles }}</div>
        <div class="stat-card-label">บทความ</div>
      </div>

      <div class="stat-card">
        <div class="stat-card-icon stat-card-icon--info">
          <el-icon :size="24"><QuestionFilled /></el-icon>
        </div>
        <div class="stat-card-value">{{ stats.faqs }}</div>
        <div class="stat-card-label">คำถามที่พบบ่อย</div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="content-card">
      <h3 class="section-title">ทางลัด</h3>
      <div class="quick-actions">
        <el-button type="primary" @click="$router.push('/banners/create')">
          <el-icon><Plus /></el-icon>
          เพิ่มแบนเนอร์
        </el-button>
        <el-button @click="$router.push('/promotions/create')">
          <el-icon><Plus /></el-icon>
          เพิ่มโปรโมชั่น
        </el-button>
        <el-button @click="$router.push('/articles/create')">
          <el-icon><Plus /></el-icon>
          เพิ่มบทความ
        </el-button>
        <el-button @click="$router.push('/faqs/create')">
          <el-icon><Plus /></el-icon>
          เพิ่มคำถาม
        </el-button>
      </div>
    </div>

    <!-- Recent Content -->
    <div class="dashboard-grid">
      <div class="content-card">
        <div class="card-header">
          <h3 class="section-title">บทความล่าสุด</h3>
          <el-button text type="primary" @click="$router.push('/articles')">
            ดูทั้งหมด
          </el-button>
        </div>
        <el-table :data="recentArticles" style="width: 100%">
          <el-table-column prop="title" label="หัวข้อ" />
          <el-table-column prop="category" label="หมวดหมู่" width="120" />
          <el-table-column prop="status" label="สถานะ" width="100">
            <template #default="{ row }">
              <span :class="['status-badge', `status-badge--${row.status}`]">
                {{ row.status === 'published' ? 'เผยแพร่' : 'ฉบับร่าง' }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="วันที่" width="120" />
        </el-table>
      </div>

      <div class="content-card">
        <div class="card-header">
          <h3 class="section-title">โปรโมชั่นที่กำลังแสดง</h3>
          <el-button text type="primary" @click="$router.push('/promotions')">
            ดูทั้งหมด
          </el-button>
        </div>
        <div class="promotion-list">
          <div
            v-for="promo in activePromotions"
            :key="promo.id"
            class="promotion-item"
          >
            <img :src="promo.image" :alt="promo.title" />
            <div class="promotion-info">
              <div class="promotion-title">{{ promo.title }}</div>
              <div class="promotion-date">
                {{ promo.startDate }} - {{ promo.endDate }}
              </div>
            </div>
          </div>
          <div v-if="activePromotions.length === 0" class="empty-state">
            <p>ไม่มีโปรโมชั่นที่กำลังแสดง</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Mock data - จะเปลี่ยนเป็นข้อมูลจริงภายหลัง
const stats = ref({
  banners: 3,
  promotions: 2,
  articles: 15,
  faqs: 24
})

const recentArticles = ref([
  { id: 1, title: '10 เส้นทางท่องเที่ยวยอดนิยม', category: 'ท่องเที่ยว', status: 'published', date: '28/11/2025' },
  { id: 2, title: 'วิธีเช่ารถสำหรับมือใหม่', category: 'แนะนำ', status: 'published', date: '27/11/2025' },
  { id: 3, title: 'โปรโมชั่นส่งท้ายปี 2025', category: 'โปรโมชั่น', status: 'draft', date: '26/11/2025' }
])

const activePromotions = ref([
  {
    id: 1,
    title: 'Mom\'s Day Special',
    image: 'https://placehold.co/300x200/FF595A/white?text=Promo+1',
    startDate: '01/11/2025',
    endDate: '30/11/2025'
  },
  {
    id: 2,
    title: 'September Double Deal',
    image: 'https://placehold.co/300x200/FF595A/white?text=Promo+2',
    startDate: '01/11/2025',
    endDate: '31/12/2025'
  }
])
</script>

<style lang="scss" scoped>
.dashboard {
  .section-title {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }
}

.quick-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.promotion-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.promotion-item {
  display: flex;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: #f9f9f9;

  img {
    width: 80px;
    height: 60px;
    border-radius: 6px;
    object-fit: cover;
  }
}

.promotion-info {
  flex: 1;
}

.promotion-title {
  font-weight: 600;
  margin-bottom: 4px;
}

.promotion-date {
  font-size: 12px;
  color: #999;
}

.empty-state {
  padding: 40px;
  text-align: center;
  color: #999;
}
</style>
