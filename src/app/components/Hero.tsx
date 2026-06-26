import Image from 'next/image'
import { heroSection } from '../data/home-page'
import Button from './ui/Button'
import Typography from './typography/Typography'
function Hero() {
  return (
    <div className='h-199 w-full flex flex-col items-center bg-primary'>
      <div className='absolute'>
        <Image alt="Waves Design" src="/hero/wave-design.png" width={685} height={378} />
      </div>
      <div className='w-360 pt-34 px-25.5 relative flex gap-11.5'>
        <div className='w-145 h-118.5 '>
          <div>
            <Typography variant='body-sm' color='white'>
              {heroSection.badge}
            </Typography>
          </div>
          <div>
            <Typography variant='h1' color='white' className='font-bold'>
              {heroSection.title}
            </Typography>
          </div>
          <div className='mt-7 w-104'>
            <Typography variant='body-sm' color='white' className='font-heading '>
              {heroSection.description}
            </Typography>
          </div>
          <div className='mt-16'>
            <Button variant='white' className='w-42.5 h-13.25'>
              <Typography variant='button' className='font-weight-bold'>
                {heroSection.buttonText}
              </Typography>
            </Button>
          </div>
        </div>
        <div className='w-152 h-144'>
          <Image alt="Hero Image" src={heroSection.image} height={576} width={608} />
        </div>
      </div>
    </div >
  )
}

export default Hero
