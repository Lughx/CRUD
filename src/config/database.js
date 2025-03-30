export const configSQL = {
    user: "sa",
    password: "Password123",
    database: "Lienzo",
    server: 'DESKTOP-SH6N7F1\\SQLExpress',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}
