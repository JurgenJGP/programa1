import React from 'react'
import { Button1 } from '../buttonbody/Button1'
import { Button3 } from '../buttonbody/Button3'

export const CardSenior = () => {
    return (
        <div className='cardcontainer gap-[30px] bg-[#FF61E2]'>
            <div className='flex col-span-2 gap-[30px] items-center'>
                <img className='h-[60px]' src='/insignias/insignia6.png' alt="" />
                <div className='flex flex-col text-[#fff]'>
                    <div className='flex gap-[30px]'>
                        <h2 className='text-left '>Senior Front End Developer</h2>
                    </div>
                    <h3 className='text-left'>Migaku</h3>
                    <div className='flex gap-[10px] text-black'>
                        <Button1
                            text='🌏 Worldwide' />
                        <Button1
                            text='💰 $60k - $100k' />
                    </div>
                </div>
            </div>
            <div className='flex gap-[10px]'>
                <Button3
                    text='Engineer' />
                <Button3
                    text='Developer' />
                <Button3
                    text='Full Stack' />
            </div>
            <div className='flex items-center'>
                <img src="/pinchito/attach.png" alt="" />
                <span>  24d</span>
            </div>
        </div>
    )
}