export const isDark = useColorMode({
  storageKey: 'theme',
  emitAuto: true,
})
export const toggleDark = useToggle(isDark)
