import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'
import { Database } from './schema'

export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      host: 'localhost',
      port: 5432,
      user: 'username',
      password: 'password',
      database: 'postgres',
    }),
  }),
})
