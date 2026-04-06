<script setup lang="ts">
import { LayoutGrid, LogOut } from "lucide-vue-next";
import { useRouter } from "vue-router";
import avatarImg from "@/assets/img/icone.png";
import { clearAuthSession } from "@/utils/authStorage";
import styles from "./Header.module.css";

defineOptions({ name: "AppHeader" });

const router = useRouter();

function onLogout() {
  clearAuthSession();
  void router.push({ name: "login" });
}
</script>

<template>
  <header :class="styles.header">
    <div :class="styles.container">
      <div :class="styles.brand">
        <div
          :class="styles.logo"
          aria-hidden="true"
        >
          <LayoutGrid
            :class="styles.logoIcon"
            :size="22"
          />
        </div>
        <h1 :class="styles.title">
          VueDesk
        </h1>
      </div>
      <div :class="styles.actions">
        <div :class="styles.userInfo">
          <span :class="styles.userName">Gabriel Silva</span>
          <div
            :class="styles.avatar"
            aria-hidden="true"
          >
            <img
              :src="avatarImg"
              alt=""
              :class="styles.avatarImg"
            >
          </div>
        </div>
        <button
          type="button"
          :class="styles.btnLogout"
          aria-label="Sair"
          @click="onLogout"
        >
          <LogOut
            :class="styles.iconLogout"
            :size="14"
            aria-hidden="true"
          />
          <span>Logout</span>
        </button>
      </div>
    </div>
  </header>
</template>
