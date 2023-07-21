import { Button, Htag, Ptag, Tag } from '../components'
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
        <Ptag size='l'>Hello there l</Ptag>
        <Ptag size='m'>Hello there mmmm</Ptag>
        <Ptag size='s'>Hello there small</Ptag>
        <Tag>hello</Tag>
        <Tag size='s' color='green'>hello</Tag>
        <Tag color='primary' href='/products'>hello</Tag>
      </div>
  )
}
