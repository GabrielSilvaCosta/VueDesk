<script setup lang="ts">
import styles from "./BaseButton.module.css";

type ButtonVariant = "primary" | "secondary" | "danger";

defineOptions({ name: "BaseButton" });

withDefaults(
  defineProps<{
    variant?: ButtonVariant;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
  }>(),
  {
    variant: "primary",
    type: "button",
    disabled: false,
  },
);
</script>

<template>
  <button
    :class="[styles.button, styles[variant]]"
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
