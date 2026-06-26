import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Typography from './typography/Typography'
import { footerNavlinks, footerSocialMediaLinks, footerCopyright } from '../data/footer-data'
import { companyName } from '../data/navbar-data'
function Footer() {

  return (
    <div className='container max-w-308 mt-12.75 flex flex-col items-center'>
      <div className='flex items-center gap-4'>
        <Image alt='logo' src={companyName.logo} height={44} width={44} />
        <Typography variant='h4' className='font-extrabold'>
          {companyName.name}
        </Typography>
      </div>
      <div className='h-6 w-91.5 mt-10 flex items-center justify-between'>
        {footerNavlinks.map((link, index) => <Link href={link.href} key={index}>
          <Typography variant='body-sm' className='font-400 font-heading'>
            {link.name}
          </Typography>
        </Link>)}
      </div>
      <div className='h-10 w-52 mt-10 flex gap-4'>
        {footerSocialMediaLinks.map((link) => (
          <div
            key={link.name}
            className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center"
          >
            <Typography variant='body-sm' color='white' className='font-700 font-heading'>
              {link.name}
            </Typography>
          </div>
        ))}
      </div>
      <div className='w-full mt-10'>
        <hr className="border border-primary" />
      </div>
      <div className='my-10'>
        <Typography variant='body-sm' className='font-400 font-heading'>
          {footerCopyright}
        </Typography>
      </div>
    </div>
  )
}

export default Footer
