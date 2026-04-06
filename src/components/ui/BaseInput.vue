<script setup lang="ts">
import { computed, useId, useSlots } from "vue";
import styles from "./BaseInput.module.css";

defineOptions({ name: "BaseInput" });

const id = useId();
const slots = useSlots();

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    label?: string;
    error?: string;
    hint?: string;
    placeholder?: string;
    type?: string;
    appearance?: "default" | "login";
    autocomplete?: string;
    labelAlign?: "start" | "center";
  }>(),
  {
    modelValue: "",
    label: "",
    error: "",
    hint: "",
    placeholder: "",
    type: "text",
    appearance: "default",
    autocomplete: undefined,
    labelAlign: "start",
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const labelRowClass = computed(() => [
  styles.labelRow,
  slots.labelTrailing ? styles.labelRowWithExtra : "",
  props.labelAlign === "center" && !slots.labelTrailing
    ? styles.labelRowCenter
    : "",
]);

const wrapClass = computed(() => [
  styles.wrap,
  props.labelAlign === "center" ? styles.wrapLabelCentered : "",
]);

const labelClass = computed(() => [
  styles.label,
  props.appearance === "login" ? styles.labelLogin : "",
]);

const wrapperClasses = computed(() => [
  styles.inputWrapper,
  props.appearance === "login" ? styles.inputWrapperLogin : "",
  props.error ? styles.inputWrapperHasError : "",
]);

const describedBy = computed(() =>
  props.error ? `${id}-error` : props.hint ? `${id}-hint` : undefined,
);

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target?.value ?? "");
}
</script>

<template>
  <div :class="wrapClass">
    <div v-if="label" :class="labelRowClass">
      <label :for="id" :class="labelClass">
        {{ label }}
      </label>
      <span v-if="slots.labelTrailing" :class="styles.labelExtra">
        <slot name="labelTrailing" />
      </span>
    </div>
    <div :class="wrapperClasses">
      <span v-if="$slots.icon" :class="styles.inputIcon" aria-hidden="true">
        <slot name="icon" />
      </span>
      <input
        :id="id"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :class="styles.input"
        :aria-invalid="!!error"
        :aria-describedby="describedBy"
        @input="onInput"
      />
      <span v-if="slots.suffix" :class="styles.inputSuffix">
        <slot name="suffix" />
      </span>
    </div>
    <span v-if="hint && !error" :id="`${id}-hint`" :class="styles.hint">
      {{ hint }}
    </span>
    <span v-if="error" :id="`${id}-error`" :class="styles.error" role="alert">
      {{ error }}
    </span>
  </div>
</template>
