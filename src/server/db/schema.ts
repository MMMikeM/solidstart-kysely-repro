export interface Database {
  test: TestTable;
}

import { Generated, Insertable, Selectable, Updateable } from "kysely";

export interface TestTable {
  id: Generated<string>;
  test: string;
  created_at: Generated<Date>;
}

export type UserRow = Selectable<TestTable>;
export type InsertableUserRow = Insertable<TestTable>;
export type UpdateableUserRow = Updateable<TestTable>;
