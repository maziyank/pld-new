import { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div className='bg-indigo-500 text-purple-lighter flex-none w-64 pb-6 hidden md:block'>
        <div className='bg-indigo-800 text-white mb-2 pt-4 px-4 flex justify-between'>
          <div className='flex-auto pb-3'>
            <h1 className='font-semibold text-xl leading-tight truncate'>
              Bakhtiar A.
            </h1>
            <span className='mb-6 text-white opacity-50 text-sm'>
              Sekretariat Jenderal
            </span>
          </div>
          <div>
            <img
              alt='avatar'
              className='w-12 h-12 rounded-full border-1 border-gray-300'
              src='https://pbs.twimg.com/profile_images/1143759747/Me.jpg'
            />
          </div>
        </div>
        <div className='mb-8'>
          <div className='px-4 mb-2 mt-10 text-white flex justify-between items-center'>
            <div className='opacity-75'>Kertas Kerja</div>
            <div>
              <svg
                className='fill-current h-4 w-4 opacity-50'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
          <div className='bg-indigo-700 flex items-center px-4 py-2 hover:bg-indigo-600 focus:bg-indigo-600  cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 mr-2 text-white  opacity-50'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
              />
            </svg>
            <span className='text-white opacity-75'>RPMK Sesuatu 1</span>
          </div>
          <div className='flex items-center px-4 py-2 hover:bg-indigo-600 focus:bg-indigo-600  cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 mr-2 text-white  opacity-50'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
              />
            </svg>
            <span className='text-white opacity-75'>RPMK Sesuatu 1</span>
          </div>
          <div className='flex items-center px-4 py-2 hover:bg-indigo-600 focus:bg-indigo-600  cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 mr-2 text-white  opacity-50'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
              />
            </svg>
            <span className='text-white opacity-75'>RPMK Sesuatu 1</span>
          </div>
        </div>
        <div>
          <div className='px-4 mb-2 text-white flex justify-between items-center px-4 py-2 hover:bg-indigo-600 focus:bg-indigo-600  cursor-pointer'>
            <div className='opacity-75'>Draft Baru</div>
            <div>
              <svg
                className='fill-current h-4 w-4 opacity-50'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z' />
              </svg>
            </div>
          </div>
          <div className='px-4 mb-2 text-white flex justify-between items-center px-4 py-2 hover:bg-indigo-600 focus:bg-indigo-600  cursor-pointer'>
            <div className='opacity-75'>Ekspor ke Word</div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='fill-current h-4 w-4 opacity-50'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
