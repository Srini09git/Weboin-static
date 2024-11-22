// components/GetInTouchSection.js
export default function GetintheTouch() {
    return (
        <section className="flex items-center justify-start  py-10">
            <div className="flex items-center justify-center w-2/5 max-w-screen-lg ">
                {/* Left Line */}
                <div className="border-t-2 border-black flex-grow mr-2"></div>
                <div className=" flex justify-start items-center">
                    <h1 className="relative text-6xl font-semibold text-black  tracking-wide">
                        GET IN TOUCH
                    </h1>
                    {/* Center Text */}
                    <h1 className="absolute text-8xl font-light ml-5 text-gray-700 opacity-10 tracking-wide select-none">
                        GET IN TOUCH
                    </h1>
                </div>

            </div>
        </section>
    );
}
