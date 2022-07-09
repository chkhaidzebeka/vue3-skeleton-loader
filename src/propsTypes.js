export const PROPS_TYPES = {
  string(defaultValue = "") {
    return {
      type: String,
      default: defaultValue,
    };
  },
  number(defaultValue) {
    return {
      type: Number,
      default: defaultValue,
    };
  },
  stringOrNumber(defaultValue) {
    return {
      type: [String, Number],
      default: defaultValue,
    };
  },
  boolean(defaultValue = false) {
    return {
      type: Boolean,
      default: defaultValue,
    };
  },
};
