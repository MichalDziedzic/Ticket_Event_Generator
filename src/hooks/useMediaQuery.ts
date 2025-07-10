import { ref, onMounted, onBeforeUnmount } from 'vue'

function useMediaQuery(query: string) {
  const mql = window.matchMedia(query)
  const matches = ref(mql.matches)

  const updateMenuState = (event: MediaQueryListEvent) => {
    matches.value = event.matches
  }

  onMounted(() => {
    mql.addEventListener('change', updateMenuState)
  })

  onBeforeUnmount(() => {
    mql.removeEventListener('change', updateMenuState)
  })

  return matches
}

export default useMediaQuery
