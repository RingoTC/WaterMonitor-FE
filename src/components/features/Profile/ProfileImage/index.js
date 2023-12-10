import Image from 'next/image';
import './style.css'

export default function ProfileImage() {
    return <Image src='/images/profile_default.png'
                  width= '120'
                  height='120'
                  className="circle-cropped"
                  alt="profile picture"/>
}