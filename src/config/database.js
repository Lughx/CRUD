export const configSQL = {
    user: "sa",
    password: "YourPassword123!",
    database: "Lienzo",
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}
