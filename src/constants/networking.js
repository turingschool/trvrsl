export default undefined

const isProduction = process.env.NODE_ENV === 'production'
export const ASSET_PATH = Object.freeze(isProduction ? 'https://turingschool.github.io./trvrsl' : '')
export const TICKETS_URL = Object.freeze('https://www.eventbrite.com/e/2018-traversal-conf-tickets-45452007177')
