import { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='border-b flex px-6 py-2 items-center flex-none'>
        <div className='flex flex-col'>
          <h3 className='text-grey-darkest mb-1 font-extrabold'>
            RPMK Standar Biaya.ldx2
          </h3>
        </div>
        <div className='ml-auto hidden md:block'>
          <div className='relative'>
            <input
              type='search'
              placeholder='Search'
              className='appearance-none border border-grey rounded-lg pl-2 pr-4 py-2'
            />
          </div>
        </div>
      </div>
    )
  }
}
