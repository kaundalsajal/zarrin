import React from 'react'
import { newsletter } from '../data/home-page'
import Button from './ui/Button'
import Typography from './typography/Typography'
function NewsletterForm() {
  return (
    <div className='container min-w-full mt-47.75 p-33 flex items-center justify-center bg-primary'>
      <div className='container max-w-308 flex flex-col items-center '>
        <div className='container max-w-3xl text-center'>
          <Typography variant='h2' color='white' className='font-bold leading-12'>
            {newsletter.title}
          </Typography>
        </div>
        <form >
          <div className='continer flex justify-center gap-2 mt-12'>
            <input name='email' className='h-14 w-[320px] border-none outline-0 bg-white text-text-primary px-5.75 rounded-lg' placeholder='Your Email' type="text" />
            <Button type="submit" variant='whiteOutline' className='h-14 w-41.5'>Get Started</Button>
          </div>
        </form>
        <div className='text-center container max-w-138.75 mt-6 leading-6'>
          <Typography variant='body-sm' color='white' className='font-heading' >
            {newsletter.note}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default NewsletterForm
