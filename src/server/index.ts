import { db } from "./db";

export async function testDb() {
  return await db.selectFrom("test").selectAll().executeTakeFirstOrThrow();
}
