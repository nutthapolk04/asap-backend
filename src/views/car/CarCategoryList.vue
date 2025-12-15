<template>
  <div class="car-category-list">
    <div class="page-header">
      <h1>จัดการประเภทกลุ่มรถ</h1>
      <el-button type="primary" @click="openDialog()">
        <el-icon><Plus /></el-icon>
        เพิ่มประเภทกลุ่มรถ
      </el-button>
    </div>

    <div class="content-card">
      <el-table
        v-loading="loading"
        :data="categories"
        style="width: 100%"
      >
        <el-table-column width="60" align="center">
          <template #default>
            <el-icon class="drag-handle"><Rank /></el-icon>
          </template>
        </el-table-column>

        <el-table-column prop="order" label="ลำดับ" width="80" align="center" />

        <el-table-column label="รูปภาพ" width="120" align="center">
          <template #default="{ row }">
            <el-image
              v-if="row.image"
              :src="row.image"
              :preview-src-list="[row.image]"
              fit="contain"
              class="category-image"
            />
            <div v-else class="no-image">
              <el-icon><Picture /></el-icon>
              <span>ไม่มีรูป</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="name" label="ชื่อประเภท" min-width="200" />

        <el-table-column prop="slug" label="Slug" min-width="150">
          <template #default="{ row }">
            <code>{{ row.slug }}</code>
          </template>
        </el-table-column>

        <el-table-column label="จำนวนรถ" width="100" align="center">
          <template #default="{ row }">
            <el-tag type="info">{{ row.carCount || 0 }} รุ่น</el-tag>
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
              <el-button type="primary" text @click="openDialog(row)">
                <el-icon><Edit /></el-icon>
              </el-button>
              <el-button type="danger" text @click="handleDelete(row)">
                <el-icon><Delete /></el-icon>
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- Dialog -->
    <el-dialog
      v-model="dialogVisible"
      :title="editingCategory ? 'แก้ไขประเภทกลุ่มรถ' : 'เพิ่มประเภทกลุ่มรถ'"
      width="600px"
    >
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-position="top"
      >
        <el-form-item label="รูปภาพประเภทกลุ่มรถ" prop="image">
          <div class="image-upload-wrapper">
            <el-upload
              class="image-uploader"
              :show-file-list="false"
              :auto-upload="false"
              :on-change="handleImageChange"
              accept="image/*"
            >
              <div v-if="form.image" class="uploaded-image">
                <el-image :src="form.image" fit="contain" />
                <div class="image-actions">
                  <el-button type="danger" size="small" @click.stop="removeImage">
                    <el-icon><Delete /></el-icon>
                    ลบรูป
                  </el-button>
                </div>
              </div>
              <div v-else class="upload-placeholder">
                <el-icon class="upload-icon"><Plus /></el-icon>
                <span>อัปโหลดรูปภาพ</span>
                <p class="upload-hint">แนะนำขนาด 400x300 px</p>
              </div>
            </el-upload>
          </div>
        </el-form-item>

        <el-form-item label="ชื่อประเภทกลุ่มรถ" prop="name">
          <el-input
            v-model="form.name"
            placeholder="เช่น Economy, SUV, EV Car"
            @blur="generateSlug"
          />
        </el-form-item>

        <el-form-item label="Slug" prop="slug">
          <el-input v-model="form.slug" placeholder="auto-generate" />
        </el-form-item>

        <el-form-item label="ลำดับ" prop="order">
          <el-input-number v-model="form.order" :min="1" style="width: 100%;" />
        </el-form-item>

        <el-form-item label="สถานะ">
          <el-switch
            v-model="form.isActive"
            active-text="เปิดใช้งาน"
            inactive-text="ปิดใช้งาน"
          />
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button @click="dialogVisible = false">ยกเลิก</el-button>
        <el-button type="primary" :loading="saving" @click="handleSubmit">
          บันทึก
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useApi } from '@/composables/useApi'

const {
  getCarCategories,
  createCarCategory,
  updateCarCategory,
  deleteCarCategory
} = useApi()

const loading = ref(false)
const saving = ref(false)
const dialogVisible = ref(false)
const categories = ref([])
const editingCategory = ref(null)
const formRef = ref()

const form = reactive({
  name: '',
  slug: '',
  image: '',
  order: 1,
  isActive: true
})

const rules = {
  name: [{ required: true, message: 'กรุณากรอกชื่อประเภทกลุ่มรถ', trigger: 'blur' }],
  slug: [{ required: true, message: 'กรุณากรอก Slug', trigger: 'blur' }],
  order: [{ required: true, message: 'กรุณากรอกลำดับ', trigger: 'blur' }]
}

const generateSlug = () => {
  if (form.name && !form.slug) {
    form.slug = form.name
      .toLowerCase()
      .replace(/[^\w\sก-๙-]/g, '')
      .replace(/\s+/g, '-')
  }
}

const handleImageChange = (file) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    form.image = e.target.result
  }
  reader.readAsDataURL(file.raw)
}

const removeImage = () => {
  form.image = ''
}

const fetchCategories = async () => {
  loading.value = true
  try {
    categories.value = await getCarCategories()
  } catch (error) {
    ElMessage.error('ไม่สามารถโหลดข้อมูลได้')
  } finally {
    loading.value = false
  }
}

const openDialog = (category = null) => {
  editingCategory.value = category
  if (category) {
    Object.assign(form, {
      name: category.name,
      slug: category.slug,
      image: category.image,
      order: category.order,
      isActive: category.isActive
    })
  } else {
    form.name = ''
    form.slug = ''
    form.image = ''
    form.order = categories.value.length + 1
    form.isActive = true
  }
  dialogVisible.value = true
}

const handleSubmit = async () => {
  if (!formRef.value) return

  await formRef.value.validate(async (valid) => {
    if (valid) {
      saving.value = true
      try {
        if (editingCategory.value) {
          await updateCarCategory(editingCategory.value.id, form)
          ElMessage.success('แก้ไขประเภทกลุ่มรถสำเร็จ')
        } else {
          await createCarCategory(form)
          ElMessage.success('สร้างประเภทกลุ่มรถสำเร็จ')
        }
        dialogVisible.value = false
        fetchCategories()
      } catch (error) {
        ElMessage.error('เกิดข้อผิดพลาด')
      } finally {
        saving.value = false
      }
    }
  })
}

const handleStatusChange = async (row) => {
  try {
    await updateCarCategory(row.id, { isActive: row.isActive })
    ElMessage.success('อัปเดตสถานะสำเร็จ')
  } catch (error) {
    ElMessage.error('ไม่สามารถอัปเดตสถานะได้')
    row.isActive = !row.isActive
  }
}

const handleDelete = async (row) => {
  try {
    await ElMessageBox.confirm(
      `คุณต้องการลบประเภทกลุ่มรถ "${row.name}" ใช่หรือไม่?`,
      'ยืนยันการลบ',
      {
        confirmButtonText: 'ลบ',
        cancelButtonText: 'ยกเลิก',
        type: 'warning'
      }
    )

    await deleteCarCategory(row.id)
    ElMessage.success('ลบประเภทกลุ่มรถสำเร็จ')
    fetchCategories()
  } catch (error) {
    if (error !== 'cancel') {
      ElMessage.error('ไม่สามารถลบได้')
    }
  }
}

onMounted(() => {
  fetchCategories()
})
</script>

<style lang="scss" scoped>
.drag-handle {
  cursor: move;
  color: #999;
}

.table-actions {
  display: flex;
  justify-content: center;
  gap: 4px;
}

code {
  background: #f5f5f5;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 13px;
}

.category-image {
  width: 80px;
  height: 60px;
  border-radius: 8px;
  border: 1px solid #eee;
}

.no-image {
  width: 80px;
  height: 60px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 12px;

  .el-icon {
    font-size: 20px;
    margin-bottom: 4px;
  }
}

.image-upload-wrapper {
  width: 100%;
}

.image-uploader {
  width: 100%;

  :deep(.el-upload) {
    width: 100%;
  }
}

.uploaded-image {
  width: 100%;
  height: 200px;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 8px;
  overflow: hidden;
  background: #fafafa;

  .el-image {
    width: 100%;
    height: 100%;
  }

  .image-actions {
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
}

.upload-placeholder {
  width: 100%;
  height: 200px;
  border: 2px dashed #dcdfe6;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999;
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: #FF595A;
  }

  .upload-icon {
    font-size: 40px;
    margin-bottom: 8px;
  }

  .upload-hint {
    font-size: 12px;
    margin-top: 8px;
    color: #bbb;
  }
}
</style>
