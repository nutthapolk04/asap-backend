<template>
  <div class="province-list">
    <div class="page-header">
      <h1>จัดการจังหวัด</h1>
      <el-button
        type="primary"
        :disabled="provinces.length >= 10"
        @click="$router.push('/provinces/create')"
      >
        <el-icon><Plus /></el-icon>
        เพิ่มจังหวัด
      </el-button>
    </div>

    <div class="content-card">
      <div class="card-toolbar">
        <span class="item-count">ทั้งหมด {{ provinces.length }}/10 รายการ</span>
      </div>

      <el-table
        v-loading="loading"
        :data="provinces"
        style="width: 100%"
      >
        <el-table-column width="60" align="center">
          <template #default>
            <el-icon class="drag-handle"><Rank /></el-icon>
          </template>
        </el-table-column>

        <el-table-column prop="order" label="ลำดับ" width="80" align="center" />

        <el-table-column label="รูปภาพ" width="180">
          <template #default="{ row }">
            <el-image
              :src="row.image"
              fit="cover"
              style="width: 140px; height: 80px; border-radius: 4px;"
            />
          </template>
        </el-table-column>

        <el-table-column prop="name" label="ชื่อจังหวัด" min-width="150" />

        <el-table-column prop="link" label="ลิงก์" min-width="180">
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
                @click="$router.push(`/provinces/${row.id}/edit`)"
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

const { getProvinces, updateProvince, deleteProvince } = useApi()

const loading = ref(false)
const provinces = ref([])

const fetchProvinces = async () => {
  loading.value = true
  try {
    provinces.value = await getProvinces()
  } catch (error) {
    ElMessage.error('ไม่สามารถโหลดข้อมูลได้')
  } finally {
    loading.value = false
  }
}

const handleStatusChange = async (row) => {
  try {
    await updateProvince(row.id, { isActive: row.isActive })
    ElMessage.success('อัปเดตสถานะสำเร็จ')
  } catch (error) {
    ElMessage.error('ไม่สามารถอัปเดตสถานะได้')
    row.isActive = !row.isActive
  }
}

const handleDelete = async (row) => {
  try {
    await ElMessageBox.confirm(
      `คุณต้องการลบจังหวัด "${row.name}" ใช่หรือไม่?`,
      'ยืนยันการลบ',
      {
        confirmButtonText: 'ลบ',
        cancelButtonText: 'ยกเลิก',
        type: 'warning'
      }
    )

    await deleteProvince(row.id)
    ElMessage.success('ลบจังหวัดสำเร็จ')
    fetchProvinces()
  } catch (error) {
    if (error !== 'cancel') {
      ElMessage.error('ไม่สามารถลบได้')
    }
  }
}

onMounted(() => {
  fetchProvinces()
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
}

.text-muted {
  color: #999;
  font-size: 13px;
}

.drag-handle {
  cursor: move;
  color: #999;
}

.table-actions {
  display: flex;
  justify-content: center;
  gap: 4px;
}
</style>
