import { useState } from "react";
import svgPaths from "./imports/PolicyFound/svg-fpef8kuyiy";
import imgBg from "./imports/PolicyFound/b1910e2f1d722830fba3abdae39207eb2a78d09b.png";
import { imgSouth, imgCheck } from "./imports/PolicyFound/svg-c0wu7";

type Props = {
  onBackToSearch: () => void;
  onCreateClaim: () => void;
};

// ─── Top Nav (fixed/sticky at the top of the scroll container) ───────────────

function LogoClarus() {
  return (
    <div className="h-[42px] overflow-clip w-[140px]" style={{ position: "relative" }}>
      <div className="absolute inset-[0.96%_72.86%_0_0]">
        <svg className="absolute block inset-0 size-full" fill="none" height="79.2327" preserveAspectRatio="none" viewBox="0 0 71.6474 79.2327" width="71.6474">
          <path d={svgPaths.p3cee3e00} fill="url(#pf2_grad1)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="pf2_grad1" x1="4.00305" x2="46.763" y1="30.8916" y2="74.7432">
              <stop offset="0.223634" stopColor="#F57418" /><stop offset="0.893493" stopColor="#FBA43B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[0_68.26%_22.08%_15.8%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="62.3333" preserveAspectRatio="none" viewBox="0 0 42.0685 62.3333" width="42.0685">
          <path d={svgPaths.p5960b00} fill="url(#pf2_grad2)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="pf2_grad2" x1="62.9128" x2="67.9258" y1="36.3899" y2="23.1187">
              <stop offset="0.0892416" stopColor="#FBA43B" /><stop offset="1" stopColor="#F57418" />
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

function TopNav() {
  return (
    <div
      style={{ position: "sticky", top: 0, zIndex: 50, width: 1440, height: 80, flexShrink: 0 }}
      className="bg-white drop-shadow-[0px_1.517px_6.069px_rgba(28,25,25,0.05)]"
    >
      {/* Gradient line */}
      <div className="absolute h-[12px] left-0 top-0 w-[1440px]"
        style={{ backgroundImage: "linear-gradient(90deg, rgb(252,77,34) 0%, rgb(252,82,35) 16%, rgb(253,121,44) 51%, rgb(254,154,53) 75%, rgb(255,190,62) 100%)" }}
      />
      {/* Logo */}
      <div className="absolute left-[40px] top-[25px]"><LogoClarus /></div>
      {/* Help */}
      <div className="absolute left-[1295px] top-[30px] flex gap-[4px] h-[32px] items-center">
        <div className="relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20">
            <mask id="pf2_help_mask" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" height="20" x="0" y="0">
              <rect fill="#D9D9D9" width="20" height="20" />
            </mask>
            <g mask="url(#pf2_help_mask)">
              <path d={svgPaths.p28dd2c00} fill="#1C1919" />
            </g>
          </svg>
        </div>
        <p className="font-['Mont:SemiBold',sans-serif] text-[#1c1919] text-[14px] leading-[20px] whitespace-nowrap">Need Help?</p>
      </div>
      {/* Bottom border */}
      <div className="absolute bg-[#dde3e8] h-px left-0 top-[79px] w-[1440px]" />
    </div>
  );
}

// ─── Scrollable content (everything below the header) ────────────────────────

function Stepper() {
  return (
    <div style={{ position: "relative", width: 815, marginLeft: 313, marginTop: 60, flexShrink: 0 }}>
      <div className="flex items-center justify-between w-full">
        {/* Step 1 — active */}
        <div className="flex flex-col gap-[12px] items-center shrink-0 w-[126px]">
          <div className="relative rounded-[20px] size-[40px]">
            <div aria-hidden className="absolute border-2 border-[#0d6efd] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <div className="flex flex-col items-center justify-center size-full">
              <div className="bg-[#0d6efd] rounded-[10px] size-[16px]" />
            </div>
          </div>
          <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[#0d6efd] text-[16px] leading-[24px] text-center w-[120px]">Claim creation</p>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col gap-[12px] items-center shrink-0 w-[178px]">
          <div className="relative rounded-[20px] size-[40px]">
            <div aria-hidden className="absolute border-2 border-[#a8b2bc] border-solid inset-0 pointer-events-none rounded-[20px]" />
          </div>
          <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] text-[#6e7a87] text-[16px] leading-[24px] text-center w-[282px]">{`Treatment & Condition assignment`}</p>
        </div>
        {/* Step 3 */}
        <div className="relative flex flex-col gap-[12px] items-center shrink-0 w-[149px]">
          <div className="relative rounded-[20px] size-[40px]">
            <div aria-hidden className="absolute border-2 border-[#a8b2bc] border-solid inset-0 pointer-events-none rounded-[20px]" />
          </div>
          <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] text-[#6e7a87] text-[16px] leading-[24px] text-center w-[147px]">Review and submit</p>
          <div className="absolute bg-[#a8b2bc] h-[2px] left-[-250px] top-[20px] w-[305px]" />
          <div className="absolute bg-[#0d6efd] h-[2px] left-[-584px] top-[20px] w-[148px]" />
          <div className="absolute bg-[#a8b2bc] h-[2px] left-[-436px] top-[20px] w-[147px]" />
        </div>
      </div>
    </div>
  );
}

function SuccessBanner() {
  return (
    <div
      className="bg-[#f0f9ee] flex gap-[16px] items-center pl-[24px] rounded-[10px]"
      style={{ position: "relative", marginLeft: 313, marginTop: 48, width: 815, flexShrink: 0 }}
    >
      <div aria-hidden className="absolute border border-[#daf2d8] border-solid inset-0 pointer-events-none rounded-[10px]" />
      {/* Check icon */}
      <div className="bg-[#3bb561] flex items-center justify-center rounded-[32px] shrink-0 size-[48px]">
        <div className="relative shrink-0 size-[24px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute inset-[26.56%_17.81%_26.67%_17.76%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.262px_-6.375px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCheck}")` }}>
              <svg className="absolute block inset-0 size-full" fill="none" height="11.225" preserveAspectRatio="none" viewBox="0 0 15.463 11.225" width="15.463">
                <path d={svgPaths.p34dbb470} fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] items-start px-[16px] py-[24px] shrink-0">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] text-[#252e38] text-[20px] leading-[20px]">A matching policy was found</p>
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] text-[#3e4b57] text-[16px] leading-[20px]">We found an active policy for this pet. Review the coverage below, then start the claim.</p>
      </div>
    </div>
  );
}

function DetailsList() {
  const rowClass = "flex flex-col h-[70px] items-start justify-between py-[8px]";
  const labelClass = "font-['Be_Vietnam_Pro:Regular',sans-serif] text-[#556270] text-[16px] leading-[24px] tracking-[1px] whitespace-nowrap";
  const valueClass = "font-['Be_Vietnam_Pro:SemiBold',sans-serif] text-[#1c1919] text-[16px] leading-[24px] whitespace-nowrap";

  return (
    <div
      className="bg-white border border-[#dde3e8] border-solid rounded-[10px]"
      style={{ position: "relative", marginLeft: 312, marginTop: 24, width: 816, height: 388, flexShrink: 0 }}
    >
      {/* Col 1 */}
      <div className={`absolute ${rowClass}`} style={{ left: 79, right: 469, top: 23 }}>
        <p className={labelClass}>INSURER</p>
        <p className={valueClass}>One Step Insurance</p>
      </div>
      <div className={`absolute ${rowClass}`} style={{ left: 79, right: 469, top: 113 }}>
        <p className={labelClass}>POLICY HOLDER</p>
        <p className={valueClass}>Alex Morgan</p>
      </div>
      <div className={`absolute ${rowClass}`} style={{ left: 79, right: 469, top: 203 }}>
        <p className={labelClass}>EXCESS</p>
        <p className={valueClass}>£250 per condition</p>
      </div>
      <div className={`absolute ${rowClass}`} style={{ left: 79, right: 469, top: 293 }}>
        <p className={labelClass}>REMAIN POLICY ACCOUNT</p>
        <p className={valueClass}>£4,100</p>
      </div>
      {/* Col 2 */}
      <div className={`absolute ${rowClass}`} style={{ left: 501, right: 47, top: 23 }}>
        <p className={`${labelClass} uppercase`}>Policy status</p>
        <div className="bg-[#f0f9ee] rounded-[16px] px-[8px] py-[6px]">
          <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] text-[#1c7a35] text-[12px] leading-[18px]">Active</p>
        </div>
      </div>
      <div className={`absolute ${rowClass}`} style={{ left: 501, right: 47, top: 113 }}>
        <p className={labelClass}>PRODUCT TYPE</p>
        <p className={valueClass}>Lifetime</p>
      </div>
      <div className={`absolute ${rowClass}`} style={{ left: 501, right: 47, top: 203 }}>
        <p className={labelClass}>POLICY LIMIT</p>
        <p className={valueClass}>£5,000</p>
      </div>
    </div>
  );
}

function ActionRow({ onBackToSearch, onCreateClaim, hovered, setHovered }: {
  onBackToSearch: () => void;
  onCreateClaim: () => void;
  hovered: boolean;
  setHovered: (v: boolean) => void;
}) {
  return (
    <div style={{ position: "relative", marginLeft: 312, marginTop: 24, width: 816, flexShrink: 0, display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 40 }}>
      {/* Back to Search */}
      <button
        type="button"
        onClick={onBackToSearch}
        className="flex gap-[4px] h-[44px] items-center justify-center pl-[20px] pr-[24px] py-[16px] rounded-[6px] cursor-pointer"
        style={{ background: "transparent" }}
      >
        <div className="flex items-center justify-center size-[20px]">
          <div className="rotate-90 size-[20px] relative">
            <div className="absolute inset-[8.33%_22.6%_10.1%_22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgSouth}")` }}>
              <svg className="absolute block inset-0 size-full" fill="none" height="16.3125" preserveAspectRatio="none" viewBox="0 0 10.9583 16.3125" width="10.9583">
                <path d={svgPaths.pf7a3500} fill="#FC4D22" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[#fc4d22] text-[14px] leading-[24px] whitespace-nowrap">Back to Search</p>
      </button>
      {/* Create Claim */}
      <button
        type="button"
        onClick={onCreateClaim}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-[44px] w-[182px] rounded-[6px] cursor-pointer flex items-center justify-center"
        style={{ background: hovered ? "#d93e1a" : "#fc4d22" }}
      >
        <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-white text-[14px] leading-[24px] whitespace-nowrap">Create Claim</p>
      </button>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white drop-shadow-[4px_10px_4px_rgba(0,0,0,0.25)]" style={{ width: 1440, flexShrink: 0, position: "relative", height: 80 }}>
      {/* Gradient union */}
      <div className="absolute" style={{ left: 40, top: 20, width: 45, height: 42 }}>
        <svg className="absolute block inset-0 size-full" fill="none" height="42.4199" preserveAspectRatio="none" viewBox="0 0 45 42.4199" width="45">
          <path d={svgPaths.p362e3500} fill="url(#pf2_footer_grad)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="pf2_footer_grad" x1="22.4052" x2="45" y1="16.5206" y2="16.5206">
              <stop stopColor="#FC4D22" /><stop offset="0.16" stopColor="#FC5223" /><stop offset="0.36" stopColor="#FC6026" />
              <stop offset="0.58" stopColor="#FD792C" /><stop offset="0.8" stopColor="#FE9A35" /><stop offset="1" stopColor="#FFBE3E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="absolute font-['Mont:Regular',sans-serif] text-[#1c1919] text-[12px] leading-[20px] whitespace-nowrap" style={{ left: 108, top: 33 }}>© 2026 Clarus. All rights reserved.</p>
      <div className="absolute flex gap-[46px] items-center" style={{ left: 876, top: 31 }}>
        {["Privacy Policy", "Terms of Use", "Contact Support"].map((label) => (
          <p key={label} className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[#1c1919] text-[14px] leading-[24px] whitespace-nowrap">{label}</p>
        ))}
      </div>
      {/* Top border */}
      <div className="absolute h-0 left-0 top-0 w-[1440px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block" fill="none" height="1" width="1440" viewBox="0 0 1440 1">
            <line stroke="#DDE3E8" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function PolicyFound({ onBackToSearch, onCreateClaim }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    // flex column fills the scrollable Frame container
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100%", width: 1440, background: "#f8fafb", position: "relative" }}>
      {/* Background watermark — spans behind all content */}
      <div style={{ position: "absolute", top: 80, left: -2, width: 1442, height: 890, pointerEvents: "none", overflow: "hidden", opacity: 0.2, zIndex: 0 }}>
        <img alt="" src={imgBg} style={{ position: "absolute", top: 0, left: "-25.21%", width: "129.03%", height: "104.41%", maxWidth: "none" }} />
      </div>

      {/* Sticky header */}
      <TopNav />

      {/* Scrollable body */}
      <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
        <Stepper />
        <SuccessBanner />
        <DetailsList />
        <ActionRow
          onBackToSearch={onBackToSearch}
          onCreateClaim={onCreateClaim}
          hovered={hovered}
          setHovered={setHovered}
        />
      </div>

      {/* Footer at bottom of content */}
      <Footer />
    </div>
  );
}
