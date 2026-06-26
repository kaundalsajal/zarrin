import React from 'react'
import Button from './ui/Button'
import { popularPost } from '../data/home-page'
import BlogCard from './BlogCard'
import Typography from './typography/Typography'

function PopularPost() {
  return (
    <div className='container max-w-308 mt-24.5'>
      <div className='continer flex justify-between'>
        <Typography variant='h3' className='font-bold'>
          Popular Post
        </Typography>
        <Button variant='purple' className='h-13.25 w-36.75'>
          <Typography variant='button' color='white'>
            View All
          </Typography>
          </Button>
      </div>
      <div className='container max-w-full mt-15.25 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10'>
        {
          popularPost?.map((post) => <BlogCard post={post} key={post.id} />)
        }
      </div>

    </div>
  )
}

export default PopularPost
