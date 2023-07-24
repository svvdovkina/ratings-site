import { Button, Htag, Ptag, Tag } from '../components'
import Image from 'next/image'
import { redirect } from 'next/dist/server/api-utils'
import { useEffect, useState } from 'react'
import { Rating } from '../components/Rating/Rating';
import { Layout } from '../layout/Layout';

export default function Home() {

  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(3);


  return (
      <Layout>
        <Htag tag='h1'>Header</Htag>
        <Tag color='primary' href='/products'>hello</Tag>
        <Ptag size='l'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam velit tenetur praesentium hic culpa harum corrupti a aliquam autem ipsum quas amet provident placeat quod nulla, perspiciatis, sint, dicta reiciendis!</Ptag>
        <Ptag>{counter}</Ptag>
        <Button appearance='primary' onClick={()=>setCounter(counter + 1) }>
          Plus 1
        </Button>
        <Rating rating={rating}/>
        <Rating rating={rating} setRating={setRating} isEditable={true}/>
      </Layout>
  )
}
