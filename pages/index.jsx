import Head from 'next/head'
import Link from 'next/link';
import { useEnglish } from '../components/English';

export default function Home() {
  const [english, setEnglish] = useEnglish();

  return (
    <div className='h-fit flex flex-col items-center'>

      <Head>
        <title>Palladdin dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='py-8 w-4/6'>

        <h1 className='text-3xl mb-12 '>
          {
            english
                ? 'ACERCA DE PALLADDIN' 
                : 'ABOUT PALLADDIN'
          }
        </h1>

        <p className='text-xl'>
          {
            english
                ? 'Enfocado en maximizar la experiencia del cliente y la facilidad de uso a través de la implementación de tecnologías líderes en la industria que nos permiten crear y mantener aplicaciones personalizadas.'
                : 'Focused on maximizing customer experience and ease of use through the implementation of industry-leading technologies that allow us to create and maintain custom applications.' 
          }
        </p>

        <div className='w-full mt-24 flex justify-center'>
            <Link href="/contact" className='py-3 px-12 border-2 bg-white/20 border-amber-400 text-amber-400 transition hover:bg-white/40'>
              {
                english
                    ? 'SABER MAS'
                    : 'KNOW MORE'
              }
            </Link>
        </div>

      </div>


    </div>
  )
}
