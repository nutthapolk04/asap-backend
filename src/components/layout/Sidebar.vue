<template>
  <aside class="sidebar">
    <div class="sidebar-logo">
      <h1>ASAP</h1>
      <span>ระบบจัดการหลังบ้าน</span>
    </div>

    <el-menu
      :default-active="activeMenu"
      :router="true"
      class="sidebar-menu"
    >
      <el-menu-item index="/">
        <el-icon><DataAnalysis /></el-icon>
        <span>แดชบอร์ด</span>
      </el-menu-item>

      <el-sub-menu index="home-content">
        <template #title>
          <el-icon><House /></el-icon>
          <span>เนื้อหาหน้าแรก</span>
        </template>
        <el-menu-item index="/banners">
          <el-icon><Picture /></el-icon>
          <span>แบนเนอร์</span>
        </el-menu-item>
        <el-menu-item index="/promotions">
          <el-icon><Discount /></el-icon>
          <span>โปรโมชั่น</span>
        </el-menu-item>
        <el-menu-item index="/provinces">
          <el-icon><Location /></el-icon>
          <span>จังหวัด</span>
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="content">
        <template #title>
          <el-icon><Document /></el-icon>
          <span>จัดการเนื้อหา</span>
        </template>
        <el-menu-item index="/articles">
          <el-icon><Notebook /></el-icon>
          <span>บทความ</span>
        </el-menu-item>
        <el-menu-item index="/articles/categories">
          <el-icon><FolderOpened /></el-icon>
          <span>หมวดหมู่บทความ</span>
        </el-menu-item>
        <el-menu-item index="/faqs">
          <el-icon><QuestionFilled /></el-icon>
          <span>คำถามที่พบบ่อย</span>
        </el-menu-item>
        <el-menu-item index="/faqs/categories">
          <el-icon><FolderOpened /></el-icon>
          <span>หมวดหมู่คำถาม</span>
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="pages">
        <template #title>
          <el-icon><Files /></el-icon>
          <span>หน้าเพจ</span>
        </template>
        <el-menu-item index="/pages/contact">
          <el-icon><Phone /></el-icon>
          <span>ข้อมูลติดต่อ</span>
        </el-menu-item>
        <el-menu-item index="/pages/privacy">
          <el-icon><Lock /></el-icon>
          <span>นโยบายความเป็นส่วนตัว</span>
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="account">
        <template #title>
          <el-icon><User /></el-icon>
          <span>จัดการบัญชี</span>
        </template>
        <el-menu-item index="/accounts">
          <el-icon><UserFilled /></el-icon>
          <span>ผู้ใช้งานทั้งหมด</span>
        </el-menu-item>
        <el-menu-item index="/profile">
          <el-icon><Setting /></el-icon>
          <span>โปรไฟล์ของฉัน</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const activeMenu = computed(() => {
  return route.path
})
</script>

<style lang="scss" scoped>
.sidebar {
  &-logo {
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;

    h1 {
      font-size: 24px;
      color: #FF595A;
      font-weight: 700;
      margin: 0;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }

  &-menu {
    border-right: none;
    padding: 12px;

    .el-menu-item,
    :deep(.el-sub-menu__title) {
      border-radius: 8px;
      margin-bottom: 4px;

      &:hover {
        background-color: #FFF5F5;
      }
    }

    .el-menu-item.is-active {
      background-color: #FFF5F5;
      color: #FF595A;
    }
  }
}
</style>
