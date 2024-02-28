import logoImage from './Assets/asserts/logo.png'
import trophyImage from './Assets/asserts/1.png'
import avardRecieveImage from './Assets/asserts/2.png'
import instrumenstImage from './Assets/asserts/3.png'
import {Phone,Dribbble,Facebook,Dot} from 'lucide-react'

import './App.css'


function App() {



  return (
    <>
      <div className=' w-full h-screen p-2'>
        <div className='w-[400px] m-auto'>
          <img src={logoImage} alt="logo-Image" />
        </div>

        {/* trophy and photo */}

        <div className='w-full flex mt-3'>
            <div className='min-w-[37%]'>
              <img className='w-[400px] h-[101%]'  src={trophyImage} alt="trophyImage" />
            </div>

            <div >
              <div className='font-bold text-lg'>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
              </div>

              <div className='ml-3 text-[15px]  font-medium'>
                <ul>
                  <li className='flex'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
                  C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                  </li>

                  <li className='flex'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
                  C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
                  </li>
                </ul>

                {/* image */}
                <div className='mr-4 mt-2'>
                  <img src={avardRecieveImage} alt="avardimage" />
                </div>

                <div>
                Government of India has awarded the <span className='font-bold'> "National Energy Conservation Award 2018" </span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </div>
              </div>
            </div>
        </div>

        <div className='mt-[3%] font-medium text-center'>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
        </div>

        <div className='w-[80%] m-auto mt-4'>
          <img src={instrumenstImage} alt="" />
        </div>

        <div className='text-center mt-2 text-[15px]  font-medium'>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
        </div>

        <div className='mt-2 border-b-2 border-[1.2px] border-red-800'>

        </div>

        <div className='mt-2 text-center font-bold text-[18px]'>
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </div>

        <div className='text-center font-medium'>
        CHEMICALS & PROCESS | POWER WATER & WASTE WATER | OILS & GAS  |PHARMA SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE |PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
        </div>

        {/* footer */}
        <div className='w-full h-[105px] flex bg-red-500 mt-5  '>
          <div className='flex m-auto bg-red-500 gap-x-2'>
            <div className='bg-white w-[40px] h-[35px] rounded-full '>
            <Phone className='m-auto mt-1' />
            </div>
            <div className='bg-red-500 text-white' >
              Toll free 1800 200 1234
            </div>
          </div>

          <div className='flex m-auto bg-red-500 gap-x-2' >
            <div className='bg-white w-[40px] h-[35px] rounded-full'>
            <Facebook className='m-auto mt-1'/>
            </div>
            <div className='bg-red-500 text-white'>
              www.facebook.com/cripumps
            </div>
          </div>

          <div className='flex m-auto bg-red-500 gap-x-2' >
            <div className='bg-white w-[40px] h-[35px] rounded-full'>
              <Dribbble className='m-auto mt-1'/>
            </div>
            <div className='bg-red-500 text-white'>
              www.crigroups.com
            </div>
          </div>

        </div>

        
        <div className='mt-2'>
          </div>
      </div>
    </>
  )
}

export default App
