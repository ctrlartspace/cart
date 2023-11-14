import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { aliases, mdi } from "vuetify/iconsets/mdi-svg"

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    global: {
      ripple: false,
    },
    VCard: {
      elevation: 0,
    },
    VBtn: {
      class: "text-body-1",
    },
    VChip: {
      class: "text-body-1",
    },
    VAlert: {
      class: "text-body-1",
    },
    VTextField: {
      class: "text-body-1",
      density: "compact",
      variant: "outlined",
    },
    VSelect: {
      class: "text-body-1",
      density: "compact",
      variant: "outlined",
    },
    VListItemTitle: {
      class: "text-body-1",
    },
  },
})

export default vuetify
