<script setup lang="ts">
import { computed, useId } from "vue";
import styles from "./BaseInput.module.css";

defineOptions({ name: "BaseInput" });

const id = useId();

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    label?: string;
    error?: string;
    hint?: string;
    placeholder?: string;
    type?: string;
  }>(),
  {
    modelValue: "",
    label: "",
    error: "",
    hint: "",
    placeholder: "",
    type: "text",
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const wrapperClasses = computed(() => [
  styles.inputWrapper,
  props.error ? styles.inputWrapperHasError : "",
]);

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target?.value ?? "");
}
</script>

<template>
  <div :class="styles.wrap">
    <label
      v-if="label"
      :for="id"
      :class="styles.label"
    >
      {{ label }}
    </label>
    <div :class="wrapperClasses">
      <span
        v-if="$slots.icon"
        :class="styles.inputIcon"
        aria-hidden="true"
      >
        <slot name="icon" />
      </span>
      <input
        :id="id"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :class="styles.input"
        :aria-invalid="!!error"
        :aria-describedby="error ? `${id}-error` : hint ? `${id}-hint` : undefined"
        @input="onInput"
      >
    </div>
    <span
      v-if="hint && !error"
      :id="`${id}-hint`"
      :class="styles.hint"
    >
      {{ hint }}
    </span>
    <span
      v-if="error"
      :id="`${id}-error`"
      :class="styles.error"
      role="alert"
    >
      {{ error }}
    </span>
  </div>
</template>
