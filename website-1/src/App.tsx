import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Card from './components/Card'

function App() {


  return (
    <div>
        <Nav />
        <div className='grid grid-cols-2 sm:grid  sm:grid-cols-12 '>
          <Card  title='interface CardProps {
    title: string;asdasdk  kasd l ad lasdla sdl l
}

const Card: React.FC<CardProps> = ({ title }) => '/>
          <Card title='hii there' />
          <Card title='hii there'/>
          <Card title='hii there'/>
        </div>
    </div>
  )
}

export default App
