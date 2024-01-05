import './index.css'
import { CaardPhp } from './cards/CardPhp'
import { CardReliability } from './cards/CardReliability'
import { CardSofware } from './cards/CardSOfware1'
import { CardSenior } from './cards/CardSenior'
import { Marketing } from './cards/Marketing'
import Buscador from './assets/buscador/Buscador'
import { Navbar } from './navbar/Navbar'
import { Redes } from './redes/Redes'
import { Filtros } from './filtros/Filtos'



function App() {

  return (
    <div className='w-full mx-auto max-w-[1476px] bg-[#F5F5F5]'>
      <div className="relative h-[480px] bg-cover bg-center" style={{ backgroundImage: "url('/imagenbg/IMAGE.png')" }}>
        <Navbar />
        <div className='absolute inset-0 top-[-120px] flex items-center justify-center flex-col text-white'>
          <h1 className='text-center mb-5'>Remote | OK</h1>
          <p className='text-center'>find a <span className='font-black text-[44px]'>remote job</span></p>
          <p className='text-center'>work from <span className='font-black text-[44px]'>anywhere</span></p>
          <Buscador />
        </div>
        <div className='absolute w-full top-[340px] '>
          <img className='w-full h-[220px]' src="/imagenbg/Rectangle.png" alt="" />
        </div>
      </div>
      <section className='notice'>
        <p className='subtittle'>👉 Hiring remotely? <u>Reach 2,000,000+ remote workers</u> on the 🏆 #1 Remote Job Board</p>
        <button className='b text-white bg-[#FF4742]'>Post a remote job</button>
        <button className='b bg-[#FFFBFB] text-[#FF4742]
                border-2 border-solid border-[#FF4742]'>
          Hide this
        </button>
      </section>
      <Redes />
      <Filtros />
      <section className='containers'>
        <div className='rounded-xl p-[2%] h-[88px] flex items-center justify-between bg-[#343477] text-white'>
          <div className='flex gap-[30px] items-center'>
            <img className='h-[60px]' src="/public/insignias/insignia1.png" alt="" />
            <div>
              <h2 className='text-left'>Nomad Health by SafetyWing</h2>
              <span>Global health insurance for remote workers and nomads</span>
            </div>
          </div>
          <button className='rounded-xl bg-teal-400 py-3 px-4'>Sign me up</button>
        </div>
        <Marketing />
        <CaardPhp />
        <CardReliability />
        <CardSofware />
        <CardSenior />
      </section>
    </div>
  )
}

export default App

