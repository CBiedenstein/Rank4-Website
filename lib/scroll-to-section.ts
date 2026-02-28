/**
 * Scrolls to a section's scroll room at a specific progress point.
 * For sticky scroll-room sections, native anchor scrolling goes to the
 * top of the scroll room (0% progress), but content may only be visible
 * at a later progress point. This function scrolls to a specific
 * percentage through the scroll room so content is immediately visible.
 */
export function scrollToSection(sectionId: string, targetProgress = 0.35) {
  const el = document.getElementById(sectionId)
  if (!el) return

  // Find the scroll-room container (the element with the tall height)
  const scrollRoom = el.closest("[data-scroll-room]") as HTMLElement | null
  if (!scrollRoom) {
    // Fallback to native scroll if no scroll room wrapper
    el.scrollIntoView({ behavior: "smooth" })
    return
  }

  const roomTop = scrollRoom.getBoundingClientRect().top + window.scrollY
  const totalScroll = scrollRoom.scrollHeight - window.innerHeight
  const targetScroll = roomTop + totalScroll * targetProgress

  window.scrollTo({ top: targetScroll, behavior: "smooth" })
}
