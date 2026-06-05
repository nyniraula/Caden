import { useState, useRef, useEffect } from 'react';

const SegmentedControls = () => {
  const btns = ['Expense', 'Income'];
  const [activeIdx, setActiveIdx] = useState(0);
  const buttonRefs = useRef([]);
  const [slider, setSlider] = useState({});

  useEffect(() => {
    // calculates active elements width and left positon relative to parent
    const activeLeft = buttonRefs.current[activeIdx].offsetLeft;
    const activeWidth = buttonRefs.current[activeIdx].offsetWidth;
    console.log(activeIdx, activeLeft, activeWidth);

    // updates the slider values which in turn updates the slider.
    setSlider((prev) => ({ ...prev, left: activeLeft, width: activeWidth }));
  }, [activeIdx]);

  return (
    //prettier-ignore
    <div className="flex justify-center items-center p-1 bg-[#eaedff] rounded-4xl gap-2 relative ">

      <div className='absolute top-1 bottom-1  rounded-4xl  bg-[#3525cd] transition-all duration-300 ease-in-out z-0' 
    style={{width: slider.width, left: slider.left}}>

    </div>

   


      {btns.map((el, idx) => {
        return (
          <button className="rounded-4xl bg-transparent px-6 md:px-8 py-2 text-sm transition-colors  md:font-semibold duration-300 z-2" key={idx}
          
          style={{color: `${activeIdx==idx?'white':'black'}`}}
          
          onClick={()=>{
            setActiveIdx(idx)
          }}
          ref={(el)=>{
            buttonRefs.current[idx] = el
          }}
          >
            {el}
          </button>
        );
      })}

       {/* The actual slider */}
    
    </div>
  );
};

export default SegmentedControls;
