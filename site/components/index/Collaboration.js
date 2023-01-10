import Image from "next/image"

const Collaboration = () => {
    return <div className="stats relative font-dosis py-28"
        style={{
            position: 'relative',
            height: 'auto',
            width: '100%',
            clipPath: 'inset(0 0 0 0)',
        }}
    >
        <div
            style={{
                position: 'fixed',
                height: '100%',
                width: '100%',
                left: '0',
                top: '0',
            }}
        >
            <Image className="absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center bg-fixed brightness-50 "
                src="/images/banner-bg.jpg"
                width={1600}
                height={500}
                alt="banner" />
        </div>
        {/* <div className="grid grid-rows-4 grid-flow-col lg:mx-16 relative z-10 font-dosis text-white max-w-screen-lg xl:mx-auto ">
            <div className="grid flextext-xl font-semibold text-center">
                <span  className="text-4xl font-bold  ">27 +</span>
                <br/>
                <div className="text-sm font-bold "> <span>Years Helping Business</span></div>
               
                <span  className="text-4xl font-bold  ">27 +</span>
                <br/>
                <div className="text-sm font-bold "> <span>Years Helping Business</span></div>
                <span  className="text-4xl font-bold  ">27 +</span>
                <br/>
                <div className="text-sm font-bold "> <span>Years Helping Business</span></div>
                
            </div>
        </div> */}

    </div>

}

export default Collaboration