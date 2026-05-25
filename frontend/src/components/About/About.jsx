import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'
const About = () => {
  return <section>
    <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            {/*==========about img==========*/}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img src={aboutImg} alt="" />
                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                    <img src={aboutCardImg} alt="" />
                </div>
            </div>
            {/*==========about img==========*/}
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading'>Proud to be one the nation best</h2>
                <p className='text__para'>
                    Dr. Jane Smith is a seasoned Internal Medicine specialist with over 15 years in the field, trained at Johns Hopkins University and the Mayo Clinic. Known for her holistic approach to patient care, she excels in preventive medicine and chronic disease management.
                    </p>

                <p className='text__para mt-[30px]'>
                Dr. Smith is renowned for her exceptional patient care, always taking the time to understand each individual's needs and concerns. Her empathetic approach and dedication to comprehensive wellness set her apart in patient-centered healthcare.
                </p>
                <Link to='/'>
                    <button className='btn'>
                        Learn More
                    </button>
                </Link>
            </div>
        </div>
    </div>
  </section>
}

export default About
