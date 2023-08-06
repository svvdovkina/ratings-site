import { Button, Htag, Input, Ptag, Tag } from '../components'
import { useState } from 'react'
import { Rating } from '../components/Rating/Rating';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import axios from "axios";
import { MenuItem } from '../interfaces/menu.interface';
import Link from 'next/link';
import { TextArea } from '@/components/TextArea/TextArea';

function Home({menu}: HomeProps) : JSX.Element {

  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(3);


  return (
      <>
        <Htag tag='h1'>Header</Htag>
        <Tag color='primary' href='/products'>hello</Tag>
        <Ptag size='l'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam velit tenetur praesentium hic culpa harum corrupti a aliquam autem ipsum quas amet provident placeat quod nulla, perspiciatis, sint, dicta reiciendis!</Ptag>
        <Ptag>{counter}</Ptag>
        <Button appearance='primary' onClick={()=>setCounter(counter + 1) }>
          Plus 1
        </Button>
        <Rating rating={rating}/>
        <Rating rating={rating} setRating={setRating} isEditable={true}/>
        <Input placeholder='test'/>
        <TextArea/>
      </>
  )

}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async ()=>{
  const firstCategory = 0;
  const url = '/api/top-page/find';
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + url, {firstCategory});
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

