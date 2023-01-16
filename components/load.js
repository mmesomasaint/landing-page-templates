export default function Load() {
    return (
      <div className='absolute z-40 inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.35)]'>
        <div className='border-8 border-green-200 bg-transparent w-12 h-12 rounded-full'>
          <div className='border-8 border-green-600 w-full h-full bg-transparent rounded-full animate-spin scale-150' />
        </div>
      </div>
    )
}
