import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './ui/Button'
import Typography from './typography/Typography'
import { companyName, navLinks, mobileSideMenuLogo } from '../data/navbar-data'
function NavBar() {

  return (
    <nav className='container max-w-360 py-5 mx-auto md:py-3 lg:py-5.25 px-5 md:px-18.75 lg:px-26 flex items-center justify-between'>
      <div >
        <Link href="/">
          <div className='flex items-center gap-4'>

            {/* Logo and Name */}
            <Image src={companyName.logo} alt="Company Logo" height={44} width={44} />
            <Typography variant='h4' className='font-extrabold'>
              {companyName.name}
            </Typography>

          </div>
        </Link>
      </div>
      <div className='hidden md:flex items-center h-14 w-104.75 justify-between'>

        {

          //NavBar Links

          navLinks?.links?.map((link, index) => <Link href={"/blog"} key={index}>
            <Typography variant='body-sm' className='font-heading font-medium hover:text-primary'>
              {link.name}
            </Typography>
          </Link>) || "Links should appear here"

        }
        <Image alt="Search Icon" src="/navbar/search-minus.png" height={22} width={22} />
        {
          navLinks?.buttons?.map((button, index) => {
            return <Link href={button.href} key={index}>
              <Button variant='purple' className='w-45 h-14'>
                <Typography variant='body-sm' className='font-heading font-600' color='white'>
                  {button.name}
                </Typography>
              </Button>
            </Link>
          })
        }

      </div>
      <div className='md:hidden'>
        <Image alt='Mobile side menu logog' src={mobileSideMenuLogo} height={34} width={34}></Image>
      </div>
    </nav>
  )
}

export default NavBar
