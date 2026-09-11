import { useEffect } from "react";
import svgPaths from "./imports/SubmittingProcess/svg-cscv2f9k55";
import imgBg from "./imports/SubmittingProcess/b1910e2f1d722830fba3abdae39207eb2a78d09b.png";
import { imgCheckCircle, imgProgressActivity } from "./imports/SubmittingProcess/svg-wxlk2";
import PawTrail from "./PawTrail";

type Props = { onDone: () => void };

// ── Logo ────────────────────────────────────────────────────────────────────
function LogoClarus({ className }: { className?: string }) {
  return (
    <div className={className || "h-[80px] overflow-clip relative w-[264px]"}>
      <div className="absolute inset-[0.96%_72.86%_0_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="79.2327" preserveAspectRatio="none" viewBox="0 0 71.6474 79.2327" width="71.6474">
          <path d={svgPaths.p3cee3e00} fill="url(#paint0_linear_logo1)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_logo1" x1="4.00305" x2="46.763" y1="30.8916" y2="74.7432">
              <stop offset="0.223634" stopColor="#F57418" />
              <stop offset="0.893493" stopColor="#FBA43B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[0_68.26%_22.08%_15.8%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="62.3333" preserveAspectRatio="none" viewBox="0 0 42.0685 62.3333" width="42.0685">
          <path d={svgPaths.p5960b00} fill="url(#paint0_linear_logo2)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_logo2" x1="62.9128" x2="67.9258" y1="36.3899" y2="23.1187">
              <stop offset="0.0892416" stopColor="#FBA43B" />
              <stop offset="1" stopColor="#F57418" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[28.81%_48.83%_28.34%_38.74%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="34.28" preserveAspectRatio="none" viewBox="0 0 32.812 34.28" width="32.812">
          <path d={svgPaths.p3ac40380} fill="#F57418" />
        </svg>
      </div>
      <div className="absolute inset-[27.56%_44.45%_29%_54.33%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="34.7548" preserveAspectRatio="none" viewBox="0 0 3.229 34.7548" width="3.229">
          <path d="M0 0H3.229V34.7548H0V0Z" fill="#F57418" />
        </svg>
      </div>
      <div className="absolute inset-[38.31%_30.96%_28.35%_58.86%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="26.6687" preserveAspectRatio="none" viewBox="0 0 26.873 26.6687" width="26.873">
          <path d={svgPaths.p1f35fa80} fill="#F57418" />
        </svg>
      </div>
      <div className="absolute inset-[38.83%_21.69%_29%_73.16%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="25.7337" preserveAspectRatio="none" viewBox="0 0 13.579 25.7337" width="13.579">
          <path d={svgPaths.p3a02d900} fill="#F57418" />
        </svg>
      </div>
      <div className="absolute inset-[38.94%_10.74%_28.35%_80.79%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="26.1647" preserveAspectRatio="none" viewBox="0 0 22.359 26.1647" width="22.359">
          <path d={svgPaths.p3d5f9480} fill="#F57418" />
        </svg>
      </div>
      <div className="absolute inset-[38.3%_0.02%_28.34%_92.37%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="26.6833" preserveAspectRatio="none" viewBox="0 0 20.095 26.6833" width="20.095">
          <path d={svgPaths.p31b58f00} fill="#F57418" />
        </svg>
      </div>
    </div>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <div className="absolute bg-white drop-shadow-[4px_10px_4px_rgba(0,0,0,0.25)] inset-[90.93%_0_0_0]">
      <div className="absolute inset-[25.58%_94.1%_25.09%_2.78%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="42.4199" preserveAspectRatio="none" viewBox="0 0 45 42.4199" width="45">
          <path d={svgPaths.p362e3500} fill="url(#paint0_linear_footer)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_footer" x1="22.4052" x2="45" y1="16.5206" y2="16.5206">
              <stop stopColor="#FC4D22" />
              <stop offset="0.16" stopColor="#FC5223" />
              <stop offset="0.36" stopColor="#FC6026" />
              <stop offset="0.58" stopColor="#FD792C" />
              <stop offset="0.8" stopColor="#FE9A35" />
              <stop offset="1" stopColor="#FFBE3E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[20px] left-[108px] top-[33px] w-[199px]">
        <p className="[word-break:break-word] absolute font-['Mont:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c1919] text-[12px] top-0 whitespace-nowrap">© 2026 Clarus. All rights reserved.</p>
      </div>
      <div className="absolute content-stretch flex gap-[46px] items-center left-[876px] top-[31px]">
        <div className="content-stretch flex items-center relative shrink-0 w-[150px]">
          <div aria-hidden className="absolute border-black border-r border-solid inset-0 pointer-events-none" />
          <p className="[word-break:break-word] flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#1c1919] text-[14px] text-ellipsis whitespace-nowrap">Privacy Policy</p>
        </div>
        <div className="content-stretch flex items-center relative shrink-0 w-[137px]">
          <div aria-hidden className="absolute border-black border-r border-solid inset-0 pointer-events-none" />
          <p className="[word-break:break-word] flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#1c1919] text-[14px] text-ellipsis whitespace-nowrap">Terms of Use</p>
        </div>
        <div className="content-stretch flex items-center relative shrink-0 w-[165px]">
          <p className="[word-break:break-word] flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#1c1919] text-[14px] text-ellipsis whitespace-nowrap">Contact Support</p>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-0 w-[1440px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1440 1" width="1440">
            <line stroke="#DDE3E8" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ── Top Nav ──────────────────────────────────────────────────────────────────
function TopNav() {
  return (
    <div className="absolute bg-white drop-shadow-[0px_1.517px_6.069px_rgba(28,25,25,0.05)] h-[80px] left-0 top-0 w-[1440px]">
      <div className="absolute h-[12px] left-0 top-0 w-[1440px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(252, 77, 34) 0%, rgb(252, 82, 35) 15.999%, rgb(253, 121, 44) 50.959%, rgb(254, 154, 53) 74.996%, rgb(255, 190, 62) 99.995%)" }} />
      <div className="absolute content-stretch flex gap-[4px] h-[32px] items-center justify-center left-[1295px] top-[30px]">
        <div className="relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <g>
              <mask height="20" id="mask0_nav" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                <rect fill="#D9D9D9" height="20" width="20" />
              </mask>
              <g mask="url(#mask0_nav)">
                <path d={svgPaths.p28dd2c00} fill="#1C1919" />
              </g>
            </g>
          </svg>
        </div>
        <p className="[word-break:break-word] flex flex-col font-['Mont:SemiBold',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#1c1919] text-[14px] text-center whitespace-nowrap">Need Help?</p>
      </div>
      <div className="absolute bg-[#dde3e8] h-px left-0 top-[79px] w-[1440px]" />
      <LogoClarus className="absolute h-[42px] left-[40px] overflow-clip top-[25px] w-[140px]" />
    </div>
  );
}

export default function SubmittingProcess({ onDone }: Props) {
  useEffect(() => {
    const t = setTimeout(onDone, 4500);
    return () => clearTimeout(t);
  }, [onDone]);

  // Paw region: matches the removed screenshot PNG position
  // left ≈ 37.08% × 1440 = 534, right ≈ 33.96% × 1440 = 489 → width ≈ 417, top = 137, height = 267
  const PAW_LEFT = Math.round(1440 * 0.3708);
  const PAW_TOP = 137;
  const PAW_W = Math.round(1440 * (1 - 0.3708 - 0.3396));
  const PAW_H = Math.round(PAW_W * (267 / 417));

  return (
    <div className="bg-[#f8fafb] relative size-full" data-name="Submitting process">
      {/* Abstract wallpaper background */}
      <div className="absolute h-[782px] left-0 top-[80px] w-[1440px]">
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-4.32%] max-w-none top-0 w-[108.63%]" src={imgBg} />
        </div>
      </div>

      <Footer />

      {/* Heading + paragraph */}
      <div className="absolute content-stretch flex flex-col inset-[46.84%_28.33%_47.68%_28.33%] items-center">
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#1c1919] text-[20px] whitespace-nowrap">Submitting your claim</p>
          </div>
        </div>
        <div className="h-[24px] relative shrink-0 w-[624px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#556270] text-[14px] whitespace-nowrap">Clarus is validating everything and transmitting the claim to the insurer.</p>
          </div>
        </div>
      </div>

      {/* Status list */}
      <div className="absolute content-stretch flex flex-col gap-[24px] inset-[58.65%_40.56%_27.43%_40.56%] items-start">
        {/* Reviewing claim details — checked */}
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[24px]">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCheckCircle}")` }}>
              <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
                <path d={svgPaths.p35a15880} fill="#28A047" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[28px] not-italic relative shrink-0 text-[#1c1919] text-[16px] text-center whitespace-nowrap">Reviewing claim details</p>
        </div>
        {/* Checking for inconsistencies — checked */}
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[24px]">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCheckCircle}")` }}>
              <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
                <path d={svgPaths.p35a15880} fill="#28A047" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[28px] not-italic relative shrink-0 text-[#1c1919] text-[16px] text-center whitespace-nowrap">Checking for inconsistencies</p>
        </div>
        {/* Tying up loose ends — in progress (animated spinner) */}
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <div className="animate-spin-linear relative shrink-0 size-[24px]">
            <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgProgressActivity}")` }}>
              <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
                <path d={svgPaths.p22cc6d00} fill="#0D6EFD" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[28px] not-italic relative shrink-0 text-[#1c1919] text-[16px] text-center whitespace-nowrap">Tying up lose ends...</p>
        </div>
      </div>

      {/* Animated paw trail — renders directly on page background, no wrapper */}
      <div
        style={{
          position: "absolute",
          left: PAW_LEFT,
          top: PAW_TOP,
          width: PAW_W,
          height: PAW_H,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 5,
        }}
      >
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
          <PawTrail />
        </div>
      </div>

      <TopNav />
    </div>
  );
}
