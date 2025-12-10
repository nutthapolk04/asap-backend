<template>
  <div class="banner-list">
    <div class="page-header">
      <h1>จัดการแบนเนอร์</h1>
      <el-button
        type="primary"
        :disabled="banners.length >= 5"
        @click="$router.push('/banners/create')"
      >
        <el-icon><Plus /></el-icon>
        เพิ่มแบนเนอร์
      </el-button>
    </div>

    <div class="content-card">
      <div class="card-toolbar">
        <span class="item-count">ทั้งหมด {{ banners.length }}/5 รายการ</span>
        <el-alert
          v-if="banners.length >= 5"
          title="ถึงจำนวนสูงสุดแล้ว (5 แบนเนอร์)"
          type="warning"
          :closable="false"
          show-icon
          style="width: auto;"
        />
      </div>

      <el-table
        v-loading="loading"
        :data="banners"
        style="width: 100%"
        row-key="id"
      >
        <el-table-column width="60" align="center">
          <template #default>
            <el-icon class="drag-handle"><Rank /></el-icon>
          </template>
        </el-table-column>

        <el-table-column prop="order" label="ลำดับ" width="80" align="center" />

        <el-table-column label="รูปภาพ" width="200">
          <template #default="{ row }">
            <el-image
              :src="row.imageDesktop"
              fit="cover"
              style="width: 160px; height: 60px; border-radius: 4px;"
            />
          </template>
        </el-table-column>

        <el-table-column prop="title" label="ชื่อแบนเนอร์" min-width="200" />

        <el-table-column prop="link" label="ลิงก์" min-width="150">
          <template #default="{ row }">
            <span v-if="row.link" class="link-text">{{ row.link }}</span>
            <span v-else class="text-muted">ไม่มีลิงก์</span>
          </template>
        </el-table-column>

        <el-table-column prop="isActive" label="สถานะ" width="100" align="center">
          <template #default="{ row }">
            <el-switch
              v-model="row.isActive"
              @change="handleStatusChange(row)"
            />
          </template>
        </el-table-column>

        <el-table-column label="จัดการ" width="150" align="center">
          <template #default="{ row }">
            <div class="table-actions">
              <el-button
                type="primary"
                text
                @click="$router.push(`/banners/${row.id}/edit`)"
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
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useApi } from '@/composables/useApi'

const { getBanners, updateBanner, deleteBanner } = useApi()

const loading = ref(false)
const banners = ref([])

const fetchBanners = async () => {
  loading.value = true
  try {
    banners.value = await getBanners()
  } catch (error) {
    ElMessage.error('ไม่สามารถโหลดข้อมูลได้')
  } finally {
    loading.value = false
  }
}

const handleStatusChange = async (row) => {
  try {
    await updateBanner(row.id, { isActive: row.isActive })
    ElMessage.success('อัปเดตสถานะสำเร็จ')
  } catch (error) {
    ElMessage.error('ไม่สามารถอัปเดตสถานะได้')
    row.isActive = !row.isActive
  }
}

const handleDelete = async (row) => {
  try {
    await ElMessageBox.confirm(
      `คุณต้องการลบแบนเนอร์ "${row.title}" ใช่หรือไม่?`,
      'ยืนยันการลบ',
      {
        confirmButtonText: 'ลบ',
        cancelButtonText: 'ยกเลิก',
        type: 'warning'
      }
    )

    await deleteBanner(row.id)
    ElMessage.success('ลบแบนเนอร์สำเร็จ')
    fetchBanners()
  } catch (error) {
    if (error !== 'cancel') {
      ElMessage.error('ไม่สามารถลบได้')
    }
  }
}

onMounted(() => {
  fetchBanners()
})
</script>

<style lang="scss" scoped>
.card-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.item-count {
  color: #666;
  font-size: 14px;
}

.link-text {
  color: #2574FF;
  font-size: 13px;
  word-break: break-all;
}

.text-muted {
  color: #999;
  font-size: 13px;
}

.drag-handle {
  cursor: move;
  color: #999;

  &:hover {
    color: #666;
  }
}

.table-actions {
  display: flex;
  justify-content: center;
  gap: 4px;
}
</style>
