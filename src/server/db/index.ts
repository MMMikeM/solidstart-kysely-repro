import pg from 'pg'
import { Kysely, PostgresDialect } from 'kysely'
import { Database } from './schema'
import type { ConnectionConfig } from 'pg'
import { migrateToLatest } from './migrate'
import { readFileSync } from 'fs'

const { Pool } = pg

const config: ConnectionConfig = {
  host: 'localhost',
  port: 5432,
  user: 'username',
  password: 'password',
  database: 'postgres',
}

const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool(config),
  }),
})

migrateToLatest(db)
export { db }
