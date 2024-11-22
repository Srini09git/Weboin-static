import React from 'react';
import { useInView } from 'react-intersection-observer';

export const Extray = () => {
  const [trophyRef, trophyInView] = useInView({ triggerOnce: true });
  const [testimonial1Ref, testimonial1InView] = useInView({ triggerOnce: false });
  const [testimonial2Ref, testimonial2InView] = useInView({ triggerOnce: false });
  const [testimonial3Ref, testimonial3InView] = useInView({ triggerOnce: false });
  const [testimonial4Ref, testimonial4InView] = useInView({ triggerOnce: false });

  return (
    <div>
      <section className="py-14 overflow-x-hidden overflow-y-hidden">
        <div className="container mx-auto px-4">
          <div className="float-right hidden sm:block" ref={trophyRef}>
            <img
              src="https://techzaa.in/techtesti/assets/images/trophy.png"
              alt=""
              className={`h-36 transition-all ease-in-out ${
                trophyInView ? 'translate-x-0' : 'translate-x-10'
              }`}
              style={{ transitionDuration: '500ms' }}
            />
          </div>
          <div className="text-center max-w-md mx-auto">
            <span className="text-purple-500 text-base font-medium uppercase block mb-3">Testimonials</span>
            <h1 className="text-4xl font-semibold mb-5">What People Say</h1>
            <p className="text-gray-500 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt.
            </p>
          </div>
          <div className=" my-10"></div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <div className="space-y-6">
                <div
                  className={`bg-yellow-500/40 rounded-xl p-7 transition-all ease-in-out ${
                    testimonial1InView ? 'translate-x-0' : 'translate-x-14'
                  }`}
                  ref={testimonial1Ref}
                  style={{ transitionDuration: '600ms' }}
                >
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-10">
                    <img
                      src="https://techzaa.in/techtesti/assets/images/hourglass.png"
                      alt=""
                      className="h-36 mx-auto sm:mr-auto"
                    />
                    <div className="sm:text-end">
                      <p className="text-xl text-gray-700 font-light">
                        In our company we believe that good design matters, it makes us better in many ways
                      </p>
                      <div className="flex items-center sm:justify-end gap-3 mt-5">
                        <img
                          src="https://techzaa.in/techtesti/assets/images/avatars/img-1.png"
                          alt=""
                          className="rounded-full h-8"
                        />
                        <span className="text-gray-600 font-light text-base">Andy Bush | CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`bg-sky-500/40 rounded-xl p-7 transition-all ease-in-out ${
                    testimonial2InView ? 'translate-x-0' : 'translate-x-10'
                  }`}
                  ref={testimonial2Ref}
                  style={{ transitionDuration: '800ms' }}
                >
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-10">
                    <img
                      src="https://techzaa.in/techtesti/assets/images/archery.png"
                      alt=""
                      className="h-36 mx-auto sm:mr-auto"
                    />
                    <div className="sm:text-end">
                      <p className="text-xl text-gray-700 font-light">
                        In our company we believe that good design matters, it makes us better in many ways
                      </p>
                      <div className="flex items-center sm:justify-end gap-3 mt-5">
                        <img
                          src="https://techzaa.in/techtesti/assets/images/avatars/img-2.png"
                          alt=""
                          className="rounded-full h-8"
                        />
                        <span className="text-gray-600 font-light text-base">Alex Hills | CEO Twitter</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6 lg:mt-20">
                <div
                  className={`bg-purple-500/40 rounded-xl p-7 transition-all ease-in-out ${
                    testimonial3InView ? 'translate-x-0' : 'translate-x-10'
                  }`}
                  ref={testimonial3Ref}
                  style={{ transitionDuration: '1000ms' }}
                >
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-10">
                    <img
                      src="https://techzaa.in/techtesti/assets/images/speaker.png"
                      alt=""
                      className="h-36 mx-auto sm:mr-auto"
                    />
                    <div className="sm:text-end">
                      <p className="text-xl text-gray-700 font-light">
                        In our company we believe that good design matters, it makes us better in many ways
                      </p>
                      <div className="flex items-center sm:justify-end gap-3 mt-5">
                        <img
                          src="https://techzaa.in/techtesti/assets/images/avatars/img-3.png"
                          alt=""
                          className="rounded-full h-8"
                        />
                        <span className="text-gray-600 font-light text-base">Andy Bush | CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`bg-yellow-500/40 rounded-xl p-7 transition-all ease-in-out ${
                    testimonial4InView ? 'translate-x-0' : 'translate-x-10'
                  }`}
                  ref={testimonial4Ref}
                  style={{ transitionDuration: '1200ms' }}
                >
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-10">
                    <img
                      src="https://techzaa.in/techtesti/assets/images/earth.png"
                      alt=""
                      className="h-36 mx-auto sm:mr-auto"
                    />
                    <div className="sm:text-end">
                      <p className="text-xl text-gray-700 font-light">
                        In our company we believe that good design matters, it makes us better in many ways
                      </p>
                      <div className="flex items-center sm:justify-end gap-3 mt-5">
                        <img
                          src="https://techzaa.in/techtesti/assets/images/avatars/img-4.png"
                          alt=""
                          className="rounded-full h-8"
                        />
                        <span className="text-gray-600 font-light text-base">Mark Rubio | CEO TikTok</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
          <a className="p-3 flex items-center hover:bg-brand-section-light rounded shuffle-click" href="/Section/client" >
            <button className="border border-purple-600 text-purple-600 rounded-full transition-all duration-300 hover:bg-purple-600 hover:text-white px-7 py-3">
              Show More
            </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Extray;
