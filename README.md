# v-skeleton

## super simple skeleton component for Vue3, this component gives you just one div that has pre-defined styles (customizable with props)

## Demo

![demo](https://s8.gifyu.com/images/demoa85db93cbb1dc124.gif)

### props

```js
width: {
  type: String,
  default: "100%",
},
height: {
  type: [String, Number],
  default: "100%",
},
bgColor: {
  type: String,
  default: "rgba(0, 0, 0, 0.12)",
},
borderRadius: {
  type: String,
  default: "5px",
},
circle: {
  type: Boolean,
  default: false,
},
title: {
  type: String,
  default: "",
},
placeText: {
  type: String,
  default: "center",
},
placeItems: {
  type: String,
  default: "center",
},
textRotation: {
  type: String,
  default: "0deg",
},
textColor: {
  type: String,
  default: "rgba(0, 0, 0, 0.2)",
},
textFont: {
  type: String,
  default: "inherit",
},
textFontSize: {
  type: String,
  default: "1.5em",
},
```

### Example usages

_import component from node modules_

```js
<script setup>import vSkeleton from '@bch_/v-skeleton'</script>
```

_then_

```html
<template>
  <v-skeleton class="min-h-[500px] min-w-sm" />
  <v-skeleton width="300px" height="400px" />
  <v-skeleton
    width="300px"
    height="300px"
    title="MY-SITE.COM"
    placeItems="center"
    textRotation="45deg"
  />
</template>
```

## Optional

if you have errors with your code editor/IDE when using typescript, consider adding the following to .d.ts file

```ts
declare module "@bch_/v-skeleton";
```
