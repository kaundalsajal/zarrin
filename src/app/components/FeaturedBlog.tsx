import Image from 'next/image'
import React from 'react'
import { featuredBlog } from '../data/home-page'
import Button from './ui/Button'
import Typography from './typography/Typography'
function FeaturedBlog() {
  return (
    <div className='relative w-308 h-174 mt-32.75'>
      <Image alt="Featured Blog Image" src={featuredBlog.image} height={576} width={1232} />
      <div className='absolute bottom-0 right-0 w-230 h-90 rounded-2xl p-8 bg-white'>
        <div className='flex gap-3'>
          <Typography variant='overline' className='font-bold'>
            {featuredBlog.category}
          </Typography>
          <Typography variant='overline' className='text-text-muted'>
            {featuredBlog.date}
          </Typography>
        </div>
        <div className='mt-4'>
          <Typography variant='h4' className='font-bold leading-11.25'>
            {featuredBlog.title}
          </Typography>
        </div>
        <div className='mt-3.5'>
          <Typography variant='body-sm'>
            {featuredBlog.description}
          </Typography>
        </div>
        <div className='mt-12'>
          <Button variant='purpleOutline' className='w-31.25 h-10'>
            <Typography variant='button' color='primary'>
              {featuredBlog.buttonText}
            </Typography>
          </Button>
        </div>
      </div>
    </div>

  )
}

export default FeaturedBlog
