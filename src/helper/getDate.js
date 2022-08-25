import dayjs from "dayjs"

export function getDate(date) {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ]
  const week = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]

  const localdate = date?.slice(0, 10)
  const d = dayjs(localdate)

  return {
    week: week[d.$W],
    day: d.$D,
    month: months[d.$M]
  }
}
