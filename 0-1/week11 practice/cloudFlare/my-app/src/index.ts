import { Hono } from 'hono'

const app = new Hono()

app.post('/',  async (c) => {
  const body = await c.req.json()
  console.log('Body:', body)

  const someHeader = c.req.header("Authorization")
  console.log('Header:', someHeader)

  const param = c.req.query("param")
  console.log('Query param:', param)

  return c.text('Hello Hono!')
})

export default app
