import { BsWhatsapp, BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <header className='w-full h-fit bg-white'>
        <div className='py-4 px-8 flex justify-between items-center'>
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
          <div className=''>
            <span className='text-xl font-medium leading-tight text-center text-[#F28D52] capitalize mr-6 underline'>
              home
            </span>
            <span className='text-xl font-medium leading-tight text-center text-black capitalize mx-6'>
              pages
            </span>
            <span className='text-xl font-medium leading-tight text-center text-black capitalize mx-6'>
              about
            </span>
            <span className='text-xl font-medium leading-tight text-center text-black capitalize ml-6'>
              contact Us
            </span>
          </div>
        </div>
      </header>
      <div>
        <section className='bg-white w-full h-[35rem] py-2'>
          <div className='bg-transparent w-full h-full grid grid-cols-2 gap-5 place-items-center'>
            <div className='text-left py-5 pl-10 border-l-[10px] border-l-[#F28D52]'>
              <span className='text-3xl font-medium leading-tight text-[#F28D52] capitalize ml-3'>
                Lorem Ipsum
              </span>
              <span className='block text-7xl font-extrabold leading-tight text-black'>
                Landing Page Templates
              </span>
              <div className='my-6'>
                <button className='bg-[#F28D52] text-white text-base xl:text-lg font-semibold leading-[0] py-1 xl:py-2 px-3 xl:px-6 shadow-sm rounded-md'>
                  preview pages
                </button>
                <button className='text-xl font-semibold leading-none px-6 py-2 text-[#F28D52] rounded-md ml-6 group'>
                  <span className='group-hover:underline'>
                    view source code
                  </span>
                </button>
              </div>
            </div>
            <div className=''>
              <img src='/imgs/store.jpg' alt='store' className='w-full' />
            </div>
          </div>
        </section>
        <section className='w-full h-fit bg-[#F2F2F2]'>
          <div className='grid grid-cols-3 gap-12 place-items-center p-12'>
            <div className='w-full flex flex-col gap-5 items-center'>
              <img
                src='/imgs/single-page.png'
                alt='single page'
                className='w-[40%]'
              />
              <div>
                <span className='block text-2xl font-bold text-center w-full text-[#F28D52] capitalise mb-4 mt-2'>
                  Single Page Apps
                </span>
                <span className='block text-base font-medium text-center w-full text-black'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sodales erat et tincidunt porttitor. In odio lectus,
                  consectetur.
                </span>
              </div>
            </div>
            <div className='w-full flex flex-col gap-5 items-center'>
              <img
                src='/imgs/editable.png'
                alt='editable'
                className='w-[40%]'
              />
              <div>
                <span className='block text-2xl font-bold text-center w-full text-[#F28D52] capitalise mb-4 mt-2'>
                  Editable Pages
                </span>
                <span className='block text-base font-medium text-center w-full text-black'>
                  Nam sit amet aliquet odio. Aenean nec pretium massa, nec
                  tincidunt lorem. Duis mollis turpis et semper eleifend. Nullam
                  at feugiat libero.
                </span>
              </div>
            </div>
            <div className='w-full flex flex-col gap-5 items-center'>
              <img
                src='/imgs/standard.png'
                alt='standard'
                className='w-[40%]'
              />
              <div>
                <span className='block text-2xl font-bold text-center w-full text-[#F28D52] capitalise mb-4 mt-2'>
                  Standard Designs
                </span>
                <span className='block text-base font-medium text-center w-full text-black'>
                  Etiam volutpat urna ac mauris interdum, euismod hendrerit
                  nulla pretium. Integer hendrerit ornare diam, a scelerisque
                  libero scelerisque eu.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-[#F28D52] h-fit pb-20'>
          <figure className=''>
            <blockquote className='relative before:content-["\201C"] before:text-[10rem] before:relative before:font-extrabold before:leading-none before:top-10 before:left-20 before:text-gray-300'>
              <div className='w-[70%] mx-auto h-full'>
                <span className='text-2xl font-semibold leading-tight text-white'>
                  The public is more familiar with bad design than good design.
                  It is, in effect, conditioned to prefer bad design, because
                  that is what it lives with. The new becomes threatening, the
                  old reassuring.
                </span>
              </div>
            </blockquote>
            <figcaption className='w-[65%] mx-auto text-right mt-4 text-xl italic text-white'>
              -- Paul Rand, graphic designer
            </figcaption>
          </figure>
        </section>
        <section className='bg-[#353540] h-fit w-full'>
          <div className='w-full'>
            <div className='w-full pt-10 pb-20'>
              <div className='w-full text-center text-[#F28D52] text-4xl font-bold leading-tight capitalize'>
                Lorem ipsum dolor
              </div>
              <span className='block w-full text-center text-2xl font-medium leading-tight text-[#F2F2F2] mt-2'>
                Etiam sodales erat et tincidunt porttitor. In odio lectus,
                consectetur tincidunt posuere at, elementum mattis ligula
              </span>
            </div>
            <div className='w-full h-fit skew-y-6 bg-[#F2F2F2]'>
              <div className='w-[80%] mx-auto grid grid-cols-2 gap-10 px-2 py-20 place-items-center bg-transparent -skew-y-6'>
                <div>
                  <div className='flex gap-5 items-center'>
                    <div className='w-20 h-20 flex justify-center items-center text-5xl leading-none font-semibold bg-[#F28D52] text-white rounded-full shadow-lg'>
                      1
                    </div>
                    <span className='text-4xl font-bold leading-tight text-left text-[#F28D52] capitalize'>
                      Deli/fast
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
                  <img
                    src='/imgs/breakfast.jpg'
                    alt='breakfast'
                    className='w-full'
                  />
                </div>
              </div>
            </div>
            <div className='w-full h-fit skew-y-6 bg-transparent'>
              <div className='w-[80%] mx-auto grid grid-cols-2 gap-10 px-2 py-20 place-items-center bg-transparent -skew-y-6'>
                <div>
                  <img
                    src='/imgs/restaurant.jpg'
                    alt='restaurant'
                    className='w-full'
                  />
                </div>
                <div>
                  <div className='flex gap-5 items-center'>
                    <div className='w-20 h-20 flex justify-center items-center text-5xl leading-none font-semibold bg-[#F28D52] text-white rounded-full shadow-lg'>
                      2
                    </div>
                    <span className='text-4xl font-bold leading-tight text-left text-[#F28D52] capitalize'>
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
              <div className='w-[80%] mx-auto grid grid-cols-2 gap-10 px-2 py-20 place-items-center bg-transparent -skew-y-6'>
                <div>
                  <div className='flex gap-5 items-center'>
                    <div className='w-20 h-20 flex justify-center items-center text-5xl leading-none font-semibold bg-[#F28D52] text-white rounded-full shadow-lg'>
                      3
                    </div>
                    <span className='text-4xl font-bold leading-tight text-left text-[#F28D52] capitalize'>
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
                  <img
                    src='/imgs/yogaclass.jpg'
                    alt='yoga class'
                    className='w-full'
                  />
                </div>
              </div>
            </div>
            <div className='w-full h-fit skew-y-6 bg-transparent'>
              <div className='w-[80%] mx-auto grid grid-cols-2 gap-10 px-2 py-20 place-items-center bg-transparent -skew-y-6'>
                <div>
                  <img src='/imgs/hiking.jpg' alt='hiking' className='w-full' />
                </div>
                <div>
                  <div className='flex gap-5 items-center'>
                    <div className='w-20 h-20 flex justify-center items-center text-5xl leading-none font-semibold bg-[#F28D52] text-white rounded-full shadow-lg'>
                      4
                    </div>
                    <span className='text-4xl font-bold leading-tight text-left text-[#F28D52] capitalize'>
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
        <section>
          <div className='w-[80%] mx-auto py-20'>
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
            <div className=' w-[50%] mx-auto'>
              <form>
                <div className='w-full my-3'>
                  <input
                    name='email'
                    type='email'
                    className='p-2 text-xl font-medium leading-tight bg-[#F2F2F2] outline-[#F28D52] w-full rounded-md'
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
        <div className='w-[80%] mx-auto grid grid-cols-2 gap-10 py-10'>
          <div className='flex gap-5 justify-center items-start'>
            <div>
              <div className='text-[#F28D52] text-2xl font-medium'>tincidunt lectus</div>
              <span className='block text-xl font-medium'>tortor vitae</span>
              <span className='block text-xl font-medium'>risus massa</span>
              <span className='block text-xl font-medium'>Ut pretium</span>
              <span className='block text-xl font-medium'> augue in</span>
              <span className='block text-xl font-medium'>sem non dui</span>
              <span className='block text-xl font-medium'>Duis mattis</span>
            </div>
            <div>
              <div className='text-[#F28D52] text-2xl font-medium'> ligula sit amet</div>
              <span className='block text-xl font-medium'>risus massa</span>
              <span className='block text-xl font-medium'>molestie eget</span>
              <span className='block text-xl font-medium'>a ligula sit</span>
              <span className='block text-xl font-medium'>commodo mi</span>
              <span className='block text-xl font-medium'>vitae lobortis</span>
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
              <div className='text-[#F28D52] text-2xl font-medium my-3'> Signup to my weekly newsletter</div>
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
            <div className='w-fit mx-auto flex justify-center gap-7 my-7 px-7 py-3 border-t border-t-[#F2F2F2]'>
              <div className='text-[#F2F2F2] text-xl font-medium leading-tight'>
                Contact:
              </div>
              <div className='flex justify-start gap-5'>
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
