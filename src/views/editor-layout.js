import { Component } from 'react'
import Editor from './components/editor'
import Header from './components/header'
import Sidebar from './components/sidebar'

export default class EditorLayout extends Component {
  render() {
    return (
      <div className='font-sans antialiased h-screen flex'>
        <div className='bg-indigo-500 text-purple-lighter flex-none w-64 pb-6 hidden md:block'>
          <Sidebar />
        </div>
        <div className='flex-1 flex flex-col bg-white overflow-hidden'>
          <Header />
          <div className='px-1 py-4 flex-1 overflow-y-scroll'>
            <Editor />
          </div>
        </div>
      </div>
    )
  }
}
