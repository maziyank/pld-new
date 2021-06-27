import { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className='flex items-center justify-center h-screen bg-purple-800 text-white'>
        <div className='w-72'>
          <div className='justify-center'>
            <h1 className='text-xl text-center'>Selamat Datang di PRIME-LD</h1>
            <h2 className='text-xs text-center'>
              Silahkan Login dengan Kemenkeu ID
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-2 place-items-center'>
            <input
              placeholder='Masukan NIP'
              className='mt-4 py-2 px-3 bg-white rounded-md placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200'
            />
            <input
              placeholder='Masukan Kata Kunci'
              className='py-2 px-3 bg-white rounded-md placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200'
            />
            <button className='block w-1/2 p-1 mt-4 text-md text-white rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none'>
              Masuk
            </button>
          </div>
        </div>
      </div>
    )
  }
}
