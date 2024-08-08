import 'dotenv/config'

export const keys = {
    applicationID: import.meta.env.VITE_APPLICATION_ID,
    accesKey: import.meta.process.env.VITE_ACCES_KEY,
    secretKey: import.meta.process.env.VITE_SECRET_KEY,
}