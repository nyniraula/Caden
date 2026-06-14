import { useState, useRef, useEffect } from "react";

type Props = {
  btns: string[];
  setType: (type: string) => void;
};

type Slider = {
  left: number;
  width: number;
};

const SegmentedControls = ({ btns = [], setType }: Props) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [slider, setSlider] = useState<Slider>({ left: 0, width: 0 });

  useEffect(() => {
    const el = buttonRefs.current[activeIdx];

    if (!el) return;
    // calculates active elements width and left positon relative to parent
    const activeLeft = el.offsetLeft;
    const activeWidth = el.offsetWidth;

    // updates the slider values which in turn updates the slider.
    setSlider({ left: activeLeft, width: activeWidth });
  }, [activeIdx]);

  return (
    <div className="relative flex items-center justify-center gap-2 rounded-4xl bg-[#eaedff] p-1 dark:bg-zinc-900">
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
            style={{ color: `${activeIdx == idx ? "white" : "#9f9fa9"}` }}
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
