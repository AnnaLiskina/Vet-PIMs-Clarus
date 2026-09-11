import { useState } from "react";
import svgPaths from "./imports/ReviewAndSubmit/svg-xrreefuugj";
import { imgSouth, imgChevronDownSmall } from "./imports/ReviewAndSubmit/svg-1fres";
import imgBg from "./imports/ReviewAndSubmit/b1910e2f1d722830fba3abdae39207eb2a78d09b.png";

// ─── Logo ─────────────────────────────────────────────────────────────────────

function LogoClarus({ className }: { className?: string }) {
  return (
    <div className={className ?? "h-[80px] overflow-clip relative w-[264px]"}>
      <div className="absolute inset-[0.96%_72.86%_0_0]">
        <svg className="absolute block inset-0 size-full" fill="none" height="79.2327" preserveAspectRatio="none" viewBox="0 0 71.6474 79.2327" width="71.6474">
          <path d={svgPaths.p3cee3e00} fill="url(#rs_l1)" />
          <defs><linearGradient gradientUnits="userSpaceOnUse" id="rs_l1" x1="4.00305" x2="46.763" y1="30.8916" y2="74.7432">
            <stop offset="0.223634" stopColor="#F57418" /><stop offset="0.893493" stopColor="#FBA43B" />
          </linearGradient></defs>
        </svg>
      </div>
      <div className="absolute inset-[0_68.26%_22.08%_15.8%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="62.3333" preserveAspectRatio="none" viewBox="0 0 42.0685 62.3333" width="42.0685">
          <path d={svgPaths.p5960b00} fill="url(#rs_l2)" />
          <defs><linearGradient gradientUnits="userSpaceOnUse" id="rs_l2" x1="62.9128" x2="67.9258" y1="36.3899" y2="23.1187">
            <stop offset="0.0892416" stopColor="#FBA43B" /><stop offset="1" stopColor="#F57418" />
          </linearGradient></defs>
        </svg>
      </div>
      <div className="absolute inset-[28.81%_48.83%_28.34%_38.74%]"><svg className="absolute block inset-0 size-full" fill="none" height="34.28" preserveAspectRatio="none" viewBox="0 0 32.812 34.28" width="32.812"><path d={svgPaths.p3ac40380} fill="#F57418" /></svg></div>
      <div className="absolute inset-[27.56%_44.45%_29%_54.33%]"><svg className="absolute block inset-0 size-full" fill="none" height="34.7548" preserveAspectRatio="none" viewBox="0 0 3.229 34.7548" width="3.229"><path d="M0 0H3.229V34.7548H0V0Z" fill="#F57418" /></svg></div>
      <div className="absolute inset-[38.31%_30.96%_28.35%_58.86%]"><svg className="absolute block inset-0 size-full" fill="none" height="26.6687" preserveAspectRatio="none" viewBox="0 0 26.873 26.6687" width="26.873"><path d={svgPaths.p1f35fa80} fill="#F57418" /></svg></div>
      <div className="absolute inset-[38.83%_21.69%_29%_73.16%]"><svg className="absolute block inset-0 size-full" fill="none" height="25.7337" preserveAspectRatio="none" viewBox="0 0 13.579 25.7337" width="13.579"><path d={svgPaths.p3a02d900} fill="#F57418" /></svg></div>
      <div className="absolute inset-[38.94%_10.74%_28.35%_80.79%]"><svg className="absolute block inset-0 size-full" fill="none" height="26.1647" preserveAspectRatio="none" viewBox="0 0 22.359 26.1647" width="22.359"><path d={svgPaths.p3d5f9480} fill="#F57418" /></svg></div>
      <div className="absolute inset-[38.3%_0.02%_28.34%_92.37%]"><svg className="absolute block inset-0 size-full" fill="none" height="26.6833" preserveAspectRatio="none" viewBox="0 0 20.095 26.6833" width="20.095"><path d={svgPaths.p31b58f00} fill="#F57418" /></svg></div>
    </div>
  );
}

// ─── Top Nav ──────────────────────────────────────────────────────────────────

function TopNav() {
  return (
    <div className="absolute bg-white drop-shadow-[0px_1.517px_6.069px_rgba(28,25,25,0.05)] h-[80px] left-0 top-0 w-[1440px]">
      <div className="absolute h-[12px] left-0 top-0 w-[1440px]">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(252, 77, 34) 0%, rgb(252, 82, 35) 15.999%, rgb(253, 121, 44) 50.959%, rgb(254, 154, 53) 74.996%, rgb(255, 190, 62) 99.995%)" }} />
      </div>
      <div className="absolute content-stretch flex gap-[4px] h-[32px] items-center justify-center left-[1295px] top-[30px]">
        <div className="relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <mask height="20" id="rs_hm" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0"><rect fill="#D9D9D9" height="20" width="20" /></mask>
            <g mask="url(#rs_hm)"><path d={svgPaths.p28dd2c00} fill="#1C1919" /></g>
          </svg>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Mont:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1919] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Need Help?</p>
        </div>
      </div>
      <div className="absolute bg-[#dde3e8] h-px left-0 top-[79px] w-[1440px]" />
      <LogoClarus className="absolute h-[42px] left-[40px] overflow-clip top-[25px] w-[140px]" />
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <div
      className="absolute bg-white drop-shadow-[4px_10px_4px_rgba(0,0,0,0.25)] left-0 bottom-0 w-full"
      style={{
        height: 80,
      }}
    >
      <div className="absolute inset-[25.58%_94.1%_25.09%_2.78%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="42.4199" preserveAspectRatio="none" viewBox="0 0 45 42.4199" width="45">
          <path d={svgPaths.p362e3500} fill="url(#rs_fg)" />
          <defs><linearGradient gradientUnits="userSpaceOnUse" id="rs_fg" x1="22.4052" x2="45" y1="16.5206" y2="16.5206">
            <stop stopColor="#FC4D22" /><stop offset="0.16" stopColor="#FC5223" /><stop offset="0.36" stopColor="#FC6026" />
            <stop offset="0.58" stopColor="#FD792C" /><stop offset="0.8" stopColor="#FE9A35" /><stop offset="1" stopColor="#FFBE3E" />
          </linearGradient></defs>
        </svg>
      </div>
      <div className="absolute h-[20px] left-[108px] top-[33px] w-[199px]">
        <p className="[word-break:break-word] absolute font-['Mont:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c1919] text-[12px] top-0 whitespace-nowrap">© 2026 Clarus. All rights reserved.</p>
      </div>
      <div className="absolute content-stretch flex gap-[46px] items-center left-[876px] top-[31px]">
        {["Privacy Policy", "Terms of Use", "Contact Support"].map((t, i) => (
          <div key={t} className={`content-stretch flex items-center relative shrink-0 ${i === 0 ? "w-[150px]" : i === 1 ? "w-[137px]" : "w-[165px]"}`}>
            {i < 2 && <div aria-hidden className="absolute border-black border-r border-solid inset-0 pointer-events-none" />}
            <div className="[word-break:break-word] flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1c1919] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[24px] overflow-hidden text-ellipsis">{t}</p>
            </div>
          </div>
        ))}
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

// ─── Progress Steps ───────────────────────────────────────────────────────────

function CheckMark({ id }: { id: string }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute inset-[26.56%_17.81%_26.67%_17.76%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.262px_-6.375px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgChevronDownSmall}")` }}>
        <svg className="absolute block inset-0 size-full" fill="none" height="11.225" preserveAspectRatio="none" viewBox="0 0 15.463 11.225" width="15.463">
          <path d={svgPaths.p34dbb470} fill="white" id={id} />
        </svg>
      </div>
    </div>
  );
}

function ProgressSteps() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[313px] top-[140px] w-[815px]">
      <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[126px]">
        <div className="bg-[#0d6efd] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[20px] shrink-0 size-[40px]">
          <CheckMark id="rs_c1" />
          <div className="absolute bg-[#0d6efd] h-[2px] left-[40px] top-[20px] w-[99px]" />
          <div className="absolute bg-[#0d6efd] h-[2px] left-[139px] top-[20px] w-[99px]" />
          <div className="absolute bg-[#a8b2bc] h-[2px] left-[378px] top-[20px] w-[100px]" />
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d6efd] text-[16px] text-center w-[120px]">
          <p className="leading-[24px]">Claim creation</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[276px]">
        <div className="bg-[#0d6efd] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[20px] shrink-0 size-[40px]">
          <CheckMark id="rs_c2" />
          <div className="absolute bg-[#0d6efd] h-[2px] left-[40px] top-[20px] w-[99px]" />
          <div className="absolute bg-[#0d6efd] h-[2px] left-[139px] top-[20px] w-[99px]" />
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d6efd] text-[16px] text-center w-[282px]">
          <p className="leading-[24px]">{`Treatment & Condition assignment`}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[149px]">
        <div className="relative rounded-[20px] shrink-0 size-[40px]">
          <div aria-hidden className="absolute border-2 border-[#0d6efd] border-solid inset-0 pointer-events-none rounded-[20px]" />
          <div className="flex flex-col items-center justify-center size-full">
            <div className="bg-[#0d6efd] relative rounded-[10px] shrink-0 size-[16px]" />
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d6efd] text-[16px] text-center w-[147px]">
          <p className="leading-[24px]">{`Review and submit `}</p>
        </div>
        <div className="absolute bg-[#0d6efd] h-[2px] left-[-436px] top-[20px] w-[147px]" />
      </div>
      <div className="absolute bg-[#0d6efd] h-[2px] left-[571px] top-[20px] w-[150px]" />
    </div>
  );
}

// ─── Left column cards ────────────────────────────────────────────────────────

function VetDetailsCard() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[89px] rounded-[10px] top-[353px] w-[381px]">
      <div aria-hidden className="absolute border border-[#dde3e8] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
      <div className="bg-[#eff6ff] h-[40px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-full">
        <div aria-hidden className="absolute border-[#f1f4f7] border-b border-solid inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[24px] relative size-full">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1919] text-[16px] whitespace-nowrap">Vet details</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[8px] h-[117px] items-start justify-center overflow-clip px-[16px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-[381px]">
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between overflow-clip py-[16px] relative rounded-[inherit] size-full">
            <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 w-[349px] whitespace-nowrap">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#6e7a87] text-[14px] tracking-[-0.056px]"><p className="leading-[normal]">Email</p></div>
              <div className="flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center relative shrink-0 text-[#403f47] text-[16px] tracking-[-0.064px]"><p className="leading-[normal]">xxx3@clarustechnology.com</p></div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#f1f4f7] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="content-stretch flex items-center justify-between overflow-clip py-[11px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 w-[349px] whitespace-nowrap">
            <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#6e7a87] text-[14px] tracking-[-0.056px]"><p className="leading-[normal]">Vet ID</p></div>
            <div className="flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center relative shrink-0 text-[#1c1919] text-[16px] tracking-[-0.064px]"><p className="leading-[normal]">46712478</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PolicyInfoCard() {
  return (
    <div className="absolute content-stretch flex flex-col h-[527px] items-start left-[89px] rounded-[10px] top-[534px] w-[381px]">
      <div aria-hidden className="absolute border border-[#dde3e8] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
      <div className="bg-[#eff6ff] h-[40px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-full">
        <div aria-hidden className="absolute border-[#f1f4f7] border-b border-solid inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[24px] relative size-full">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1919] text-[16px] whitespace-nowrap">Policy Information</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[8px] h-[487px] items-start justify-center overflow-clip px-[16px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-[381px]">
        {[
          ["Policy Number","PB-2024-847291"],["Brand","One Step Insurance"],
          ["Policy holder e-mail","morgan@ghost.com"],["Policy holder surname","Morgan"],
          ["Post code","EH14 5AN"],["Pet name","Milo"],["Pet type","Cat"],["Payment receiver","Vet"],
        ].map(([label, value], i, arr) => (
          <div key={label} className="relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between overflow-clip py-[16px] relative rounded-[inherit] size-full">
              <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 w-[349px] whitespace-nowrap">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#6e7a87] text-[14px] tracking-[-0.056px]"><p className="leading-[normal]">{label}</p></div>
                <div className="flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center relative shrink-0 text-[#403f47] text-[16px] tracking-[-0.064px]"><p className="leading-[normal]">{value}</p></div>
              </div>
            </div>
            {i < arr.length - 1 && <div aria-hidden className="absolute border-[#f1f4f7] border-b border-solid inset-0 pointer-events-none" />}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Table header ─────────────────────────────────────────────────────────────

function TableHeader() {
  return (
    <div className="bg-[#f8fafb] h-[46px] relative shrink-0 w-[808px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        {([["Date of Treatment",150],["Treatment",215],["Condition",182],["Unit Price",113],["total",174]] as [string,number][]).map(([label,w]) => (
          <div key={label} className="bg-[#eff6ff] h-[46px] relative shrink-0" style={{width:w}}>
            <div aria-hidden className="absolute border-[#dde3e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[5.053px] items-center px-[10.105px] py-[5.053px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3e4b57] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[12px]">{label}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Chevron button ───────────────────────────────────────────────────────────

function RowChevron({ flipped, onClick }: { flipped?: boolean; onClick?: () => void }) {
  const inner = (
    <div className="bg-[#f1f4f7] relative rounded-[16777200px] shrink-0 size-[18px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[12px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="#556270" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </svg>
        </div>
      </div>
    </div>
  );
  if (onClick) {
    return (
      <button onClick={onClick} className="bg-transparent border-0 p-0 cursor-pointer flex-none" aria-label={flipped ? "Collapse" : "Expand"}>
        <div className={flipped ? "-scale-y-100" : undefined}>{inner}</div>
      </button>
    );
  }
  return inner;
}

// ─── Treatment rows (static, verbatim from Figma) ─────────────────────────────

function Row1({ isExpanded, onToggle }: { isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#dde3e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-px relative size-full">
        <div className="min-w-[157px] relative shrink-0 w-[162px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center min-w-[inherit] px-[10px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">Jan 3, 2026</p></div></div>
        <div className="relative shrink-0 w-[216px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.75px] items-start justify-center relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">Radiograph — Bilateral Hips</p><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#6e7a87] text-[11px] whitespace-nowrap">General Exam</p></div></div>
        <div className="relative shrink-0 w-[172px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">Hip dysplasia</p></div></div>
        <div className="relative shrink-0 w-[121px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.75px] items-start justify-center px-[8px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">£45.00</p><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#6e7a87] text-[11px] whitespace-nowrap">x 1</p></div></div>
        <div className="relative shrink-0 w-[71px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[16px] relative size-full"><p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#1c1919] text-[13px] whitespace-nowrap">£175.00</p></div></div>
        <RowChevron flipped={isExpanded} onClick={onToggle} />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#dde3e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-px relative size-full">
        <div className="min-w-[157px] relative shrink-0 w-[162px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center min-w-[inherit] px-[10px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">Jan 2, 2026</p></div></div>
        <div className="relative shrink-0 w-[216px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.75px] items-start justify-center relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#1c1919] text-[12px] text-ellipsis w-[183px] whitespace-nowrap">Vaccination — Annual Booster</p><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#6e7a87] text-[11px] whitespace-nowrap">Preventive Care</p></div></div>
        <div className="relative shrink-0 w-[172px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">Preventive Treatment</p></div></div>
        <div className="relative shrink-0 w-[121px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.75px] items-start justify-center px-[8px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">£62.00</p><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#6e7a87] text-[11px] whitespace-nowrap">x 1</p></div></div>
        <div className="relative shrink-0 w-[70px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[16px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">£62.00</p></div></div>
        <RowChevron />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#dde3e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-px relative size-full">
        <div className="min-w-[157px] relative shrink-0 w-[162px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center min-w-[inherit] px-[10px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">Jan 1, 2026</p></div></div>
        <div className="relative shrink-0 w-[216px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.75px] items-start justify-center relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#1c1919] text-[12px] text-ellipsis w-[193px] whitespace-nowrap">Gabapentin 100mg (100 capsules)</p><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#6e7a87] text-[11px] whitespace-nowrap">Prescription</p></div></div>
        <div className="relative shrink-0 w-[172px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">Chronic Pain</p></div></div>
        <div className="relative shrink-0 w-[121px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.75px] items-start justify-center px-[8px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">£85.00</p><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#6e7a87] text-[11px] whitespace-nowrap">x 1</p></div></div>
        <div className="relative shrink-0 w-[70px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[16px] relative size-full"><p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#1c1919] text-[13px] whitespace-nowrap">£120.00</p></div></div>
        <RowChevron />
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#dde3e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-px relative size-full">
        <div className="min-w-[157px] relative shrink-0 w-[162px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center min-w-[inherit] px-[10px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">Dec 29, 2025</p></div></div>
        <div className="relative shrink-0 w-[216px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.75px] items-start justify-center relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">Arthrocam Cat 15ml</p><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#6e7a87] text-[11px] whitespace-nowrap">Medication</p></div></div>
        <div className="relative shrink-0 w-[172px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">Arthritis</p></div></div>
        <div className="relative shrink-0 w-[121px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.75px] items-start justify-center px-[8px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">£28.50</p><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#6e7a87] text-[11px] whitespace-nowrap">x 1</p></div></div>
        <div className="relative shrink-0 w-[71px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[16px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">£28.50</p></div></div>
        <RowChevron />
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#dde3e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-px relative size-full">
        <div className="min-w-[157px] relative shrink-0 w-[162px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center min-w-[inherit] px-[10px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">Dec 29, 2025</p></div></div>
        <div className="relative shrink-0 w-[216px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.75px] items-start justify-center relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">Skin Allergy Treatment</p><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#6e7a87] text-[11px] whitespace-nowrap">Dermatology</p></div></div>
        <div className="relative shrink-0 w-[172px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">Allergic Dermatitis</p></div></div>
        <div className="relative shrink-0 w-[121px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.75px] items-start justify-center px-[8px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">£120.00</p><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#6e7a87] text-[11px] whitespace-nowrap">x 1</p></div></div>
        <div className="relative shrink-0 w-[70px]"><div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[16px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">£120.00</p></div></div>
        <RowChevron />
      </div>
    </div>
  );
}

// ─── Cost Breakdown (visible only when row 1 is expanded) ─────────────────────
// Verbatim from ReviewAndSubmitDetails — AdditionalPanel → Container8

function CostBreakdown() {
  return (
    <div className="bg-white shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
        <div className="bg-white relative rounded-[10px] shrink-0 w-[763px]">
          <div aria-hidden className="absolute border border-[#dde3e8] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
            {/* header band */}
            <div className="bg-[#f8fafb] relative shrink-0 w-full">
              <div aria-hidden className="absolute border-[#dde3e8] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center pb-[9px] pt-[8px] px-[12px] relative size-full">
                  <p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[14.25px] not-italic relative shrink-0 text-[#3e4b57] text-[9.5px] tracking-[0.8px] uppercase whitespace-nowrap">Cost Breakdown</p>
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] not-italic relative shrink-0 text-[#c4ccd4] text-[9px] tracking-[0.167px] whitespace-nowrap">·</p>
                  <div className="h-[16px] relative shrink-0 w-[154px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                      <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[15.75px] not-italic relative shrink-0 text-[#556270] text-[11px] w-[156px]">Radiograph — Bilateral Hips</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Base Treatment */}
            <div className="relative shrink-0 w-full">
              <div aria-hidden className="absolute border-[#f0f2f5] border-b border-solid inset-0 pointer-events-none" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[9px] pt-[8px] px-[12px] relative size-full">
                <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[14.25px] not-italic relative shrink-0 text-[#8a95a1] text-[9.5px] tracking-[0.7px] uppercase whitespace-nowrap">Base Treatment</p>
                <div className="h-[22px] relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[4px] relative size-full">
                    <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[17.25px] not-italic relative shrink-0 text-[#1c1919] text-[11.5px] whitespace-nowrap">Radiograph — Bilateral Hips × 1</p>
                    <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[17.25px] not-italic relative shrink-0 text-[#1c1919] text-[11.5px] whitespace-nowrap">£45.00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Additional Treatment */}
            <div className="relative shrink-0 w-full">
              <div aria-hidden className="absolute border-[#f0f2f5] border-b border-solid inset-0 pointer-events-none" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[9px] pt-[8px] px-[12px] relative size-full">
                <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[14.25px] not-italic relative shrink-0 text-[#8a95a1] text-[9.5px] tracking-[0.7px] uppercase whitespace-nowrap">Additional Treatment</p>
                <div className="h-[27px] relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[2.5px] pt-[6.5px] relative size-full">
                    <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[17.25px] not-italic relative shrink-0 text-[#1c1919] text-[11.5px] whitespace-nowrap">Administration</p>
                    <div className="h-[18px] relative shrink-0 w-[58px]"><div className="content-stretch flex flex-col items-start pl-[16px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[17.25px] not-italic relative shrink-0 text-[#1c1919] text-[11.5px] whitespace-nowrap">£20.00</p></div></div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between py-[2.5px] relative size-full">
                    <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[17.25px] not-italic relative shrink-0 text-[#1c1919] text-[11.5px] whitespace-nowrap">Stem Cell Treatment</p>
                    <div className="h-[18px] relative shrink-0 w-[60px]"><div className="content-stretch flex flex-col items-start pl-[16px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[17.25px] not-italic relative shrink-0 text-[#1c1919] text-[11.5px] whitespace-nowrap">£110.00</p></div></div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between py-[2.5px] relative size-full">
                    <div className="relative shrink-0 w-[142.477px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="h-[24px] relative shrink-0 w-full"><div className="relative size-full"><p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[17.25px] left-0 not-italic text-[#1c1919] text-[11.5px] top-[3.5px] whitespace-nowrap">House Calls</p></div></div>
                        <div className="h-[16px] relative shrink-0 w-[142.477px]"><div className="content-stretch flex flex-col items-start pt-px relative size-full"><p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6e7a87] text-[0px] tracking-[0.1172px] whitespace-nowrap"><span className="leading-[15px] text-[10px]">{`Essential for pet's health: `}</span><span className="font-['Inter:Medium',sans-serif] font-medium leading-[15px] text-[#1c1919] text-[10px]">Yes</span></p></div></div>
                      </div>
                    </div>
                    <div className="h-[18px] relative shrink-0 w-[65px]"><div className="content-stretch flex flex-col items-start pl-[16px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[17.25px] not-italic relative shrink-0 text-[#6e7a87] text-[11.5px] whitespace-nowrap">Included</p></div></div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between py-[2.5px] relative size-full">
                    <div className="relative shrink-0 w-[178.023px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="h-[24px] relative shrink-0 w-full"><div className="relative size-full"><p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[17.25px] left-0 not-italic text-[#1c1919] text-[11.5px] top-[3.5px] whitespace-nowrap">Out of Hours Treatment</p></div></div>
                        <div className="h-[16px] relative shrink-0 w-[178.023px]"><div className="content-stretch flex flex-col items-start pt-px relative size-full"><p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6e7a87] text-[0px] tracking-[0.1172px] whitespace-nowrap"><span className="leading-[15px] text-[10px]">{`Delaying would worsen condition: `}</span><span className="font-['Inter:Medium',sans-serif] font-medium leading-[15px] text-[#1c1919] text-[10px]">No</span></p></div></div>
                      </div>
                    </div>
                    <div className="h-[18px] relative shrink-0 w-[121px]"><div className="content-stretch flex flex-col items-start pl-[16px] relative size-full"><p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[17.25px] not-italic relative shrink-0 text-[#6e7a87] text-[11.5px] whitespace-nowrap">No additional cost</p></div></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Totals footer */}
            <div className="bg-[#f8fafb] relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
                <div className="relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[2px] relative size-full">
                    <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[15.75px] not-italic relative shrink-0 text-[#6e7a87] text-[10.5px] whitespace-nowrap">ATI Subtotal</p>
                    <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[15.75px] not-italic relative shrink-0 text-[#6e7a87] text-[10.5px] whitespace-nowrap">£130.00</p>
                  </div>
                </div>
                <div className="h-[24px] relative shrink-0 w-[689px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[4px] relative size-full">
                    <p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1c1919] text-[12px] whitespace-nowrap">Treatment Total</p>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#1c1919] text-[13px] whitespace-nowrap">£175.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Totals card ──────────────────────────────────────────────────────────────

function TotalsCard() {
  return (
    <div className="h-[154px] relative rounded-[10px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="bg-white relative shrink-0 w-full">
          <div aria-hidden className="absolute border-[#dde3e8] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[14px] pt-[13px] px-[20px] relative size-full">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#3e4b57] text-[14px] whitespace-nowrap">Subtotal</p>
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#1c1919] text-[13px] whitespace-nowrap">£340.50</p>
            </div>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full">
          <div aria-hidden className="absolute border-[#dde3e8] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[14px] pt-[13px] px-[20px] relative size-full">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#3e4b57] text-[14px] whitespace-nowrap">Tax</p>
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#1c1919] text-[13px] whitespace-nowrap">£27.24</p>
            </div>
          </div>
        </div>
        <div className="bg-[#f8fafb] relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[#1c1919] text-[16px] whitespace-nowrap">Total Amount</p>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] not-italic relative shrink-0 text-[#1c1919] text-[18px] tracking-[-0.3px] whitespace-nowrap">£367.74</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#dde3e8] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

// ─── Supporting Documents ─────────────────────────────────────────────────────

function SupportingDocuments() {
  return (
    <div className="bg-white border border-[rgba(15,23,42,0.09)] border-solid h-[44px] relative rounded-[10px] w-full">
      <div className="absolute content-stretch flex items-center left-[15px] top-[11.5px]">
        <div className="[word-break:break-word] content-stretch flex font-['Be_Vietnam_Pro:Medium',sans-serif] gap-[6px] items-center leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
          <p className="relative shrink-0 text-[#1c1919]">Supporting Documents</p>
          <p className="relative shrink-0 text-[#6e7a87]">(2 files)</p>
        </div>
      </div>
      <div className="absolute left-[759px] size-[24px] top-[9px]">
        <div className="absolute inset-[35.1%_26.77%_37.6%_26.77%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.425px_-8.425px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgChevronDownSmall}")` }}>
          <svg className="absolute block inset-0 size-full" fill="none" height="6.55" preserveAspectRatio="none" viewBox="0 0 11.15 6.55" width="11.15">
            <path d={svgPaths.p4c30680} fill="#1C1919" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

type Props = { onGoBack: () => void; onSubmit: () => void };

export default function ReviewAndSubmit({ onGoBack, onSubmit }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
    className="bg-[#f8fafb] relative w-full"
    style={{
        minHeight: 1480,
        paddingTop: 80,
        paddingBottom: 96
    }}
>

      {/* Decorative background */}
      <div className="absolute h-[1091px] left-0 top-[76px] w-[1440px]">
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[126.03%] left-[-40.97%] max-w-none top-0 w-[190.97%]" src={imgBg} />
        </div>
      </div>

      <TopNav />
      <Footer />
      <ProgressSteps />

      {/* Left column — static */}
      <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[28px] left-[89px] not-italic text-[#1c1919] text-[20px] top-[296px] whitespace-nowrap">Policy and pet details</p>
      <VetDetailsCard />
      <PolicyInfoCard />

      {/* Right column — flex-col so Cost Breakdown pushes content down naturally */}
      <div
  className="absolute left-[495px] top-[296px] w-[810px] flex flex-col gap-0"
>

        {/* Heading */}
        <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[28px] not-italic text-[#1c1919] text-[20px] whitespace-nowrap" style={{ marginBottom: 29 }}>
          {`Review and submit `}
        </p>

        {/* Treatment table — no fixed height, no overflow-clip so Cost Breakdown can appear inside */}
        <div className="relative rounded-[10px] w-full" style={{ marginBottom: 16 }}>
          <div aria-hidden className="absolute border border-[#dde3e8] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="content-stretch flex flex-col items-start overflow-clip p-px rounded-[10px] w-full">
            <TableHeader />
            <Row1 isExpanded={isExpanded} onToggle={() => setIsExpanded(v => !v)} />
            {isExpanded && <CostBreakdown />}
            <Row2 />
            <Row3 />
            <Row4 />
            <Row5 />
          </div>
        </div>

        {/* Totals */}
        <div style={{ marginBottom: 24 }}>
          <TotalsCard />
        </div>

        {/* Supporting Documents */}
        <div style={{ marginBottom: 40 }}>
          <SupportingDocuments />
        </div>

        {/* Go Back + Submit */}
        <div className="flex items-center justify-between" style={{ marginBottom: 48 }}>
          <button onClick={onGoBack} className="bg-transparent border-0 p-0 cursor-pointer content-stretch flex gap-[4px] h-[44px] items-center justify-center pl-[20px] pr-[24px] py-[16px] rounded-[6px] w-[115px]">
            <div className="flex items-center justify-center relative shrink-0 size-[20px]">
              <div className="flex-none rotate-90">
                <div className="relative size-[20px]">
                  <div className="absolute inset-[8.33%_22.6%_10.1%_22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgSouth}")` }}>
                    <svg className="absolute block inset-0 size-full" fill="none" height="16.3125" preserveAspectRatio="none" viewBox="0 0 10.9583 16.3125" width="10.9583">
                      <path d={svgPaths.pf7a3500} fill="#FC4D22" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fc4d22] text-[14px] whitespace-nowrap">Go Back</p>
          </button>

          <button onClick={onSubmit} className="bg-[#fc4d22] border-0 cursor-pointer h-[44px] rounded-[6px] w-[182px]">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
                <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Submit</p>
              </div>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
