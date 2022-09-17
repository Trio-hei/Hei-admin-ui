/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from 'react';
import './presence.css'
import { useNavigate } from 'react-router-dom';

export function Presence() {
    const [photo, setPhoto] = useState<string>("")/* Aws rekognition*/ 
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const photoRef = useRef<HTMLCanvasElement | null>(null);
    const navigate = useNavigate();

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: { width:1100, height:1100 }
            })
            .then(stream => {
                let video = videoRef.current;
                video!.srcObject = stream;
                // eslint-disable-next-line no-lone-blocks, @typescript-eslint/no-unused-expressions
                {video? video!.play().catch((err)=>console.log(err)):""}
            })
    }
    
    const takePhoto = () =>{
        const width = 500;
        const height = width / (16/9);
    
        let video:HTMLVideoElement = videoRef.current!;
        let photo:HTMLCanvasElement = photoRef.current!;
    
        photo!.width = width!;
        photo.height = height;
        
        let ctx = photo.getContext('2d');
        ctx!.drawImage(video, 0, 0, width, height)
        setPhoto(photo.toDataURL())
    }
    
    
    useEffect(()=>{
        getVideo();
    }, [videoRef])

    return (
        <div className='body'>
        <video ref={videoRef}/>
        <div><button onClick={takePhoto} className='btn1'>Verifier ma présence</button> 
        <button onClick={()=>navigate("/")} className='btn2'>Terminer</button></div>
        <canvas ref={photoRef} style={{ display:'none'}}/>
        <img src={photo}/>
        </div>
    )
}


