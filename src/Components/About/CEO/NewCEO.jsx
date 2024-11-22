import Image from "next/image";

const NewCEO = () => {
    return (
        <div className="relative">

            <Image src="/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-10 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-8'>

                    {/* COLUMN-1 */}
                    <div>
                        <img src="https://weboin.com/wp-content/uploads/2024/07/CEO-of-the-weboin-digital-marketing-agency.jpg.webp" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Dedicated to help peoples design needs.</h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis</p>
                        <p className="text-2xl font-semibold mt-12 lg:ml-32  text-center lg:text-start"><span className="border-t-2 border-black flex-grow mr-2 w-10 sm:mr-0 "></span> Saravana, CEO</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default NewCEO;
