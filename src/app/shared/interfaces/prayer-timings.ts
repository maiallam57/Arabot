export interface PrayerTimings {
    code: number
    status: string
    data: Data
}
export interface Data {
    timings: Timings
    date: Date
}
export interface Timings {
    Fajr: string
    Sunrise: string
    Dhuhr: string
    Asr: string
    Sunset: string
    Maghrib: string
    Isha: string
    Imsak: string
    Midnight: string
    Firstthird: string
    Lastthird: string
}
export interface Date {
    readable: string
    hijri: Hijri
    gregorian: Gregorian
}
export interface Hijri {
    date: string
    format: string
    day: string
    year: string
}
export interface Gregorian {
    date: string
    format: string
    day: string
    year: string
}