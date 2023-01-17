import { useCallback, useState } from 'react'
import { BsWhatsapp, BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaWindowClose } from 'react-icons/fa'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = useCallback(() => setIsOpen((state) => !state), [isOpen])

  return (
    <div>
      <header className='w-full h-fit bg-white'>
        <div className='relative max-w-[80rem] px-5 sm:px-10 xl:px-0 w-full md:w-[90%] lg:w-[80%] mx-auto py-4 flex justify-between items-center'>
          <div>
            <div className='border-2 rounded-md border-[#F28D52] p-1'>
              <span className='text-black text-3xl font-semibold leading-none text-center'>
                Landing
              </span>
              <span className='text-[#F28D52] text-3xl font-semibold leading-none text-center'>
                Store
              </span>
            </div>
          </div>
          <div className='md:hidden'>
            {isOpen ? (
              <FaWindowClose
                className='text-3xl text-[#F28D52]'
                onClick={handleClick}
              />
            ) : (
              <GiHamburgerMenu
                className='text-3xl text-black'
                onClick={handleClick}
              />
            )}
          </div>
          <div
            className={`${
              isOpen
                ? 'block absolute w-full right-0 top-[100%] bg-white pr-10'
                : 'hidden'
            } md:w-auto md:static md:block flex flex-col items-end md:flex-none gap-5`}
          >
            <a
              href='#home'
              className='text-xl font-medium leading-tight block md:inline w-full text-right md:text-center text-[#F28D52] capitalize md:mr-6 underline '
            >
              home
            </a>
            <a
              href='#pages'
              className='text-xl font-medium leading-tight block md:inline w-full text-right md:text-center text-black capitalize md:mx-6 '
            >
              pages
            </a>
            <a
              href='#about'
              className='text-xl font-medium leading-tight block md:inline w-full text-right md:text-center text-black capitalize md:mx-6 '
            >
              about
            </a>
            <a
              href='contact us'
              className='text-xl font-medium leading-tight block md:inline w-full text-right md:text-center text-black capitalize md:ml-6 '
            >
              contact Us
            </a>
          </div>
        </div>
      </header>
      <div>
        <section id='home' className='bg-white w-full h-fit lg:h-[38rem] py-2'>
          <div className='max-w-[80rem] px-5 sm:px-10 xl:px-0 w-full md:w-[90%] lg:w-[80%] mx-auto bg-transparent h-full grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center'>
            <div className='text-center lg:text-left py-5 pl-0 lg:pl-10 lg:border-l-[10px] lg:border-l-[#F28D52]'>
              <span className='text-3xl font-medium leading-tight text-[#F28D52] capitalize ml-3'>
                Lorem Ipsum
              </span>
              <span className='block text-6xl sm:text-7xl font-extrabold leading-tight sm:leading-[1.4] text-black'>
                Landing Page Templates
              </span>
              <div className='my-10'>
                <button className='bg-[#F28D52] text-white text-xl sm:text-2xl lg:text-lg font-medium lg:font-semibold leading-none py-2 px-6 shadow-sm rounded-md'>
                  preview pages
                </button>
                <button className='text-xl sm:text-2xl lg:text-xl font-medium lg:font-semibold leading-none px-6 py-2 text-[#F28D52] rounded-md md:ml-6 mt-6 sm:mt-0 group'>
                  <span className='underline md:no-underline md:group-hover:underline'>
                    view source code
                  </span>
                </button>
              </div>
            </div>
            <div className=''>
              <Image
                width={500}
                height={500}
                src='/imgs/store.jpg'
                alt='store'
                className='w-full'
              />
            </div>
          </div>
        </section>
        <section id='about' className='w-full h-fit bg-[#F2F2F2]'>
          <div className='max-w-[80rem] px-5 sm:px-10 xl:px-0 w-full md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center py-12'>
            <div className='w-full flex flex-col gap-5 items-center'>
              <Image
                width={150}
                height={200}
                src='/imgs/single-page.png'
                alt='single page'
              />
              <div>
                <span className='block text-2xl font-bold text-center w-full text-[#F28D52] capitalise mb-4 mt-2'>
                  Single Page Apps
                </span>
                <span className='block text-base font-medium text-center w-full text-black'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
            </div>
            <div className='w-full flex flex-col gap-5 items-center'>
              <Image
                width={150}
                height={200}
                src='/imgs/editable.png'
                alt='editable'
              />
              <div>
                <span className='block text-2xl font-bold text-center w-full text-[#F28D52] capitalise mb-4 mt-2'>
                  Editable Pages
                </span>
                <span className='block text-base font-medium text-center w-full text-black'>
                  Nam sit amet aliquet odio. Aenean nec pretium massa, .
                </span>
              </div>
            </div>
            <div className='w-full flex flex-col gap-5 items-center'>
              <Image
                width={150}
                height={200}
                src='/imgs/standard.png'
                alt='standard'
              />
              <div>
                <span className='block text-2xl font-bold text-center w-full text-[#F28D52] capitalise mb-4 mt-2'>
                  Standard Designs
                </span>
                <span className='block text-base font-medium text-center w-full text-black'>
                  Etiam volutpat urna ac mauris interdum, euismod hendrerit
                  nulla pretium.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-[#F28D52] h-fit pb-20'>
          <figure className='max-w-[80rem] px-5 sm:px-10 xl:px-0 w-full mx-auto'>
            <blockquote className='relative before:content-["\201C"] before:text-[10rem] before:relative before:font-extrabold before:leading-none before:top-10 before:left-20 before:text-gray-300'>
              <div className='w-[80%] mx-auto h-full'>
                <span className='text-2xl font-semibold leading-tight text-white'>
                  The public is more familiar with bad design than good design.
                  It is, in effect, conditioned to prefer bad design, because
                  that is what it lives with. The new becomes threatening, the
                  old reassuring.
                </span>
              </div>
            </blockquote>
            <figcaption className='w-[80%] mx-auto text-right mt-4 text-xl italic text-white'>
              -- Paul Rand, graphic designer
            </figcaption>
          </figure>
        </section>
        <section id='pages' className='bg-[#353540] h-fit w-full'>
          <div className='w-full'>
            <div className='w-full pt-10 pb-20'>
              <div className='max-w-[80rem] px-5 sm:px-10 xl:px-0 w-full mx-auto md:w-[90%] lg:w-[80%]'>
                <div className='w-full text-center text-[#F28D52] text-4xl font-bold leading-tight capitalize'>
                  Landing pages
                </div>
                <span className='block w-full text-center text-2xl font-medium leading-tight text-[#F2F2F2] mt-2'>
                  Etiam sodales erat et tincidunt porttitor. In odio lectus,
                  consectetur tincidunt posuere at, elementum mattis ligula
                </span>
              </div>
            </div>
            <div className='w-full h-fit skew-y-6 bg-[#F2F2F2]'>
              <div className='max-w-[80rem] px-5 sm:px-10 xl:px-0 w-full md:w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 place-items-center bg-transparent -skew-y-6'>
                <div>
                  <div className='flex gap-5 items-center'>
                    <div className='w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center text-3xl sm:text-5xl leading-none font-semibold bg-[#F28D52] text-white rounded-full shadow-lg'>
                      1
                    </div>
                    <span className='text-3xl sm:text-4xl font-bold leading-tight text-left text-[#F28D52] capitalize'>
                      Deli//Break
                    </span>
                  </div>
                  <div className='text-black text-xl font-semibold leading-tight my-7 ml-6'>
                    Nam sit amet aliquet odio. Aenean nec pretium massa, nec
                    tincidunt lorem. Duis mollis turpis et semper eleifend.
                    Nullam at feugiat libero. Sed venenati
                  </div>
                  <div className='my-7 mx-6'>
                    <button
                      className='text-2xl font-semibold px-5  hover:scale-105 text-white bg-[#F28D52] rounded-md'
                      onClick={() => router.push('/preview/dellbreak')}
                    >
                      Preview
                    </button>
                  </div>
                </div>
                <div>
                  <Image
                    width={500}
                    height={500}
                    src='/imgs/breakfast.jpg'
                    alt='breakfast'
                    className='w-full'
                  />
                </div>
              </div>
            </div>
            <div className='w-full h-fit skew-y-6 bg-transparent'>
              <div className='max-w-[80rem] px-5 sm:px-10 xl:px-0 w-full md:w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 place-items-center bg-transparent -skew-y-6'>
                <div className='order-last lg:order-first'>
                  <Image
                    width={500}
                    height={500}
                    src='/imgs/restaurant.jpg'
                    alt='restaurant'
                    className='w-full'
                  />
                </div>
                <div>
                  <div className='flex gap-5 items-center'>
                    <div className='w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center text-3xl sm:text-5xl leading-none font-semibold bg-[#F28D52] text-white rounded-full shadow-lg'>
                      2
                    </div>
                    <span className='text-3xl sm:text-4xl font-bold leading-tight text-left text-[#F28D52] capitalize'>
                      Restaurant
                    </span>
                  </div>
                  <div className='text-xl font-semibold leading-tight my-7 ml-6 text-[#F2F2F2]'>
                    Aenean nec pretium massa, nec tincidunt lorem. Nam sit amet
                    aliquet odio. Duis mollis turpis et semper eleifend. Nullam
                    at feugiat libero. Sed venenati
                  </div>
                  <div className='my-7 mx-6'>
                    <button className='text-2xl font-semibold px-5  hover:scale-105 text-white bg-[#F28D52] rounded-md'>
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full h-fit skew-y-6 bg-[#F2F2F2]'>
              <div className='max-w-[80rem] px-5 sm:px-10 xl:px-0 w-full md:w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 place-items-center bg-transparent -skew-y-6'>
                <div>
                  <div className='flex gap-5 items-center'>
                    <div className='w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center text-3xl sm:text-5xl leading-none font-semibold bg-[#F28D52] text-white rounded-full shadow-lg'>
                      3
                    </div>
                    <span className='text-3xl sm:text-4xl font-bold leading-tight text-left text-[#F28D52] capitalize'>
                      Yoga Class
                    </span>
                  </div>
                  <div className='text-black text-xl font-semibold leading-tight my-7 ml-6'>
                    Nam sit amet aliquet odio. Aenean nec pretium massa, nec
                    tincidunt lorem. Duis mollis turpis et semper eleifend.
                    Nullam at feugiat libero. Sed venenati
                  </div>
                  <div className='my-7 mx-6'>
                    <button className='text-2xl font-semibold px-5  hover:scale-105 text-white bg-[#F28D52] rounded-md'>
                      Preview
                    </button>
                  </div>
                </div>
                <div>
                  <Image
                    width={500}
                    height={500}
                    src='/imgs/yogaclass.jpg'
                    alt='yoga class'
                    className='w-full'
                  />
                </div>
              </div>
            </div>
            <div className='w-full h-fit skew-y-6 bg-transparent'>
              <div className='max-w-[80rem] px-5 sm:px-10 xl:px-0 w-full md:w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 place-items-center bg-transparent -skew-y-6'>
                <div className='order-last lg:order-first'>
                  <Image
                    width={500}
                    height={500}
                    src='/imgs/hiking.jpg'
                    alt='hiking'
                    className='w-full'
                  />
                </div>
                <div>
                  <div className='flex gap-5 items-center'>
                    <div className='w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center text-3xl sm:text-5xl leading-none font-semibold bg-[#F28D52] text-white rounded-full shadow-lg'>
                      4
                    </div>
                    <span className='text-3xl sm:text-4xl font-bold leading-tight text-left text-[#F28D52] capitalize'>
                      Hiking
                    </span>
                  </div>
                  <div className='text-xl font-semibold leading-tight my-7 ml-6 text-[#F2F2F2]'>
                    Aenean nec pretium massa, nec tincidunt lorem. Nam sit amet
                    aliquet odio. Duis mollis turpis et semper eleifend. Nullam
                    at feugiat libero. Sed venenati
                  </div>
                  <div className='my-7 mx-6'>
                    <button className='text-2xl font-semibold px-5  hover:scale-105 text-white bg-[#F28D52] rounded-md'>
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-white'>
          <div className='max-w-[80rem] px-5 sm:px-10 xl:px-0 w-full md:w-[90%] lg:w-[80%] mx-auto py-20'>
            <div>
              <div className='text-[#F28D52] text-xl font-medium leading-none text-center w-full capitalize'>
                for more frontend dev tips &darr;
              </div>
              <div className='text-black text-6xl font-bold leading-tight text-center w-full'>
                Sign up
              </div>
              <div className='text-black text-xl font-medium leading-tight text-center my-5'>
                Sed pellentesque vestibulum arcu, nec condimentum diam suscipit
                vel. Donecmollis turpis et semper eleifend. Nullam at feugiat
                libero. Sed venenati iaculis facilisis elementum.
              </div>
            </div>
            <div className='w-[100%] md:w-[70%] xl:w-[50%] mx-auto'>
              <form>
                <div className='w-full my-3'>
                  <input
                    name='email'
                    type='email'
                    className='p-2 text-xl font-medium leading-tight bg-[#F2F2F2] outline outline-[#F28D52] w-full rounded-md placeholder:text-[#F28D52] placeholder:opacity-60'
                    placeholder='Email'
                    autoComplete='email'
                    required
                  />
                </div>
                <div className='flex justify-center mt-5'>
                  <button className='text-xl font-medium leading-none py-2 px-5 bg-[#F28D52] text-white rounded-md shadow-md hover:scale-105'>
                    signUp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <footer className='bg-[#353540]'>
        <div className='max-w-[80rem] px-5 sm:px-10 xl:px-0 w-full md:w-[90%] lg:w-[80%] mx-auto grid sm:grid-cols-1 lg:grid-cols-3 gap-10 pt-12 pb-5'>
          <div className='flex gap-10 justify-start items-start sm:col-span-2'>
            <div>
              <div className='text-[#F28D52] text-2xl font-medium capitalize'>
                tincidunt lectus
              </div>
              <span className='block text-xl font-medium my-2'>
                tortor vitae
              </span>
              <span className='block text-xl font-medium my-2'>
                risus massa
              </span>
              <span className='block text-xl font-medium my-2'>Ut pretium</span>
              <span className='block text-xl font-medium my-2'> augue in</span>
              <span className='block text-xl font-medium my-2'>
                sem non dui
              </span>
              <span className='block text-xl font-medium my-2'>
                Duis mattis
              </span>
            </div>
            <div>
              <div className='text-[#F28D52] text-2xl font-medium capitalize'>
                ligula sit amet
              </div>
              <span className='block text-xl font-medium my-2'>
                risus massa
              </span>
              <span className='block text-xl font-medium my-2'>
                molestie eget
              </span>
              <span className='block text-xl font-medium my-2'>
                a ligula sit
              </span>
              <span className='block text-xl font-medium my-2'>commodo mi</span>
              <span className='block text-xl font-medium my-2'>
                vitae lobortis
              </span>
            </div>
          </div>
          <div>
            <div className='text-xl font-medium '>
              Nam sit amet aliquet odio. Aenean nec pretium massa, nec tincidunt
              lorem. Duis mollis turpis et semper eleifend. Nullam at feugiat
              libero
            </div>
            <div className='my-7'>
              <form>
                <div className='text-[#F28D52] text-2xl font-medium my-3'>
                  Signup to my weekly newsletter
                </div>
                <div className='flex'>
                  <input
                    type='email'
                    name='email'
                    autoComplete='email'
                    placeholder='Email'
                    className='w-full text-xl font-medium leading-none p-2 flex-grow bg-[#F2F2F2] rounded-l-md'
                  />
                  <button className='py-1 px-3 leading-none text-xl font-medium bg-[#F28D52] text-white rounded-r-md'>
                    Signup
                  </button>
                </div>
              </form>
            </div>
            <div
              id='contact'
              className='w-fit mx-auto flex justify-center gap-7 mt-12 px-7 py-5 border-t border-t-[#F2F2F2]'
            >
              <div className='flex justify-start gap-10'>
                <BsWhatsapp className='text-2xl text-[#BFB960]' />
                <BsLinkedin className='text-2xl text-[#BFB960]' />
                <BsTwitter className='text-2xl text-[#BFB960]' />
                <BsGithub className='text-2xl text-[#BFB960]' />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
