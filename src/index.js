const timedElements = Array.from(document.querySelectorAll("[brs-time-visibility]"))
timedElements.forEach((el) => {
   const timeString = el.getAttribute("brs-time-visibility").trim().replace(/ /g, "")
   const timeFromString = timeString.split("-")[0]
   const timeToString = timeString.split("-")[1]

   const isWithinTimeRange =
      !isCurrentTimeBefore(timeFromString) && isCurrentTimeBefore(timeToString)

   if (isWithinTimeRange) {
      const customDisplay = el.getAttribute("brs-time-visibility-display")?.trim().toLowerCase()
      el.style.display = customDisplay || "block"
   } else {
      el.style.display = "none"
   }
})

function isCurrentTimeBefore(targetTimeString) {
   const now = new Date()
   const [targetHours, targetMinutes] = targetTimeString.split(":").map(Number)
   const targetTime = new Date(now)
   targetTime.setHours(targetHours, targetMinutes, 0, 0)
   return now < targetTime
}
