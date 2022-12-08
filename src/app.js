import express from 'express'
import { track } from 'medusa-telemetry'
import { scheduleJob } from 'node-schedule'
import loaders from './loaders'
import Logger from './loaders/logger'
import path from "path"

const EVERY_SIXTH_HOUR = '0 */6 * * *'
const CRON_SCHEDULE = EVERY_SIXTH_HOUR
const PORT = 9000

const app = express()

const serverActivity = Logger.activity(`Creating server`)

loaders({ directory: path.join(__dirname, '../'), expressApp: app })

app.listen(PORT, (err) => {
    if (err) {
        return
    }
    Logger.success(serverActivity, `Server is ready on port: ${PORT}`)
    track('CLI_START_COMPLETED')
})

scheduleJob(CRON_SCHEDULE, () => {
    track('PING')
})