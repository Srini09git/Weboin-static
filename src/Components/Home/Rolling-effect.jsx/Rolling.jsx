'use client';
import adobez from '../../../../public/ToolsLogo/adobe.png';
import adsz from '../../../../public/ToolsLogo/ads.png';
import djangoz from '../../../../public/ToolsLogo/django.png';
import figmaz from '../../../../public/ToolsLogo/figma.png';
import googleanaz from '../../../../public/ToolsLogo/googleana.png';
import hubspotz from '../../../../public/ToolsLogo/hubspot.png';
import jsz from '../../../../public/ToolsLogo/js.png';
import nextz from '../../../../public/ToolsLogo/nextjs.png';
import photoshopz from '../../../../public/ToolsLogo/photoshop.png';
import premiereproz from '../../../../public/ToolsLogo/premierepro.png';
import pythonz from '../../../../public/ToolsLogo/python.png';
import reactz from '../../../../public/ToolsLogo/reactlogo.png';
import socialz from '../../../../public/ToolsLogo/social.png';
import tailwindz from '../../../../public/ToolsLogo/tailwind.png';
import wordpressz from '../../../../public/ToolsLogo/wordpress.png';
 
const Rolling = () => {
  return (
    <div className="flex flex-col items-center justify-center max-h-full bg-gray-100">
      <div className="relative w-full h-[300px] sm:h-[800px] md:h-[800px] lg:h[800px] overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1300 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Define the path for animation */}
          <path id="arc1Path" d="M 100 850 A 200 200 0 0 1 1100 900" fill="none" stroke="transparent" />
          <path id="arc2Path" d="M -40 1000 A 200 200 0 0 1 1260 790" fill="none" stroke="transparent" />
          <path id="arc3Path" d="M -100 1480 A 50 50 0 0 1 1350 480" fill="none" stroke="transparent" />
 
          {/* Arc 1 */}
          <path
            d="M 150 950 A 200 200 0 0 1 1150 900"
            stroke="gray"
            opacity="20%"
            strokeWidth="2"
            fill="none"
          />
 
          {/* Arc 2 */}
          <path
            d="M 0 1050 A 200 200 0 0 1 1300 850"
            stroke="grey"
            opacity="20%"
            strokeWidth="2"
            fill="none"
          />
 
          {/* Arc 3 */}
          <path
            d="M -50 1500 A 50 50 0 0 1 1350 500"
            stroke="grey"
            opacity="20%"
            strokeWidth="2"
            fill="none"
          />
 
          {/* Image icons */}
          <defs>
            <symbol id="imageIcon1" viewBox="0 0 50 50">
              <image href={photoshopz.src} width="50" height="50" />
            </symbol>
            <symbol id="imageIcon2" viewBox="0 0 50 50">
              <image href={adobez.src} width="50" height="50" />
            </symbol>
            <symbol id="imageIcon3" viewBox="0 0 50 50">
              <image href={hubspotz.src} width="50" height="50" />
            </symbol>
            <symbol id="imageIcon4" viewBox="0 0 50 50">
              <image href={socialz.src} width="50" height="50" />
            </symbol>
            <symbol id="imageIcon5" viewBox="0 0 50 50">
              <image href={figmaz.src} width="50" height="50" />
            </symbol>
            <symbol id="imageIcon6" viewBox="0 0 94 94">
              <image href={wordpressz.src} width="94" height="94" />
            </symbol>
            <symbol id="imageIcon7" viewBox="0 0 94 94">
              <image href={premiereproz.src} width="94" height="94" />
            </symbol>
            <symbol id="imageIcon8" viewBox="0 0 94 94">
              <image href={adsz.src} width="94" height="94" />
            </symbol>
            <symbol id="imageIcon25" viewBox="0 0 94 94">
              <image href={googleanaz.src} width="94" height="94" />
            </symbol>
            <symbol id="imageIcon9" viewBox="0 0 94 94">
              <image href={reactz.src} width="94" height="94" />
            </symbol>
            <symbol id="imageIcon10" viewBox="0 0 94 94">
              <image href={djangoz.src} width="94" height="94" />
            </symbol>
            <symbol id="imageIcon11" viewBox="0 0 94 94">
              <image href={nextz.src} width="94" height="94" />
            </symbol>
            <symbol id="imageIcon12" viewBox="0 0 94 94">
              <image href={pythonz.src} width="94" height="94" />
            </symbol>
            <symbol id="imageIcon13" viewBox="0 0 94 94">
              <image href={tailwindz.src} width="94" height="94" />
            </symbol>
            <symbol id="imageIcon14" viewBox="0 0 94 94">
              <image href={jsz.src} width="94" height="94" />
            </symbol>
          </defs>
 
          {/* Animated image icons */}
          <use href="#imageIcon1" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="3s" fill="freeze" />
            <animateMotion dur="12s" begin="3s" repeatCount="indefinite">
              <mpath href="#arc1Path" />
            </animateMotion>
          </use>
 
          <use href="#imageIcon2" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="6s" fill="freeze" />
            <animateMotion dur="12s" begin="6s" repeatCount="indefinite">
              <mpath href="#arc1Path" />
            </animateMotion>
          </use>
 
          <use href="#imageIcon3" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="9s" fill="freeze" />
            <animateMotion dur="12s" begin="9s" repeatCount="indefinite">
              <mpath href="#arc1Path" />
            </animateMotion>
          </use>
 
          <use href="#imageIcon4" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="12s" fill="freeze" />
            <animateMotion dur="12s" begin="12s" repeatCount="indefinite">
              <mpath href="#arc1Path" />
            </animateMotion>
          </use>
 
          <use href="#imageIcon5" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="2.4s" fill="freeze" />
            <animateMotion dur="12s" begin="2.4s" repeatCount="indefinite">
              <mpath href="#arc2Path" />
            </animateMotion>
          </use>
 
          <use href="#imageIcon6" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="4.8s" fill="freeze" />
            <animateMotion dur="12s" begin="4.8s" repeatCount="indefinite">
              <mpath href="#arc2Path" />
            </animateMotion>
          </use>
 
          <use href="#imageIcon7" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="7.2s" fill="freeze" />
            <animateMotion dur="12s" begin="7.2s" repeatCount="indefinite">
              <mpath href="#arc2Path" />
            </animateMotion>
          </use>
 
          <use href="#imageIcon8" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="9.6s" fill="freeze" />
            <animateMotion dur="12s" begin="9.6s" repeatCount="indefinite">
              <mpath href="#arc2Path" />
            </animateMotion>
          </use>
 
          <use href="#imageIcon25" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="12s" fill="freeze" />
            <animateMotion dur="12s" begin="12s" repeatCount="indefinite">
              <mpath href="#arc2Path" />
            </animateMotion>
          </use>
 
          <use href="#imageIcon9" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="2s" fill="freeze" />
            <animateMotion dur="12s" begin="2s" repeatCount="indefinite">
              <mpath href="#arc3Path" />
            </animateMotion>
          </use>
 
          <use href="#imageIcon10" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="4s" fill="freeze" />
            <animateMotion dur="12s" begin="4s" repeatCount="indefinite">
              <mpath href="#arc3Path" />
            </animateMotion>
          </use>
 
          <use href="#imageIcon11" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="6s" fill="freeze" />
            <animateMotion dur="12s" begin="6s" repeatCount="indefinite">
              <mpath href="#arc3Path" />
            </animateMotion>
          </use>
 
          <use href="#imageIcon12" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="8s" fill="freeze" />
            <animateMotion dur="12s" begin="8s" repeatCount="indefinite">
              <mpath href="#arc3Path" />
            </animateMotion>
          </use>
 
          <use href="#imageIcon13" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="10s" fill="freeze" />
            <animateMotion dur="12s" begin="10s" repeatCount="indefinite">
              <mpath href="#arc3Path" />
            </animateMotion>
          </use>
 
          <use href="#imageIcon14" x="0" y="0" width="80" height="80" style={{ opacity: 0 }}>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="12s" fill="freeze" />
            <animateMotion dur="12s" begin="12s" repeatCount="indefinite">
              <mpath href="#arc3Path" />
            </animateMotion>
          </use>
        </svg>
        <h1 className='absolute bottom-64 text-center justify-center font-extrabold text-2xl left-1/2 transform -translate-x-1/2 text-blue-500 sm:text-2xl md:text-6xl lg:text-8xl sm:bottom-40 md:bottom-44 lg:bottom-32'>
          Weboin
        </h1>




        <p className='absolute font-[cursive] bottom-6 text-center justify-center text-xs left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-400 via-blue-400 to-blue-600 text-transparent bg-clip-text sm:text-sm md:text-xl lg:text-2xl sm:bottom-20 md:bottom-24 lg:bottom-10 hidden sm:block'>
          We design, build, and ship world-class digital products for forward-thinking brands.
        </p>
      </div>
    </div>
  );
};
 
export default Rolling;