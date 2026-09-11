import svgPaths from "./svg-f31hc1r9pu";
import imgImage1 from "./980229a6f43b8f7176721cf390225004dd7ee51f.png";

function Group() {
  return (
    <div className="absolute contents left-[88px] top-[589px]">
      <div className="absolute h-[50px] left-[88px] overflow-clip top-[589px] w-[52px]" data-name="Logo / Clarus">
        <div className="absolute inset-[0.96%_14.71%_0_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="49.5204" preserveAspectRatio="none" viewBox="0 0 44.3532 49.5204" width="44.3532">
            <path d={svgPaths.p33be4100} fill="#8B8989" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_0.26%_22.08%_49.66%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="38.9583" preserveAspectRatio="none" viewBox="0 0 26.0424 38.9583" width="26.0424">
            <path d={svgPaths.p20503171} fill="#8B8989" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[normal] left-[96px] text-[#fff6f3] text-[14px] top-[644px] whitespace-nowrap">Clarus</p>
    </div>
  );
}

export default function VetPiMsScreen() {
  return (
    <div className="relative size-full" data-name="Vet PIMs Screen">
      <div className="absolute h-[1184px] left-0 top-0 w-[1583px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <Group />
    </div>
  );
}