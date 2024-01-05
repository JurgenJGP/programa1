import React from 'react'
import { Button1 } from '../buttonbody/Button1'
import { Button2 } from '../buttonbody/Button2'

export const CardReliability = () => {
    return (
        <div className='cardcontainer gap-[30px] bg-[#FFF38F]'>
            <div className='flex col-span-2 gap-[30px] items-center'>
                <img className='h-[60px]' src='/insignias/insignia4.png' alt="" />
                <div className='flex flex-col'>
                    <div className='flex gap-[30px]'>
                        <h2 className='text-left text-[#0F1115]'>Site Reliability Engineer 🎈</h2>
                    </div>
                    <div className='flex gap-[30px]'>
                        <h3 className='text-left text-[#0F1115]'>Sticker Mule</h3>
                        <img src="/pinchito/newgif.png" alt="" />
                    </div>
                    <div className='flex gap-[10px] text-black'>
                        <Button1
                            text='🌏 Worldwide' />
                        <Button1
                            text='💰 $140k - $150k' />
                    </div>
                </div>
            </div>
            <div className='flex gap-[10px]'>
                <Button2
                    text='Engineer' />
                <Button2
                    text='JavaScript' />
                <Button2
                    text='Golang' />
            </div>
            <div className='flex items-center'>
                <img src="/pinchito/attach.png" alt="" />
                <span>  4h</span>
            </div>
        </div>
    )
}