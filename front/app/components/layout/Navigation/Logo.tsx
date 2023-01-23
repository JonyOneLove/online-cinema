import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import LogoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
  return (
    <Link href='/' className='px-layout mb-10 block'>
      <Image
        alt='Online cinema'
        src={LogoImage}
        width={247}
        height={50}
        draggable={false}
      />
    </Link>
  )
}

export default Logo
