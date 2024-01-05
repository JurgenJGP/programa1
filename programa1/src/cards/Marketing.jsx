import React, { useState } from 'react'
import { Button1 } from '../buttonbody/Button1'
import { Button2 } from '../buttonbody/Button2'



export const Marketing = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };
    return (
        <div className={`cardcontainer gap-[30px bg-[#FFF38F] ${expanded ? 'expanded' : ''}`} onClick={handleToggle}>
            <div className='flex col-span-2 gap-[30px] items-center'>
                <img className='h-[60px]' src='/insignias/insignia2.png' alt="" />
                <div className='flex flex-col'>
                    <div className='flex gap-[30px]'>
                        <h2 className='text-left text-[#0F1115]'>Marketing Designer</h2>
                        <button className='bg-[#36E67F] rounded py-[2px] px-[4px] text-[#fff]'>verified</button>
                    </div>
                    <h3 className='text-left'>Whimsical</h3>
                    <div className='flex gap-[10px] text-black'>
                        <Button1 text='🇪🇺 Europe' />
                        <Button1 text='🇬🇧 United Kingdom' />
                        <Button1 text='🇺🇸 United States' />
                        <Button1 text='🇨🇦 Canada' />
                    </div>
                </div>
            </div>
            <div className='flex gap-[10px]'>
                <Button2 text='Design' />
                <Button2 text='Marketing' />
            </div>
            <div className='flex items-center'>
                <img src="/pinchito/attach.png" alt="" />
                <span >  6d</span>
            </div>

            {expanded && (
                <div className="flex col-span-4 w-full mx-auto max-w-[1476px] p-[4%] bg-[#fff]">
                    <h2>Whimsical is hiring a</h2>
                    <span>Remote Marketing Designer</span>
                    <h4>Description</h4>
                    <p>
                        Whimsical is a B2B SaaS company on a mission to make collaboration more enjoyable and productive by building an all-in-one collaboration hub. We are are passionate about user experience, interconnectedness of tools and building software that feels like magic.
                        <br />
                        We’re looking for an experienced Marketing Designer to help us evolve and scale the Whimsical brand across various channels and mediums.
                    </p>
                </div>
            )}
        </div>
    );

};