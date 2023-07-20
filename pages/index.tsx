import { Button, Htag } from '../components'
import Image from 'next/image'
import { redirect } from 'next/dist/server/api-utils'

export default function Home() {
  return (
      <div>
        <Htag tag='h1'>Header</Htag>
        <Htag tag='h2'>Subheader</Htag>
        <Htag tag='h3'>Subsubheader</Htag>
        <Button appearance='primary' arrow='down' >Primary</Button>
        <Button appearance='ghost' arrow='right'>Ghost</Button>
      </div>
  )
}
