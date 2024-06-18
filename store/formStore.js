import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    flightType: "",
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    adults: "",
    children: "",
    infants: "",
    clientEmail: "",
    clientPhone: "",
    clientName: "",
  }),
  actions: {
    updateField(key, value) {
      this[key] = value;
    },
  },
});
