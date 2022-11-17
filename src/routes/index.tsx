import { For } from 'solid-js'
import { Title, useRouteData } from 'solid-start'
import { createServerData$ } from 'solid-start/server'
import { testDb } from '~/server'

export function routeData() {
  return createServerData$(async (_, { request }) => {
    const data = await testDb()
    return data
  })
}

export default function Home() {
  const data = useRouteData<typeof routeData>()

  return (
    <main>
      <Title>Hello Kysely</Title>
      <h1>Hello world!</h1>
      <For each={[data()]}>
        {({ id, test }) => <ShowData id={id} test={test} />}
      </For>
    </main>
  )
}

const ShowData = (props: { id: string; test: string }) => {
  return (
    <>
      <h2>{props.id}</h2>
      <h2>{props.test}</h2>
    </>
  )
}
