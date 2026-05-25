/* eslint-disable react/prop-types */
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ServiceCard = ({item,index}) => 
{
    const { name, desc, bgColor, textColor } = item;
    return (
        <div className='py-[30px] px-3 lg:px-5'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700]'>{name}</h2>
            <p className='text-[16px] leading-7 font-[400] text-headingColor mt-4'>
                {desc}
            </p>

            <div className='flex items-center justify-between mt-[30px]'>
                <Link 
                    to='/doctor' 
                    className='flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                    style={{
                        borderColor: '#181A1E',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderRadius: '50%',
                        width: '44px',
                        height: '44px',
                        marginRight: '8px', // Adjust the margin as needed
                    }}
                >
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
                <span 
                    className='flex items-center justify-center text-[18px] leading-[30px] font-[600]' 
                    style={{
                        background: bgColor, 
                        color: textColor,
                        borderRadius: '50%', // This makes the span round
                        width: '44px',
                        height: '44px',
                        marginLeft: '8px', // Adjust the margin as needed
                    }}
                >
                    {index + 1}
                </span>
            </div>
        </div>
    );
}

export default ServiceCard
