import { extendTheme } from "native-base"

export default extendTheme({
  fontConfig: {
    SpaceMono: {
      400: {
        normal: "SpaceMono-Regular",
        italic: "SpaceMono-Italic"
      },
      800: {
        normal: "SpaceMono-Bold",
        italic: "SpaceMono-BoldItalic"
      },
    }
  },
  fonts: {
    heading: "SpaceMono"
  }
})