import pg from 'pg'
import { Kysely, PostgresDialect } from 'kysely'
import { Database } from './schema'
import type { ConnectionConfig } from 'pg'
import { migrateToLatest } from './migrate'

const { Pool } = pg

const config: ConnectionConfig = {
  host: 'localhost',
  port: 5432,
  user: 'username',
  password: 'password',
  database: 'postgres',
}

export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool(config),
  }),
})

migrateToLatest(db)
