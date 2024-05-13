type Messages = typeof import("./src/messages/en.json");
type ArMessages = typeof import("./src/messages/ar.json");

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages, ArMessages {}
}
