import { Title, useRouteData } from 'solid-start'
import { createServerData$ } from 'solid-start/server'
import { testDb } from '~/server'

export function routeData() {
  return createServerData$(async (_, { request }) => {
    return await testDb()
  })
}

export default function Home() {
  const data = useRouteData<typeof routeData>()

  return (
    <main>
      <Title>Hello Kysely</Title>
      <h1>Hello world!</h1>
      {JSON.stringify(data)}
    </main>
  )
}
