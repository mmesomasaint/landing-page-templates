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
          <div className='relative max-w-[90rem] w-[97%] lg:w-[95%] xl:w-[80%] mx-auto'>
            <div className='absolute w-full h-full scale-[.8] shadow-3xl top-0 left-0' />
            <div className='relative rounded-b-[80px] bg-[#404040] pt-20 pb-5 px-[5%]'>
              <div className='w-full text-center mb-10'>
                <span className='text-4xl sm:text-6xl font-normal text-[#C18A73]'>
                  Deli//
                </span>
                <span className='text-4xl sm:text-6xl font-extralight text-[#C18A73]'>
                  Break
                </span>
              </div>
              <div className='w-full text-center my-1 flex gap-7 justify-center lg:justify-between text-white'>
                <div className='flex flex-col sm:flex-row justify-evenly items-center gap-6'>
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
                <div className='hidden lg:flex justify-evenly items-center gap-4'>
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
        <div className="h-[43rem] w-full bg-[url('/imgs/choco-cake.jpg')] bg-no-repeat bg-cover bg-center md:bg-right">
          <div className='bg-gradient-to-br from-[transparent] via-[transparent] to-[rgba(242,235,233)] w-full h-full'>
            <div className='max-w-[90rem] w-[97%] xl:w-[80%] mx-auto flex lg:justify-end items-center h-full md:px-24'>
              <div className='flex flex-col gap-5 md:gap-10 h-[75%] w-full lg:w-[45%] xl:w-[35%] 2xl:w-[40%] text-center lg:text-left'>
                <div>
                  <span className='text-3xl sm:text-4xl 2xl:text-5xl font-extralight'>
                    Learn how to make amazing cakes
                  </span>
                </div>
                <div>
                  <span className='text-3xl sm:text-4xl 2xl:text-5xl font-normal'>
                    Have you already tried the classic double chocolate cake
                  </span>
                </div>
                <div className='capitalize'>
                  <button className='text-xl 2xl:text-2xl font-normal bg-[#C18A73] text-white rounded-full px-14 py-2 leading-none'>
                    Pastry Courses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#F2EBE9]'>
          <div className='max-w-[90rem] w-[97%] sm:w-[80%] md:w-[97%] lg:w-[80%] mx-auto pt-[10%]'>
            <div className='relative md:static grid grid-cols-1 md:grid-cols-2 gap-0'>
              <div className='static md:relative order-last md:order-first'>
                <div className='hidden static md:block md:absolute w-full h-full scale-[.65] shadow-3xl top-0 -left-9 lg:-left-16 bg-white rounded-l-[50px] lg:rounded-l-[100px] 2xl:rounded-l-[130px]' />
                <div className='static md:relative p-7 lg:p-14 2xl:p-20 pt-9 lg:pt-16 shadow-2xl md:shadow-none bg-white rounded-b-[50px] md:rounded-br-none md:rounded-l-[50px] lg:rounded-l-[100px] 2xl:rounded-l-[130px] w-full h-full'>
                  <div className='z-10 absolute top-16 left-0 right-0 px-8 md:px-0 md:static mb-3 xl:mb-5'>
                    <h3 className='text-3xl md:text-2xl xl:text-3xl 2xl:text-5xl font-semibold 2xl:leading-tight'>
                      Healthy and delicious
                    </h3>
                    <p className='text-2xl md:text-xl xl:text-2xl 2xl:text-4xl font-light xl:leading-tight'>
                      Taste delicious smoothies with seasonal fruits
                    </p>
                  </div>
                  <div className='mb-3 xl:mb-8'>
                    <p className='text-sm md:text-[0.6rem] xl:text-xs 2xl:text-base font-normal xl:font-medium 2xl:leading-tight'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla ornare ac sapien eget pharetra. Nullam leo est,
                      ultricies id lacus nec, lobortis pretium eros.
                      Pellentesque in pharetra augue. Vivamus condimentum
                      malesuada neque ac imperdiet. Pellentesque nec lobortis
                      ant
                    </p>
                  </div>
                  <div className='mb-3 xl:mb-6'>
                    <p className='text-[#C18A73] text-2xl md:text-lg xl:text-2xl 2xl:text-4xl font-normal leading-tight'>
                      Traditional fruit smoothie only $6
                    </p>
                  </div>
                  <div className='mb-3 xl:mb-10'>
                    <ul className='my-4'>
                      {[
                        'Extra Oaths',
                        'Extra Fruit',
                        'Extra Creams',
                        'Extra Topping',
                      ].map((word) => (
                        <li
                          key={word}
                          className='flex w-full justify-start items-center gap-1 text-sm md:text-xs xl:text-sm 2xl:text-base font-semibold'
                        >
                          <BsSuitDiamondFill />
                          <p>{word}</p>
                        </li>
                      ))}
                    </ul>
                    <button className='py-2 px-5 capitalize bg-[#C18A73] text-white text-base xl:text-xl 2xl:text-3xl font-normal leading-none rounded-full'>
                      Buy Now
                    </button>
                  </div>
                  <div className='mb-3 md:mb-auto'>
                    <p className='text-[0.6rem] xl:text-xs 2xl:text-base font-normal leading-tight'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla ornare ac sapien eget pharetra. Nullam leo est,
                      ultricies id lacus nec, lobortis pretium eros.
                      Pellentesque in pharetra augue.
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative w-full h-full'>
                <div className='hidden md:block md:absolute w-full h-full scale-[.55] shadow-s-3xl top-10 -left-[3.7rem] lg:-left-[4.7rem] xl:-left-[6.0rem] 2xl:-left-[7.9rem] bg-white rounded-full' />
                <Image
                  src='/imgs/Smoothie.jpg'
                  width={1000}
                  height={1000}
                  alt='smoothie'
                  className='relative h-[400px] sm:h-[500px] md:h-auto rounded-t-[50px] md:rounded-tl-none md:rounded-r-[50px] lg:rounded-r-[100px] 2xl:rounded-r-[130px]'
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
        <div className="h-[50rem] xl:h-[66rem] w-full bg-[url('/imgs/blender-with-orange.jpg')] bg-no-repeat bg-cover bg-right transform scale-x-[-1]">
          <div className='bg-gradient-radial from-[transparent] via-[rgba(242,235,233,0.2)] to-[rgba(242,235,233)] w-full h-full transform scale-x-[-1] '>
            <div className='flex justify-center lg:justify-end items-center h-full px-1 md:px-24 max-w-[90rem] w-[97%] lg:w-[80%] mx-auto'>
              <div className='h-[25%] lg:w-[65%] xl:w-[45%] 2xl:w-[55%] text-center lg:text-left'>
                <div className='mb-3'>
                  <span className='font-semibold text-3xl 2xl:text-5xl leading-tight'>
                    Beverage Courses
                  </span>
                </div>
                <div className='mb-10'>
                  <span className='font-light text-3xl 2xl:text-5xl leading-tight'>
                    Learn how to combine fruits and vegetables in the right way
                  </span>
                </div>
                <div className='flex gap-5 flex-col w-[70%] mx-auto lg:w-full'>
                  <input
                    type='text'
                    placeholder='Name'
                    autoComplete='name'
                    name='name'
                    className='placeholder:text-[#1A1615] rounded-full py-2 2xl:py-3 px-3 2xl:px-4 bg-white text-[#1A1615] text-sm 2xl:text-2xl font-medium'
                  />
                  <input
                    type='text'
                    placeholder='Email'
                    autoComplete='email'
                    name='email'
                    className='placeholder:text-[#1A1615] rounded-full py-2 2xl:py-3 px-3 2xl:px-4 bg-white text-[#1A1615] text-sm 2xl:text-2xl font-medium'
                  />
                  <button className='rounded-full mt-4 mb-2 py-2 2xl:py-3 w-[50%] mx-auto bg-[#C18A73] text-white text-base 2xl:text-2xl font-medium leading-none shadow-md'>
                    Enroll now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gradient-to-t from-[#C18A73] via-[#D9C1B8] to-[#F2EBE9]'>
          <div>
            <div className='max-w-[90rem] w-[97%] sm:w-[80%] md:w-[97%]  lg:w-[80%] mx-auto pt-[10%]'>
              <div className='relative md:static grid grid-cols-1 md:grid-cols-7 gap-0'>
                <div className='order-last md:order-first static md:relative col-span-4'>
                  <div className='hidden static md:block md:absolute w-full h-full scale-[.65] shadow-3xl top-0 -left-9 lg:-left-16 bg-white rounded-l-[50px] lg:rounded-l-[100px] 2xl:rounded-l-[130px]' />
                  <div className='static md:relative p-7 lg:p-14 2xl:p-20 pt-9 lg:pt-16 bg-white shadow-2xl md:shadow-none rounded-none rounded-b-[50px] md:rounded-br-none md:rounded-l-[50px] lg:rounded-l-[100px] 2xl:rounded-l-[130px] w-full h-full'>
                    <div className='absolute top-16 left-0 right-0 z-[10] px-8 md:px-auto md:static mb-3 xl:mb-10'>
                      <h3 className='text-3xl md:text-2xl xl:text-3xl 2xl:text-5xl font-semibold 2xl:leading-tight'>
                        about us
                      </h3>
                      <p className='text-2xl md:text-xl xl:text-2xl 2xl:text-4xl font-light xl:leading-tight'>
                        Passionate about always offering you the best
                      </p>
                    </div>
                    <div className='mb-3 xl:mb-10'>
                      <p className='text-sm md:text-xs xl:text-sm 2xl:text-base font-semibold'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla ornare ac sapien eget pharetra. Nullam leo est,
                        ultricies id lacus nec, lobortis pretium eros.
                        Pellentesque in pharetra augue. Vivamus condimentum
                        malesuada neque ac imperdiet. Pellentesque nec lobortis
                        ant
                      </p>
                    </div>
                    <div className='mb-10 xl:mb-14'>
                      <p className='text-sm md:text-xs xl:text-sm 2xl:text-base font-semibold'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla ornare ac sapien eget pharetra. Nullam leo est,
                        ultricies id lacus nec, lobortis pretium eros.
                        Pellentesque in pharetra augue. Vivamus condimentum
                        malesuada neque ac imperdiet. Pellentesque nec lobortis
                        ant
                      </p>
                    </div>
                    <div className='mb-10 text-center md:text-left'>
                      <button className='w-[70%] py-2 px-5 capitalize bg-[#C18A73] text-white text-base xl:text-xl 2xl:text-3xl font-normal leading-none rounded-full'>
                        Read more
                      </button>
                    </div>
                    <div>
                      <p className='text-[0.6rem] xl:text-xs 2xl:text-base font-normal leading-tight'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla ornare ac sapien eget pharetra. Nullam leo est,
                        ultricies id lacus nec
                      </p>
                    </div>
                  </div>
                </div>
                <div className='relative col-span-3'>
                  <div className='absolute w-full h-full scale-[.55] shadow-s-3xl top-10 -left-[3.7rem] lg:-left-[4.7rem] xl:-left-[6.0rem] 2xl:-left-[7.9rem] bg-white rounded-full' />
                  <Image
                    src='/imgs/female-chef.jpg'
                    width={1000}
                    height={1000}
                    alt='smoothie'
                    className='h-[400px] sm:h-[700px] md:h-auto relative rounded-t-[50px] md:rounded-tl-none md:rounded-r-[50px] lg:rounded-r-[100px] 2xl:rounded-r-[130px]'
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
              <div className='grid grid-cols-1 md:grid-cols-11 md:gap-3 2xl:gap-20'>
                <div className='col-span-8 grid grid-cols-1 sm:grid-cols-8 2xl:col-span-7 gap-0'>
                  <div className='order-last sm:order-first px-[3%] sm:px-[20%] md:px-[3%]  lg:px-[10%] xl:px-[20%] 2xl:pl-[calc((100vw_-_95rem)_/_2)] pt-5 lg:pt-10 bg-white col-span-5'>
                    <div className='mb-1 lg:mb-3 2xl:mb-4'>
                      <h3 className='text-2xl lg:text-3xl 2xl:text-6xl font-semibold mb-1 lg:mb-4'>
                        Favourite seasonal smoothie
                      </h3>
                      <p className='text-xl lg:text-2xl 2xl:text-4xl font-light'>
                        The most loved by the little ones
                      </p>
                    </div>
                    <div className='mb-1 lg:mb-6'>
                      <p className='text-[0.6rem] lg:text-xs xl:text-sm 2xl:text-base font-medium lg:font-semibold'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla ornare ac sapien eget pharetra. Nullam leo est,
                        ultricies id lacus nec, lobortis pretium eros.
                        Pellentesque in pharetra augue. Vivamus condimentum
                        malesuada neque ac imperdiet. Pellentesque nec lobortis
                        ant
                      </p>
                    </div>
                    <div className='mb-5 lg:mb-10'>
                      <ul className='my-4'>
                        {['Extra Topping', 'Extra Creams', 'Extra Gummies'].map(
                          (word) => (
                            <li
                              key={word}
                              className='flex w-full justify-start items-center gap-1 text-xs xl:text-sm 2xl:text-base font-medium lg:font-semibold'
                            >
                              <BsSuitDiamondFill />
                              <p>{word}</p>
                            </li>
                          )
                        )}
                      </ul>
                      <div className='flex flex-wrap 2xl:flex-col-reverse gap-5 justify-start items-center'>
                        <button className='py-1 lg:py-2 px-4 lg:px-8 capitalize bg-[#C18A73] text-white text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium leading-none rounded-full'>
                          Buy Now
                        </button>
                        <div>
                          <button className='text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium leading-none bg-[#C18A73] text-white px-2 lg:px-4 py-1 lg:py-2 rounded-l-full'>
                            -
                          </button>
                          <span className='text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium leading-none text-[#C18A73] px-2 lg:px-4 py-1 lg:py-2'>
                            1
                          </span>
                          <button className='text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium leading-none bg-[#C18A73] text-white px-2 lg:px-4 py-1 lg:py-2 rounded-r-full'>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='relative col-span-3'>
                    <div className='absolute w-full h-full scale-[.65] shadow-2xl lg:shadow-3xl top-7 2xl:top-20 -right-8 lg:-right-3 2xl:-right-20 bg-white rounded-r-[50px] lg:rounded-r-[100px] 2xl:rounded-r-[130px]' />
                    <Image
                      src='/imgs/milkshake.jpg'
                      width={340}
                      height={340}
                      alt='smoothie'
                      className='h-[350px] sm:h-auto w-full sm:w-auto 2xl:w-full relative rounded-none md:rounded-r-[50px] lg:rounded-r-[100px] 2xl:rounded-r-[130px]'
                    />
                  </div>
                </div>
                <div className='w-full md:col-span-3 py-6 2xl:py-24'>
                  <div className='mb-1 lg:mb-5 text-center md:text-left'>
                    <span className='text-2xl lg:text-4xl 2xl:text-6xl font-light leading-tight'>
                      For all tastes
                    </span>
                  </div>
                  <div className='mb-1 lg:mb-5 w-full md:w-[90%] lg:w-[40%] leading-none text-center md:text-left'>
                    <span className='text-[0.6rem] lg:text-xs 2xl:text-lg font-bold'>
                      Accompany your drink with a deli desert:
                    </span>
                  </div>
                  <div>
                    <div className='flex flex-wrap justify-center sm:justify-evenly md:block gap-x-10 gap-y-0 sm:gap-10 md:gap-0 w-full sm:w-[80%] md:w-auto mx-auto'>
                      <div className='flex justify-start items-center gap-3 my-4 2xl:my-10'>
                        <div>
                          <Image
                            src='/imgs/pudding-with-strawberry.jpg'
                            width={100}
                            height={100}
                            alt='pudding with strawberry'
                            className='w-[80px] xl:w-[200px] 2xl:w-[250px] lg:rounded-2xl xl:rounded-3xl'
                          />
                        </div>
                        <div>
                          <div className='2xl:mb-3'>
                            <span className='text-[0.6rem] lg:text-xs 2xl:text-2xl font-normal leading-tight'>
                              add to my order
                            </span>
                          </div>
                          <div>
                            <button className='text-xs lg:text-sm 2xl:text-xl font-normal 2xl:font-medium leading-none bg-[#C18A73] text-white px-2 2xl:px-4 py-1 2xl:py-2'>
                              -
                            </button>
                            <span className='text-xs lg:text-sm 2xl:text-xl font-normal 2xl:font-medium leading-none text-[#1A1615] px-2 2xl:px-4 py-1 2xl:py-2'>
                              1
                            </span>
                            <button className='text-xs lg:text-sm 2xl:text-xl font-normal 2xl:font-medium leading-none bg-[#C18A73] text-white px-2 2xl:px-4 py-1 2xl:py-2'>
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-3 my-4 2xl:my-10'>
                        <div>
                          <Image
                            src='/imgs/cream-pastry.jpg'
                            width={100}
                            height={100}
                            alt='pudding with strawberry'
                            className='w-[80px] xl:w-[200px] 2xl:w-[250px] lg:rounded-2xl xl:rounded-3xl'
                          />
                        </div>
                        <div>
                          <div className='2xl:mb-3'>
                            <span className='text-[0.6rem] lg:text-xs 2xl:text-2xl font-normal leading-tight'>
                              add to my order
                            </span>
                          </div>
                          <div>
                            <button className='text-xs lg:text-sm 2xl:text-xl font-normal 2xl:font-medium leading-none bg-[#C18A73] text-white px-2 2xl:px-4 py-1 2xl:py-2'>
                              -
                            </button>
                            <span className='text-xs lg:text-sm 2xl:text-xl font-normal 2xl:font-medium leading-none text-[#1A1615] px-2 2xl:px-4 py-1 2xl:py-2'>
                              1
                            </span>
                            <button className='text-xs lg:text-sm 2xl:text-xl font-normal 2xl:font-medium leading-none bg-[#C18A73] text-white px-2 2xl:px-4 py-1 2xl:py-2'>
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='w-full text-center md:text-left'>
                      <button className='bg-[#1A1615] text-white text-xs lg:text-sm 2xl:text-3xl font-medium leading-none py-1 lg:py-2 px-4 lg:px-5 2xl:mt-3 capitalize rounded-full'>
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
              <div className='max-w-[90rem] w-[67%] lg:w-[40%] mx-auto'>
                <div className='w-full text-center mb-2 lg:mb-10'>
                  <span className='text-4xl sm:text-6xl lg:text-8xl font-normal text-[#1A1615] '>
                    Deli//
                  </span>
                  <span className='text-4xl sm:text-6xl lg:text-8xl font-extralight text-[#1A1615] '>
                    Break
                  </span>
                </div>
                <div className=' text-center w-[80%] mx-auto'>
                  <div className='mb-7'>
                    <span className='text-lg sm:text-xl lg:text-3xl font-light text-[#1A1615]'>
                      Your favourite free drink on your birthday
                    </span>
                  </div>
                  <div className='mb-10'>
                    <button className='block w-[75%] mx-auto py-2 lg:py-3 bg-[#1A1615] text-white leading-none rounded-full shadow-md'>
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
              <div className='relative max-w-[90rem] w-[97%] lg:w-[80%] mx-auto'>
                <div className='absolute w-full h-full scale-[.8] shadow-3xl -top-4 left-0' />
                <div className='relative rounded-t-[80px] bg-[#1A1615] pt-20 pb-5 px-[5%]'>
                  <div className='mb-7'>
                    <div className='w-full text-center mb-4'>
                      <span className='text-4xl sm:text-6xl font-normal text-[#C18A73] '>
                        Deli//
                      </span>
                      <span className='text-4xl sm:text-6xl font-extralight text-[#C18A73] '>
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
                  <div className='block md:flex md:justify-between'>
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
                      <div className='mt-7 md:mt-auto mb-7'>
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
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
