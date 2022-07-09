<script setup>
import { PROPS_TYPES } from "./propsTypes";

const props = defineProps({
  width: {
    ...PROPS_TYPES.stringOrNumber("100%"),
  },
  height: {
    ...PROPS_TYPES.stringOrNumber("100%"),
  },
  bgColor: {
    ...PROPS_TYPES.string("rgba(0, 0, 0, 0.12)"),
  },
  borderRadius: {
    ...PROPS_TYPES.string("5px"),
  },
  circle: {
    ...PROPS_TYPES.boolean(false),
  },
  title: {
    ...PROPS_TYPES.string(),
  },
  placeText: {
    ...PROPS_TYPES.string("center"),
  },
  placeItems: {
    ...PROPS_TYPES.string("center"),
  },
  textRotation: {
    ...PROPS_TYPES.string("0deg"),
  },
  textColor: {
    ...PROPS_TYPES.string("rgba(0, 0, 0, 0.2)"),
  },
  textFont: {
    ...PROPS_TYPES.string("sans-serif"),
  },
  textFontSize: {
    ...PROPS_TYPES.string("1.5em"),
  },
});

const text = `'${props.title}'`;
const radius = props.circle ? "50%" : props.borderRadius;
</script>

<template>
  <div class="v-skeleton" />
</template>

<style scoped>
.v-skeleton {
  cursor: progress;
  overflow: hidden;
  position: relative;
  background-color: v-bind(bgColor);
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(radius);
}

.v-skeleton::after {
  animation: loading 1.2s infinite;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(-100%);
  z-index: 1;
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0.3),
    hsla(0, 0%, 100%, 0)
  );
}

.v-skeleton::before {
  display: grid;
  min-height: 100%;
  content: v-bind(text);
  font-family: v-bind(textFont);
  justify-content: v-bind(placeItems);
  align-items: v-bind(placeText);
  color: v-bind(textColor);
  font-size: v-bind(textFontSize);
  transform: rotate(v-bind(textRotation));
}

@keyframes loading {
  to {
    transform: translateX(100%);
  }
}
</style>
