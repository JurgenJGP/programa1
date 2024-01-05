import React from "react";


export const Filtros = () => {
    return (
        <section className='flex flex-col  relative top-[-150px] w-full max-w-[1141px] p-[20px] mx-auto'>
            <div className="flex justify-between">
                <div className="flex gap-[24px]">
                    <img src="/logos/logo.png" alt="" />
                    <select name="job">
                        <option value="search" disabled hidden selected>🔍 Search</option>
                        <option value="engineer">🤓 Engineer</option>
                        <option value="executive">💼 Executive</option>
                        <option value="senior">👵 Senior</option>
                        <option value="developer">🤓 Developer</option>
                        <option value="finance">💰 Finance</option>
                        <option value="sys admin">♾️ Sys Admin</option>
                    </select>
                    <select name="job">
                        <option value="location" disabled hidden selected>🌏 Location</option>
                    </select>
                    <select name="job">
                        <option value="salary" disabled hidden selected>💵 Salary</option>
                    </select>
                    <select name="job">
                        <option value="benefits" disabled hidden selected>🎪 Benefits</option>
                    </select>
                </div>
                <select name="job">
                    <option value="sort by" disabled hidden selected>🦴 Sort by</option>
                </select>
            </div>
            <div className="flex gap-[32px]">
                <button className="buttonemogie">
                    🤓 Engineer
                </button>
                <button className="buttonemogie">
                    💼 Executive
                </button>
                <button className="buttonemogie">
                    👵 Senior
                </button>
                <button className="buttonemogie">
                    🤓 Developer
                </button>
                <button className="buttonemogie">
                    💰 Finance
                </button>
                <button className="buttonemogie">
                    ♾️ Sys Admin
                </button>
            </div>
        </section>
    )
}