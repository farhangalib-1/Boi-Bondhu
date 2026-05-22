import herobg from "@/assets/hero-bg.png";
import herobg2 from "@/assets/hero-bg-2.png";
import Image from 'next/image';
import {HandPointRight} from '@gravity-ui/icons';
import 'animate.css';
const Homepage = () => {
  return (
    <div >
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(" + herobg2.src + ")",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl md:text-7xl font-bold animate__animated animate__zoomIn ">Find your <br /> next read</h1>
      <button className="btn btn-primary bg-transparent border border-white rounded-full hover:bg-white hover:text-black animate__animated animate__zoomIn">
        <HandPointRight /> Browse Now
      </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Homepage
