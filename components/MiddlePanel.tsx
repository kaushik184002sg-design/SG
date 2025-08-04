import Spline from '@splinetool/react-spline';

export default function MiddlePanel({ isLoaded }: { isLoaded: boolean }) {
  return (
    <section
      className={`relative z-20 w-full lg:flex-1 flex flex-col justify-center items-center text-center p-8 bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden transition-all duration-[2000ms] ease-in-out ${isLoaded ? 'scale-100' : 'scale-[2.5] !rounded-none'}`}
    >
      <div className="absolute inset-0 w-full h-full shadow-2xl border-2 border-white/30 rounded-2xl overflow-hidden flex items-end">
        <Spline 
          scene="https://prod.spline.design/LxGJQUvEd76F1hBY/scene.splinecode" 
          style={{ width: '100%', height: '150%', transform: 'translateY(15%)' }} 
        />
      </div>
    </section>
  );
}
