"use client"
import ProfileCard from '@/Components/popup/Reactbit'

const Popup = () => {
    return (
        <div>
            <div className="bg-black text-white"  >X</div>
            <div className="bg-white border-2 border-black flex ">


                <ProfileCard
                    name="Javi A. Torres"
                    title="Software Engineer"
                    handle="javicodes"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="/hassan-removebg-preview.png"
                    showUserInfo={false}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                    behindGlowColor="rgba(125, 190, 255, 0.67)"
                    iconUrl="/logo-removebg-preview.png"
                    behindGlowEnabled
                    innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                />
            </div>
        </div>
    )
}
export default Popup;