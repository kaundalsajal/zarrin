import React from 'react'
import Button from './ui/Button'
import { popularPost } from '../data/home-page'
import BlogCard from './BlogCard'
import Typography from './typography/Typography'

function PopularPost() {
  return (
    <div className='w-308 mt-24.5'>
      <div className='flex justify-between'>
        <Typography variant='h3' className='font-bold'>
          Popular Post
        </Typography>
        <Button variant='purple' className='h-13.25 w-36.75'>
          <Typography variant='button' color='white'>
            View All
          </Typography>
          </Button>
      </div>
      <div className='mt-15.25 grid grid-cols-3 gap-y-10'>
        {
          popularPost?.map((post) => <BlogCard post={post} key={post.id} />)
        }
      </div>

    </div>
  )
}

export default PopularPost
