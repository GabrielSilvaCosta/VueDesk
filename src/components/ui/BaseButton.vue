<script setup lang="ts">
import { computed } from "vue";
import styles from "./BaseButton.module.css";

type ButtonVariant = "primary" | "secondary" | "danger" | "gradient";

defineOptions({ name: "BaseButton" });

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    loading?: boolean;
    loadingLabel?: string;
    fullWidth?: boolean;
  }>(),
  {
    variant: "primary",
    type: "button",
    disabled: false,
    loading: false,
    loadingLabel: "Loading…",
    fullWidth: false,
  },
);

const isDisabled = computed(() => props.disabled || props.loading);

const buttonClass = computed(() => [
  styles.button,
  styles[props.variant],
  props.fullWidth ? styles.fullWidth : "",
]);
</script>

<template>
  <button
    :class="buttonClass"
    :type="type"
    :disabled="isDisabled"
    :aria-busy="loading ? 'true' : undefined"
  >
    <template v-if="loading">
      <span
        :class="styles.spinner"
        aria-hidden="true"
      />
      <span :class="styles.srOnly">{{ loadingLabel }}</span>
    </template>
    <slot v-else />
  </button>
</template>
