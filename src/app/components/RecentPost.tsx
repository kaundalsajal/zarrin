import React from 'react'
import { recentPost } from '../data/home-page'
import Button from './ui/Button'
import Image from 'next/image'
import { recentPosts } from '../data/home-page'
import BlogCard from './BlogCard'
import Typography from './typography/Typography'


function RecentPost() {
  return (
    <div className='container max-w-308 mt-20.25'>
      <div className='continer flex justify-between'>
        <Typography variant='h3' className='font-bold'>
          Our Recent Post
        </Typography>
        <Button variant='purple' className='h-13.25 w-36.75'>
          <Typography variant='button' color='white'>
            View All
          </Typography>
        </Button>
      </div>
      <div className='container mt-24 flex md:flex-row flex-col gap-14'>
        <div>
          <Image alt="Recent Post" src={recentPost.image} height={456} width={712} />
        </div>
        <div className='container'>
          <div className='flex gap-3'>
            <Typography variant='overline' className='font-bold'>
              {recentPost.category}
            </Typography>
            <Typography variant='overline' className='text-text-muted'>
              {recentPost.date}
            </Typography>
          </div>
          <div className='mt-4'>
            <Typography variant='h4' className='font-bold'>
              {recentPost.title}
            </Typography>
          </div>
          <div>
            <Typography variant='body-sm'>
              {recentPost.description}
            </Typography>
          </div>
          <div className='mt-9.5'>
            <Button variant='purpleOutline' className='w-31.25 h-10'>
              <Typography variant='button' color='primary'>
                {recentPost.buttonText}
              </Typography>
            </Button>
          </div>
        </div>
      </div>

      {/* Recent Post Cards */}

      <div className='mt-15.75 container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
        {
          recentPosts.map((post) => <BlogCard post={post} key={post.id} />)
        }
      </div>
    </div>
  )
}

export default RecentPost
