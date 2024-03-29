import Head from 'next/head'
import Image from 'next/image';
import { useEnglish } from '../components/English';

import ImageAnimation from '../components/ImageAnimation'


import portatilPhoto from '../public/assets/portatil.png'

import reacLogo from '../public/assets/react.png'
import netLogo from '../public/assets/net.png'
import nextLogo from '../public/assets/next.png'
import mongoLogo from '../public/assets/mongo.png'

export default function Web() {
  const [english, setEnglish] = useEnglish();

  return (
    <div className='h-fit flex flex-col items-center'>
      <Head>
        <title>{english ? 'Desarrollo Web' : 'Web Development'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='py-8 w-4/6'>

        <div className='mb-40'>
          <h1 className='text-3xl mb-12 '>
            {
              english
                  ? 'DESARROLLO WEB' 
                  : 'WEB DEVELOPMENT'
            }
          </h1>

          <p className='text-xl'>
            {
              english
                  ? 'Enfocado en maximizar la experiencia del cliente y la facilidad de uso a través de la implementación de tecnologías líderes en la industria que nos permiten crear y mantener aplicaciones personalizadas.'
                  : 'Focused on maximizing customer experience and ease of use through the implementation of industry-leading technologies that allow us to create and maintain custom applications.' 
            }
          </p>
        </div>


        <div className='h-1/5 fixed bottom-0 left-0 w-full'>
          <ImageAnimation image={portatilPhoto} alt={'Portatil'} bottom={0} right={0} width={500} />
        </div>

      </div>
    </div>
  )
}
