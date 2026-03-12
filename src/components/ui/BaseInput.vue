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

const inputClasses = computed(() => [
  styles.input,
  props.error ? styles.inputHasError : "",
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
    <input
      :id="id"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :class="inputClasses"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${id}-error` : hint ? `${id}-hint` : undefined"
      @input="onInput"
    >
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
