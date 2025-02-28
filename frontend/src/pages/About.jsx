import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t ' >
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt magnam perferendis harum iste sequi dolore sint ex perspiciatis amet voluptate minima fugiat, quo similique. Omnis ipsum qui aliquam voluptate.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur corrupti qui libero quasi aliquid dolorum rerum labore, sequi odit adipisci. Vel non nihil praesentium itaque eligendi ut iusto aliquid?</p>
      <b className='text-gray-800' >Our Mission</b>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facere, adipisci neque eaque modi eos laudantium nemo quod fuga doloribus eveniet rem consequuntur perferendis tenetur blanditiis ab voluptates at ea!</p>
      </div>
      </div>
      <div className='text-2xl py-4'>
    <Title text1={'WHY'} text2={"CHOOSE US"}/>
      </div>
      <div className='flex col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>
        Quality Assurance:
        </b>
<p className='text-gray-600'>Every piece is crafted with premium materials and undergoes strict quality checks to ensure durability, comfort, and style.</p>        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>
        Convinience:
        </b>
<p className='text-gray-600'>Shop effortlessly with easy navigation, seamless checkout, and hassle-free returns—making fashion shopping quick and stress-free</p>        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>
        Exceptional Customer Service: 
        </b>
<p className='text-gray-600'>Our dedicated support team is here to assist you with personalized help, fast responses, and a seamless shopping experience.</p>   
     </div>

      </div>
      <NewsletterBox/>
    </div>
   

  )
  
}


export default About