export const validation = {
  methods: {
    required() {
      return (val) => !!val || 'لطفا این فیلد را تکمیل کنید!'
    },
    minLength(min: number) {
      return (val) =>
        val.trim().length > min || `باید بزرگتر از ${min} کارکتر باشد `
    },
    maxLength(max: number) {
      return (val) =>
        val.trim().length < max || `باید کوچیکتر از ${max} کارکتر باشد `
    },
  },
}
