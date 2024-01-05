import React from 'react'
import { Button1 } from '../buttonbody/Button1'
import { Button2 } from '../buttonbody/Button2'

export const CaardPhp = () => {
    return (
        <div className='cardcontainer gap-[30px] bg-[#FFD500]'>
            <div className='flex col-span-2 gap-[30px] items-center'>
                <img className='h-[60px]' src='/insignias/insignia3.png' alt="" />
                <div className='flex flex-col'>
                    <div className='flex gap-[30px]'>
                        <h2 className='text-left text-[#0F1115]'>PHP Developer</h2>
                    </div>
                    <h3 className='text-left'>Transax</h3>
                    <div className='flex gap-[10px] text-black'>
                        <Button1
                            text='🌏 Worldwide' />
                        <Button1
                            text='💰 $50k - $120k' />
                    </div>
                </div>
            </div>
            <div className='flex gap-[10px]'>
                <Button2
                    text='Engineer' />
                <Button2
                    text='Developer' />
                <Button2
                    text='Full Stack' />
            </div>
            <div className='flex items-center'>
                <img src="/pinchito/attach.png" alt="" />
                <span>  22d</span>
            </div>
        </div>
    )
}