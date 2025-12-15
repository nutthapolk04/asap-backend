<template>
  <div class="article-list">
    <div class="page-header">
      <h1>จัดการบทความ</h1>
      <el-button type="primary" @click="$router.push('/articles/create')">
        <el-icon><Plus /></el-icon>
        เพิ่มบทความ
      </el-button>
    </div>

    <div class="content-card">
      <div class="card-toolbar">
        <div class="filters">
          <el-select
            v-model="filterCategory"
            placeholder="ทุกหมวดหมู่"
            clearable
            style="width: 180px;"
          >
            <el-option
              v-for="cat in categories"
              :key="cat.id"
              :label="cat.name"
              :value="cat.id"
            />
          </el-select>
          <el-select
            v-model="filterStatus"
            placeholder="ทุกสถานะ"
            clearable
            style="width: 140px;"
          >
            <el-option label="เผยแพร่แล้ว" value="published" />
            <el-option label="ฉบับร่าง" value="draft" />
          </el-select>
          <el-input
            v-model="searchQuery"
            placeholder="ค้นหาบทความ..."
            clearable
            style="width: 200px;"
            :prefix-icon="Search"
          />
        </div>
        <span class="item-count">ทั้งหมด {{ filteredArticles.length }} รายการ</span>
      </div>

      <el-table
        v-loading="loading"
        :data="filteredArticles"
        style="width: 100%"
      >
        <el-table-column label="รูปปก" width="100">
          <template #default="{ row }">
            <el-image
              :src="row.coverImage"
              fit="cover"
              style="width: 60px; height: 60px; border-radius: 4px;"
            />
          </template>
        </el-table-column>

        <el-table-column prop="title" label="หัวข้อ" min-width="250" />

        <el-table-column prop="category" label="หมวดหมู่" width="120" />

        <el-table-column label="แท็ก" min-width="200">
          <template #default="{ row }">
            <div class="tags-cell">
              <el-tag
                v-for="tag in (row.tags || []).slice(0, 3)"
                :key="tag"
                size="small"
                type="info"
                class="tag-item"
              >
                {{ tag }}
              </el-tag>
              <el-tag v-if="(row.tags || []).length > 3" size="small" type="info">
                +{{ row.tags.length - 3 }}
              </el-tag>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="publishedDate" label="วันที่" width="120">
          <template #default="{ row }">
            {{ formatDate(row.publishedDate) }}
          </template>
        </el-table-column>

        <el-table-column prop="status" label="สถานะ" width="120" align="center">
          <template #default="{ row }">
            <span :class="['status-badge', `status-badge--${row.status}`]">
              {{ row.status === 'published' ? 'เผยแพร่' : 'ฉบับร่าง' }}
            </span>
          </template>
        </el-table-column>

        <el-table-column label="จัดการ" width="150" align="center">
          <template #default="{ row }">
            <div class="table-actions">
              <el-button
                type="primary"
                text
                @click="$router.push(`/articles/${row.id}/edit`)"
              >
                <el-icon><Edit /></el-icon>
              </el-button>
              <el-button
                type="danger"
                text
                @click="handleDelete(row)"
              >
                <el-icon><Delete /></el-icon>
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import { useApi } from '@/composables/useApi'

const { getArticles, getArticleCategories, deleteArticle } = useApi()

const loading = ref(false)
const articles = ref([])
const categories = ref([])
const filterCategory = ref('')
const filterStatus = ref('')
const searchQuery = ref('')

const formatDate = (date) => {
  if (!date) return '-'
  return new Date(date).toLocaleDateString('th-TH', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

const filteredArticles = computed(() => {
  return articles.value.filter(article => {
    const matchCategory = !filterCategory.value || article.categoryId === filterCategory.value
    const matchStatus = !filterStatus.value || article.status === filterStatus.value
    const matchSearch = !searchQuery.value ||
      article.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchCategory && matchStatus && matchSearch
  })
})

const fetchData = async () => {
  loading.value = true
  try {
    const [articlesData, categoriesData] = await Promise.all([
      getArticles(),
      getArticleCategories()
    ])
    articles.value = articlesData
    categories.value = categoriesData
  } catch (error) {
    ElMessage.error('ไม่สามารถโหลดข้อมูลได้')
  } finally {
    loading.value = false
  }
}

const handleDelete = async (row) => {
  try {
    await ElMessageBox.confirm(
      `คุณต้องการลบบทความ "${row.title}" ใช่หรือไม่?`,
      'ยืนยันการลบ',
      {
        confirmButtonText: 'ลบ',
        cancelButtonText: 'ยกเลิก',
        type: 'warning'
      }
    )

    await deleteArticle(row.id)
    ElMessage.success('ลบบทความสำเร็จ')
    fetchData()
  } catch (error) {
    if (error !== 'cancel') {
      ElMessage.error('ไม่สามารถลบได้')
    }
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style lang="scss" scoped>
.card-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 12px;
}

.filters {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.item-count {
  color: #666;
  font-size: 14px;
}

.table-actions {
  display: flex;
  justify-content: center;
  gap: 4px;
}

.tags-cell {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  .tag-item {
    margin: 0;
  }
}
</style>
