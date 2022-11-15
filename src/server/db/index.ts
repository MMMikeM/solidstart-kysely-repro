import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";
import { Database } from "./schema";
import type { ConnectionConfig } from "pg";

const confg: ConnectionConfig = {
  host: "localhost",
  port: 5432,
  user: "username",
  password: "password",
  database: "postgres",
};

const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool(confg),
  }),
});

export { db };
