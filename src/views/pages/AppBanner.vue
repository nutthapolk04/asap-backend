<template>
  <div class="app-banner-page">
    <div class="page-header">
      <h1>จัดการ Home Application Banner</h1>
    </div>

    <div class="content-card">
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-position="top"
        v-loading="loading"
      >
        <!-- Preview -->
        <div class="banner-preview">
          <h3>ตัวอย่างการแสดงผล</h3>
          <div class="preview-container" :style="{ backgroundColor: form.backgroundColor }">
            <div class="preview-content">
              <div class="preview-left">
                <img v-if="form.logoImage" :src="form.logoImage" class="preview-logo" />
                <h2 class="preview-title">{{ form.title || 'จองสะดวกขึ้นผ่านแอปเอแซ็ป' }}</h2>
                <p class="preview-description">{{ form.description || 'ค้นหารถเช่า check-in สะสม ASC Coin ผ่านแอป' }}</p>
                <div class="preview-buttons">
                  <img src="https://placehold.co/120x40/000/white?text=App+Store" class="store-badge" />
                  <img src="https://placehold.co/120x40/000/white?text=Google+Play" class="store-badge" />
                </div>
              </div>
              <div class="preview-right">
                <img v-if="form.bannerImage" :src="form.bannerImage" class="preview-banner-image" />
                <div v-else class="preview-placeholder">รูปภาพแบนเนอร์</div>
              </div>
            </div>
          </div>
        </div>

        <el-divider />

        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="รูปภาพแบนเนอร์ (แสดงทางขวา)" prop="bannerImage">
              <div class="image-upload-wrapper">
                <el-upload
                  class="image-uploader"
                  :show-file-list="false"
                  :auto-upload="false"
                  :on-change="(file) => handleImageChange(file, 'bannerImage')"
                  accept="image/*"
                >
                  <div v-if="form.bannerImage" class="uploaded-image">
                    <el-image :src="form.bannerImage" fit="contain" />
                    <div class="image-actions">
                      <el-button type="danger" size="small" @click.stop="form.bannerImage = ''">
                        <el-icon><Delete /></el-icon>
                        ลบรูป
                      </el-button>
                    </div>
                  </div>
                  <div v-else class="upload-placeholder">
                    <el-icon class="upload-icon"><Plus /></el-icon>
                    <span>อัปโหลดรูปภาพแบนเนอร์</span>
                    <p class="upload-hint">แนะนำขนาด 600x400 px (PNG โปร่งใส)</p>
                  </div>
                </el-upload>
              </div>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="โลโก้แอป" prop="logoImage">
              <div class="image-upload-wrapper">
                <el-upload
                  class="image-uploader logo-uploader"
                  :show-file-list="false"
                  :auto-upload="false"
                  :on-change="(file) => handleImageChange(file, 'logoImage')"
                  accept="image/*"
                >
                  <div v-if="form.logoImage" class="uploaded-image small">
                    <el-image :src="form.logoImage" fit="contain" />
                    <div class="image-actions">
                      <el-button type="danger" size="small" @click.stop="form.logoImage = ''">
                        <el-icon><Delete /></el-icon>
                      </el-button>
                    </div>
                  </div>
                  <div v-else class="upload-placeholder small">
                    <el-icon class="upload-icon"><Plus /></el-icon>
                    <span>โลโก้แอป</span>
                    <p class="upload-hint">100x100 px</p>
                  </div>
                </el-upload>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="หัวข้อ" prop="title">
              <el-input
                v-model="form.title"
                placeholder="เช่น จองสะดวกขึ้นผ่านแอปเอแซ็ป (asap app)"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="สีพื้นหลัง" prop="backgroundColor">
              <el-color-picker v-model="form.backgroundColor" show-alpha />
              <el-input v-model="form.backgroundColor" style="width: 150px; margin-left: 12px;" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="คำอธิบาย" prop="description">
          <el-input
            v-model="form.description"
            type="textarea"
            :rows="2"
            placeholder="เช่น ค้นหารถเช่า check-in สะสม ASC Coin ผ่านแอป"
          />
        </el-form-item>

        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="ลิงก์ App Store (iOS)" prop="appStoreLink">
              <el-input
                v-model="form.appStoreLink"
                placeholder="https://apps.apple.com/..."
              >
                <template #prefix>
                  <el-icon><Link /></el-icon>
                </template>
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="ลิงก์ Google Play (Android)" prop="googlePlayLink">
              <el-input
                v-model="form.googlePlayLink"
                placeholder="https://play.google.com/..."
              >
                <template #prefix>
                  <el-icon><Link /></el-icon>
                </template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="สถานะ">
          <el-switch
            v-model="form.isActive"
            active-text="แสดงบนหน้าเว็บ"
            inactive-text="ซ่อน"
          />
        </el-form-item>

        <el-divider />

        <div class="form-actions">
          <el-button type="primary" size="large" :loading="saving" @click="handleSubmit">
            <el-icon><Check /></el-icon>
            บันทึกการเปลี่ยนแปลง
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useApi } from '@/composables/useApi'

const { getAppBanner, updateAppBanner } = useApi()

const loading = ref(false)
const saving = ref(false)
const formRef = ref()

const form = reactive({
  title: '',
  description: '',
  bannerImage: '',
  logoImage: '',
  backgroundColor: '#FF595A',
  appStoreLink: '',
  googlePlayLink: '',
  isActive: true
})

const rules = {
  title: [{ required: true, message: 'กรุณากรอกหัวข้อ', trigger: 'blur' }]
}

const handleImageChange = (file, field) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    form[field] = e.target.result
  }
  reader.readAsDataURL(file.raw)
}

const fetchData = async () => {
  loading.value = true
  try {
    const data = await getAppBanner()
    Object.assign(form, data)
  } catch (error) {
    ElMessage.error('ไม่สามารถโหลดข้อมูลได้')
  } finally {
    loading.value = false
  }
}

const handleSubmit = async () => {
  if (!formRef.value) return

  await formRef.value.validate(async (valid) => {
    if (valid) {
      saving.value = true
      try {
        await updateAppBanner(form)
        ElMessage.success('บันทึกสำเร็จ')
      } catch (error) {
        ElMessage.error('เกิดข้อผิดพลาด')
      } finally {
        saving.value = false
      }
    }
  })
}

onMounted(() => {
  fetchData()
})
</script>

<style lang="scss" scoped>
.banner-preview {
  margin-bottom: 24px;

  h3 {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
  }
}

.preview-container {
  border-radius: 16px;
  padding: 40px;
  overflow: hidden;
}

.preview-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.preview-left {
  flex: 1;
  color: white;

  .preview-logo {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    margin-bottom: 16px;
  }

  .preview-title {
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 8px 0;
  }

  .preview-description {
    font-size: 14px;
    opacity: 0.9;
    margin: 0 0 20px 0;
  }

  .preview-buttons {
    display: flex;
    gap: 12px;

    .store-badge {
      height: 36px;
      border-radius: 6px;
    }
  }
}

.preview-right {
  flex-shrink: 0;

  .preview-banner-image {
    max-width: 300px;
    max-height: 200px;
    object-fit: contain;
  }

  .preview-placeholder {
    width: 200px;
    height: 150px;
    background: rgba(255,255,255,0.2);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.7);
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

  &.logo-uploader {
    :deep(.el-upload) {
      width: 150px;
    }
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

  &.small {
    width: 150px;
    height: 150px;
  }

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

  &.small {
    width: 150px;
    height: 150px;
  }

  &:hover {
    border-color: #FF595A;
  }

  .upload-icon {
    font-size: 32px;
    margin-bottom: 8px;
  }

  .upload-hint {
    font-size: 12px;
    margin-top: 8px;
    color: #bbb;
  }
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}
</style>
