/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import {createVuetify, ThemeDefinition} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
import {  mdi } from 'vuetify/iconsets/mdi'
import { aliases,fa } from 'vuetify/iconsets/fa'
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const lightTheme:ThemeDefinition={
  dark:false,
  colors:{
    "primary": "#65558F",
    "surfaceTint": "#6750A4",
    "onPrimary": "#FFFFFF",
    "primaryContainer": "#EADDFF",
    "onPrimaryContainer": "#21005D",
    "secondary": "#625B71",
    "onSecondary": "#FFFFFF",
    "secondaryContainer": "#E8DEF8",
    "onSecondaryContainer": "#1D192B",
    "tertiary": "#7D5260",
    "onTertiary": "#FFFFFF",
    "tertiaryContainer": "#FFD8E4",
    "onTertiaryContainer": "#31111D",
    "error": "#B3261E",
    "onError": "#FFFFFF",
    "errorContainer": "#F9DEDC",
    "onErrorContainer": "#410E0B",
    "background": "#FEF7FF",
    "onBackground": "#1D1B20",
    "surface": "#FEF7FF",
    "onSurface": "#1D1B20",
    "surfaceVariant": "#E7E0EC",
    "onSurfaceVariant": "#49454F",
    "outline": "#79747E",
    "outlineVariant": "#CAC4D0",
    "shadow": "#000000",
    "scrim": "#000000",
    "inverseSurface": "#322F35",
    "inverseOnSurface": "#F5EFF7",
    "inversePrimary": "#D0BCFF",
    "primaryFixed": "#EADDFF",
    "onPrimaryFixed": "#21005D",
    "primaryFixedDim": "#D0BCFF",
    "onPrimaryFixedVariant": "#4F378B",
    "secondaryFixed": "#E8DEF8",
    "onSecondaryFixed": "#1D192B",
    "secondaryFixedDim": "#CCC2DC",
    "onSecondaryFixedVariant": "#4A4458",
    "tertiaryFixed": "#FFD8E4",
    "onTertiaryFixed": "#31111D",
    "tertiaryFixedDim": "#EFB8C8",
    "onTertiaryFixedVariant": "#633B48",
    "surfaceDim": "#DED8E1",
    "surfaceBright": "#FEF7FF",
    "surfaceContainerLowest": "#FFFFFF",
    "surfaceContainerLow": "#F7F2FA",
    "surfaceContainer": "#F3EDF7",
    "surfaceContainerHigh": "#ECE6F0",
    "surfaceContainerHighest": "#E6E0E9"
  },
}

export default createVuetify({
  icons:{
    defaultSet: 'fa',
    aliases,
    sets: {
      mdi,
      fa
    },
  },
  components:{
    ...components,
    ...labsComponents
  },
  directives,
  theme: {
    defaultTheme: 'lightTheme',
    themes:{
      lightTheme
    }
  },
})
