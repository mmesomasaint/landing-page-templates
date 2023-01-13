import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsSuitDiamondFill,
} from 'react-icons/bs'
import Image from 'next/image'
import style from './dellbreak.module.css'

export default function Dellbreak() {
  return (
    <div className={style.body}>
      <header>
        <div className='w-full bg-transparent'>
          <div className='relative w-[80%] mx-auto'>
            <div className='absolute w-full h-full scale-[.8] shadow-3xl top-0 left-0' />
            <div className='relative rounded-b-[80px] bg-[#404040] pt-20 pb-5 px-[5%]'>
              <div className='w-full text-center mb-10'>
                <span className='text-6xl font-normal text-[#C18A73]'>
                  Deli//
                </span>
                <span className='text-6xl font-extralight text-[#C18A73]'>
                  Break
                </span>
              </div>
              <div className='w-full text-center my-1 flex gap-7 justify-between text-white'>
                <div className='flex justify-evenly items-center gap-6'>
                  <span className='text-sm font-normal hover:scale-95 cursor-pointer capitalize'>
                    Beverages
                  </span>
                  <span className='text-sm font-normal hover:scale-95 cursor-pointer capitalize'>
                    Deserts
                  </span>
                  <span className='text-sm font-normal hover:scale-95 cursor-pointer capitalize'>
                    Promotions
                  </span>
                  <span className='text-sm font-normal hover:scale-95 cursor-pointer capitalize'>
                    Star Program
                  </span>
                  <span className='text-sm font-normal hover:scale-95 cursor-pointer capitalize'>
                    Branches
                  </span>
                  <span className='text-sm font-normal hover:scale-95 cursor-pointer capitalize'>
                    Contact
                  </span>
                </div>
                <div className='flex justify-evenly items-center gap-4'>
                  <div className='flex justify-around gap-3 items-center'>
                    <BsInstagram className='text-lg hover:scale-95 cursor-pointer' />
                    <BsFacebook className='text-lg hover:scale-95 cursor-pointer' />
                    <BsYoutube className='text-lg hover:scale-95 cursor-pointer' />
                  </div>
                  <div className='text-sm font-normal'>|</div>
                  <div className='text-sm font-normal'>
                    Quality and tast // Guaranteed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='z-10'>
        <div className="h-[43rem] w-full bg-[url('/imgs/choco-cake.jpg')] bg-no-repeat bg-cover bg-right">
          <div className='bg-gradient-to-br from-[transparent] via-[transparent] to-[rgba(242,235,233)] flex justify-end items-center h-full px-24'>
            <div className='flex flex-col gap-10 h-[75%] w-[35%]'>
              <div>
                <span className='text-4xl font-extralight'>
                  Learn how to make amazing cakes
                </span>
              </div>
              <div>
                <span className='text-4xl font-normal'>
                  Have you already tried the classic double chocolate cake
                </span>
              </div>
              <div className='capitalize'>
                <button className='text-xl font-normal bg-[#C18A73] text-white rounded-full px-14 py-2 leading-none'>
                  Pastry Courses
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#F2EBE9]'>
          <div className='w-[75%] mx-auto pt-[10%]'>
            <div className='grid grid-cols-2 gap-0'>
              <div className='relative'>
                <div className='absolute w-full h-full scale-[.65] shadow-3xl top-0 -left-16 bg-white' />
                <div className='relative p-14 pt-16 bg-white rounded-l-[80px] w-full h-full'>
                  <div className='mb-3'>
                    <h3 className='text-3xl font-semibold'>
                      Healthy and delicious
                    </h3>
                    <p className='text-2xl font-light'>
                      Taste delicious smoothies with seasonal fruits
                    </p>
                  </div>
                  <div className='mb-6'>
                    <p className='text-xs font-medium'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla ornare ac sapien eget pharetra. Nullam leo est,
                      ultricies id lacus nec, lobortis pretium eros.
                      Pellentesque in pharetra augue. Vivamus condimentum
                      malesuada neque ac imperdiet. Pellentesque nec lobortis
                      ant
                    </p>
                  </div>
                  <div className='mb-4'>
                    <p className='text-[#C18A73] text-2xl font-normal leading-tight'>
                      Traditional fruit smoothie only $6
                    </p>
                  </div>
                  <div className='mb-10'>
                    <ul className='my-4'>
                      {[
                        'Extra Oaths',
                        'Extra Fruit',
                        'Extra Creams',
                        'Extra Topping',
                      ].map((word) => (
                        <li
                          key={word}
                          className='flex w-full justify-start items-center gap-1 text-sm font-semibold'
                        >
                          <BsSuitDiamondFill />
                          <p>{word}</p>
                        </li>
                      ))}
                    </ul>
                    <button className='py-2 px-5 capitalize bg-[#C18A73] text-white text-xl font-normal leading-none rounded-full'>
                      Buy Now
                    </button>
                  </div>
                  <div>
                    <p className='text-[0.6rem] font-lihgt leading-tight'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla ornare ac sapien eget pharetra. Nullam leo est,
                      ultricies id lacus nec, lobortis pretium eros.
                      Pellentesque in pharetra augue.
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative w-full h-full'>
                <div className='absolute w-full h-full scale-[.55] shadow-s-3xl top-10 -left-[5.7rem] bg-white rounded-full' />
                <Image
                  src='/imgs/Smoothie.jpg'
                  width={500}
                  height={500}
                  alt='smoothie'
                  className='relative rounded-r-[80px]'
                />
              </div>
            </div>
            <div className='w-full text-center mt-3'>
              <span className='text-xs font-medium leading-tight w-full'>
                Quality and taste // Guaranteed
              </span>
            </div>
          </div>
        </div>
        <div className="h-[66rem] w-full bg-[url('/imgs/blender-with-orange.jpg')] bg-no-repeat bg-cover bg-right transform scale-x-[-1]">
          <div className='bg-gradient-radial from-[transparent] via-[rgba(242,235,233,0.2)] to-[rgba(242,235,233)] w-full h-full transform scale-x-[-1] '>
            <div className='flex justify-end items-center h-full px-24 w-[80%] mx-auto'>
              <div className='h-[25%] w-[45%]'>
                <div className='mb-3'>
                  <span className='font-semibold text-3xl leading-tight'>
                    Beverage Courses
                  </span>
                </div>
                <div className='mb-10'>
                  <span className='font-light text-3xl leading-tight'>
                    Learn how to combine fruits and vegetables in the right way
                  </span>
                </div>
                <div className='flex gap-5 flex-col'>
                  <input
                    type='text'
                    placeholder='Name'
                    autoComplete='name'
                    name='name'
                    className='placeholder:text-[#1A1615] rounded-full py-2 px-3 bg-white text-[#1A1615] text-sm font-medium'
                  />
                  <input
                    type='text'
                    placeholder='Email'
                    autoComplete='email'
                    name='email'
                    className='placeholder:text-[#1A1615] rounded-full py-2 px-3 bg-white text-[#1A1615] text-sm font-medium'
                  />
                  <button className='rounded-full mt-4 mb-2 py-2 w-[50%] mx-auto bg-[#C18A73] text-white text-base font-medium leading-none shadow-md'>
                    Enroll now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gradient-to-t from-[#C18A73] via-[#D9C1B8] to-[#F2EBE9]'>
          <div>
            <div className='w-[70%] mx-auto pt-[10%]'>
              <div className='grid grid-cols-7 gap-0'>
                <div className='relative col-span-4'>
                  <div className='absolute w-full h-full scale-[.65] shadow-3xl top-0 -left-16 bg-white' />
                  <div className='relative pl-14 pr-24 pt-16 bg-white rounded-l-[80px] w-full h-full'>
                    <div className='mb-3'>
                      <h3 className='text-3xl font-semibold'>about us</h3>
                      <p className='text-2xl font-light'>
                        Passionate about always offering you the best
                      </p>
                    </div>
                    <div className='mb-6'>
                      <p className='text-xs font-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla ornare ac sapien eget pharetra. Nullam leo est,
                        ultricies id lacus nec, lobortis pretium eros.
                        Pellentesque in pharetra augue. Vivamus condimentum
                        malesuada neque ac imperdiet. Pellentesque nec lobortis
                        ant
                      </p>
                    </div>
                    <div className='mb-10'>
                      <p className='text-xs font-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla ornare ac sapien eget pharetra. Nullam leo est,
                        ultricies id lacus nec, lobortis pretium eros.
                        Pellentesque in pharetra augue. Vivamus condimentum
                        malesuada neque ac imperdiet. Pellentesque nec lobortis
                        ant
                      </p>
                    </div>
                    <div className='mb-10'>
                      <button className='py-2 w-[70%] capitalize bg-[#C18A73] text-white text-xl font-normal leading-none rounded-full'>
                        Read more
                      </button>
                    </div>
                    <div>
                      <p className='text-[0.6rem] font-lihgt leading-tight'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla ornare ac sapien eget pharetra. Nullam leo est,
                        ultricies id lacus nec
                      </p>
                    </div>
                  </div>
                </div>
                <div className='relative col-span-3'>
                  <div className='absolute w-full h-full scale-[.55] shadow-s-3xl top-10 -left-[5.7rem] bg-white rounded-full' />
                  <Image
                    src='/imgs/female-chef.jpg'
                    width={400}
                    height={400}
                    alt='smoothie'
                    className='relative rounded-r-[80px]'
                  />
                </div>
              </div>
              <div className='w-full text-center mt-3'>
                <span className='text-xs font-medium leading-tight w-full'>
                  Quality and taste // Guaranteed
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className='pt-[10%]'>
              <div className='grid grid-cols-11 gap-3'>
                <div className='col-span-8 grid grid-cols-8 gap-0'>
                  <div className='px-[30%] pt-10 bg-white col-span-5'>
                    <div className='mb-3'>
                      <h3 className='text-3xl font-semibold'>
                        Favourite seasonal smoothie
                      </h3>
                      <p className='text-2xl font-light'>
                        The most loved by the little ones
                      </p>
                    </div>
                    <div className='mb-6'>
                      <p className='text-xs font-medium leading-tight'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla ornare ac sapien eget pharetra. Nullam leo est,
                        ultricies id lacus nec, lobortis pretium eros.
                        Pellentesque in pharetra augue. Vivamus condimentum
                        malesuada neque ac imperdiet. Pellentesque nec lobortis
                        ant
                      </p>
                    </div>
                    <div className='mb-10'>
                      <ul className='my-4'>
                        {['Extra Topping', 'Extra Creams', 'Extra Gummies'].map(
                          (word) => (
                            <li
                              key={word}
                              className='flex w-full justify-start items-center gap-1 text-sm font-semibold'
                            >
                              <BsSuitDiamondFill />
                              <p>{word}</p>
                            </li>
                          )
                        )}
                      </ul>
                      <button className='py-2 px-5 capitalize bg-[#C18A73] text-white text-lg font-medium leading-none rounded-full'>
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <div className='relative col-span-3'>
                    <div className='absolute w-full h-full scale-[.65] shadow-3xl top-5 -right-3 bg-white' />
                    <Image
                      src='/imgs/milkshake.jpg'
                      width={340}
                      height={340}
                      alt='smoothie'
                      className='relative rounded-r-[80px]'
                    />
                  </div>
                </div>
                <div className='col-span-3 py-6'>
                  <div className='mb-5'>
                    <span className='text-4xl font-light leading-tight'>
                      For all tastes
                    </span>
                  </div>
                  <div className='mb-5 w-[40%]'>
                    <span className='text-xs font-medium leading-none'>
                      Accompany your drink with a deli desert:
                    </span>
                  </div>
                  <div>
                    <div className='flex justify-start items-center gap-3 my-4'>
                      <div>
                        <Image
                          src='/imgs/pudding-with-strawberry.jpg'
                          width={200}
                          height={200}
                          alt='pudding with strawberry'
                          className='rounded-lg'
                        />
                      </div>
                      <div>
                        <div>
                          <span className='text-xs font-normal leading-tight'>
                            add to my order
                          </span>
                        </div>
                        <div>
                          <button className='text-sm font-normal leading-none bg-[#C18A73] text-white px-2 py-1'>
                            -
                          </button>
                          <span className='text-sm font-normal leading-none text-[#1A1615] px-2 py-1'>
                            1
                          </span>
                          <button className='text-sm font-normal leading-none bg-[#C18A73] text-white px-2 py-1'>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-start items-center gap-3 my-4'>
                      <div>
                        <Image
                          src='/imgs/cream-pastry.jpg'
                          width={200}
                          height={200}
                          alt='pudding with strawberry'
                          className='rounded-lg'
                        />
                      </div>
                      <div>
                        <div>
                          <span className='text-xs font-normal leading-tight'>
                            add to my order
                          </span>
                        </div>
                        <div>
                          <button className='text-sm font-normal leading-none bg-[#C18A73] text-white px-2 py-1'>
                            -
                          </button>
                          <span className='text-sm font-normal leading-none text-[#1A1615] px-2 py-1'>
                            1
                          </span>
                          <button className='text-sm font-normal leading-none bg-[#C18A73] text-white px-2 py-1'>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className='bg-[#1A1615] text-white text-sm font-medium leading-none py-2 px-5 capitalize rounded-full'>
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='py-[10%]'>
              <div className='w-[40%] mx-auto'>
                <div className='w-full text-center mb-10'>
                  <span className='text-8xl font-normal text-[#1A1615] '>
                    Deli//
                  </span>
                  <span className='text-8xl font-extralight text-[#1A1615] '>
                    Break
                  </span>
                </div>
                <div className=' text-center w-[80%] mx-auto'>
                  <div className='mb-7'>
                    <span className='text-3xl font-light text-[#1A1615]'>
                      Your favourite free drink on your birthday
                    </span>
                  </div>
                  <div className='mb-10'>
                    <button className='block w-[75%] mx-auto py-3 bg-[#1A1615] text-white leading-none rounded-full shadow-md'>
                      Sign up now
                    </button>
                  </div>
                  <div>
                    <p className='text-xs font-normal leading-tight'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla ornare ac sapien eget pharetra. Nullam leo est,
                      ultricies id lacus nec, lobortis pretium eros.
                      Pellentesque in pharetra augue. Vivamus condimentum mal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div>
              <div className='relative w-[80%] mx-auto'>
            <div className='absolute w-full h-full scale-[.8] shadow-3xl -top-4 left-0' />
              <div className='relative rounded-t-[80px] bg-[#1A1615] pt-20 pb-5 px-[5%]'>
                <div className='mb-7'>
                  <div className='w-full text-center mb-4'>
                    <span className='text-6xl font-normal text-[#C18A73] '>
                      Deli//
                    </span>
                    <span className='text-6xl font-extralight text-[#C18A73] '>
                      Break
                    </span>
                  </div>
                  <div className='w-full text-center'>
                    <span className='text-white text-sm font-medium leading-tight w-full'>
                      Quality and taste // Guaranteed
                    </span>
                  </div>
                </div>
                <div className='flex justify-start gap-4 mb-7'>
                  <BsInstagram className='text-white text-xl' />
                  <BsFacebook className='text-white text-xl' />
                  <BsYoutube className='text-white text-xl' />
                </div>
                <div className='flex justify-between'>
                  <div className='grid grid-cols-2 gap-20'>
                    <div className='flex flex-col gap-5 items-start'>
                      <span className='text-sm font-medium text-white'>
                        Beverages
                      </span>
                      <span className='text-sm font-medium text-white'>
                        Deserts
                      </span>
                      <span className='text-sm font-medium text-white'>
                        Promotions
                      </span>
                      <span className='text-sm font-medium text-white'>
                        Star Program
                      </span>
                      <span className='text-sm font-medium text-white'>
                        Branches
                      </span>
                      <span className='text-sm font-medium text-white'>
                        Contact
                      </span>
                    </div>
                    <div className='flex flex-col gap-5 items-start'>
                      <span className='text-sm font-medium text-white'>
                        Gallery
                      </span>
                      <span className='text-sm font-medium text-white'>
                        Blog
                      </span>
                      <span className='text-sm font-medium text-white'>
                        Star Program
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className='mb-7'>
                      <span className='text-3xl font-normal leading-tight text-white'>
                        Sign up for our newsletter:
                      </span>
                    </div>
                    <div className='flex gap-5 flex-col'>
                      <input
                        type='text'
                        placeholder='Name'
                        autoComplete='name'
                        name='name'
                        className='placeholder:text-[#1A1615] rounded-full py-2 px-3 bg-white text-[#1A1615] text-sm font-medium'
                      />
                      <input
                        type='text'
                        placeholder='Email'
                        autoComplete='email'
                        name='email'
                        className='placeholder:text-[#1A1615] rounded-full py-2 px-3 bg-white text-[#1A1615] text-sm font-medium'
                      />
                      <button className='rounded-full mb-2 py-2 w-full bg-[#C18A73] text-white text-base font-medium leading-none shadow-md'>
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              </div></div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
