import Fireworks from "@fireworks-js/react";
import { React, useState,useEffect } from "react";
export default function Fire() {
    const [Content, setContent] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setContent(true);
        }, 3000);
    }, [])

    return (
        <>
            <div className="bg-black h-full" style={{ position: "fixed", height: "100%", width: "100%" }}>
                {!Content ? (
                    <Fireworks
                        options={{
                            rocketsPoint: {
                                min: 0,
                                max: 100
                            }
                        }}
                        style={{
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            position: 'fixed',
                            background: '#000'
                        }}
                    />
                ) : (
                    <div className="flex flex-col justify-center items-center h-full">
                            <div className="bg-gray-800 border-t border-gray-600 shadow rounded-lg max-w-lg w-full p-6">
                                <h4 className='text-white text-2xl'>Selamat Ulang Tahun Sayang</h4>
                                <p className='text-lg text-gray-400 leading-relaxed'>Cie Yang lagi Ngambek gara-gara di prank</p>
                            </div>
                    </div>
                )}
            </div>
        </>
    )
}