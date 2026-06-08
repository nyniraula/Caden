import { useState, useRef, useEffect } from 'react';

const SegmentedControls = ({ btns = [], setType }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const buttonRefs = useRef([]);
  const [slider, setSlider] = useState({});

  useEffect(() => {
    // calculates active elements width and left positon relative to parent
    const activeLeft = buttonRefs.current[activeIdx].offsetLeft;
    const activeWidth = buttonRefs.current[activeIdx].offsetWidth;

    // updates the slider values which in turn updates the slider.
    setSlider((prev) => ({ ...prev, left: activeLeft, width: activeWidth }));
  }, [activeIdx]);

  return (
    <div className="relative flex items-center justify-center gap-2 rounded-4xl bg-[#eaedff] p-1">
      <div
        className="absolute top-1 bottom-1 z-0 rounded-4xl bg-[#3525cd] transition-all duration-300 ease-in-out"
        style={{ width: slider.width, left: slider.left }}
      ></div>

      {btns.map((el, idx) => {
        return (
          <button
            type="button"
            className="z-2 rounded-4xl bg-transparent px-6 py-1 text-sm uppercase transition-colors duration-300 md:px-8 md:py-2 md:font-semibold"
            key={idx}
            style={{ color: `${activeIdx == idx ? 'white' : 'black'}` }}
            onClick={() => {
              setActiveIdx(idx);
              setType(btns[idx]);
            }}
            ref={(el) => {
              buttonRefs.current[idx] = el;
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
