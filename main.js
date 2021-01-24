import axios from 'axios'
import { parse } from 'node-html-parser'

const MIN_DATE = new Date("2021-02-23")
const MAX_DATE = new Date("2021-03-31")

axios.get("https://allocation.miq.govt.nz/portal/").then(response => {

  const document = parse(response.data)
  const calendarEl = document.querySelector("#accommodation-calendar-home")
  const arrivalDatesRaw = calendarEl.getAttribute("data-arrival-dates")


  const arrivalDates = arrivalDatesRaw.split("_").map(
    date => new Date(date)
  ).filter(
    date => date >= MIN_DATE && date <= MAX_DATE
  )

  // Email it
  console.log(arrivalDates)
})
