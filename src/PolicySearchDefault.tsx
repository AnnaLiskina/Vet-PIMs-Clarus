import svgPaths from "./imports/PolicySearchDefault/svg-iatzsk4yky";
import imgAbstractAstheticHdWallpaperBackgroundBannerDesignMultipurpose1 from "./imports/PolicySearchDefault/b1910e2f1d722830fba3abdae39207eb2a78d09b.png";

export type PolicySearchValues = {
  clientName: string;
  address: string;
  policyNumber: string;
  insurer: string;
  petName: string;
};

type Props = {
  values: PolicySearchValues;
  onChange: (v: PolicySearchValues) => void;
  onSearch: () => void;
};

type LogoClarusProps = {
  className?: string;
  property1?: "Full Color";
};

function LogoClarus({ className }: LogoClarusProps) {
  return (
    <div className={className || "h-[80px] overflow-clip relative w-[264px]"}>
      <div className="absolute inset-[0.96%_72.86%_0_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="79.2327" preserveAspectRatio="none" viewBox="0 0 71.6474 79.2327" width="71.6474">
          <path d={svgPaths.p3cee3e00} fill="url(#paint0_linear_0_66)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_66" x1="4.00305" x2="46.763" y1="30.8916" y2="74.7432">
              <stop offset="0.223634" stopColor="#F57418" />
              <stop offset="0.893493" stopColor="#FBA43B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[0_68.26%_22.08%_15.8%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="62.3333" preserveAspectRatio="none" viewBox="0 0 42.0685 62.3333" width="42.0685">
          <path d={svgPaths.p5960b00} fill="url(#paint0_linear_0_61)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_61" x1="62.9128" x2="67.9258" y1="36.3899" y2="23.1187">
              <stop offset="0.0892416" stopColor="#FBA43B" />
              <stop offset="1" stopColor="#F57418" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[28.81%_48.83%_28.34%_38.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="34.28" preserveAspectRatio="none" viewBox="0 0 32.812 34.28" width="32.812">
          <path d={svgPaths.p3ac40380} fill="#F57418" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.56%_44.45%_29%_54.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="34.7548" preserveAspectRatio="none" viewBox="0 0 3.229 34.7548" width="3.229">
          <path d="M0 0H3.229V34.7548H0V0Z" fill="#F57418" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.31%_30.96%_28.35%_58.86%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="26.6687" preserveAspectRatio="none" viewBox="0 0 26.873 26.6687" width="26.873">
          <path d={svgPaths.p1f35fa80} fill="#F57418" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.83%_21.69%_29%_73.16%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="25.7337" preserveAspectRatio="none" viewBox="0 0 13.579 25.7337" width="13.579">
          <path d={svgPaths.p3a02d900} fill="#F57418" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.94%_10.74%_28.35%_80.79%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="26.1647" preserveAspectRatio="none" viewBox="0 0 22.359 26.1647" width="22.359">
          <path d={svgPaths.p3d5f9480} fill="#F57418" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.3%_0.02%_28.34%_92.37%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="26.6833" preserveAspectRatio="none" viewBox="0 0 20.095 26.6833" width="20.095">
          <path d={svgPaths.p31b58f00} fill="#F57418" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Help() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="help">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="help">
          <mask height="20" id="mask0_0_78" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_78)">
            <path d={svgPaths.p28dd2c00} fill="#1C1919" id="help_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[32px] items-center justify-center left-[1295px] top-[30px]" data-name="Menu item">
      <Help />
      <div className="[word-break:break-word] flex flex-col font-['Mont:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1919] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Need Help?</p>
      </div>
    </div>
  );
}

function DesktopTopNav() {
  return (
    <div className="absolute bg-white drop-shadow-[0px_1.517px_6.069px_rgba(28,25,25,0.05)] h-[80px] left-0 top-0 w-[1440px]" data-name="Desktop / Top Nav">
      <div className="absolute h-[12px] left-0 top-0 w-[1440px]" data-name="Clarus Linen Line">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(252, 77, 34) 0%, rgb(252, 82, 35) 15.999%, rgb(253, 121, 44) 50.959%, rgb(254, 154, 53) 74.996%, rgb(255, 190, 62) 99.995%)" }} />
      </div>
      <MenuItem />
      <div className="absolute bg-[#dde3e8] h-px left-0 top-[79px] w-[1440px]" />
      <LogoClarus className="absolute h-[42px] left-[40px] overflow-clip top-[25px] w-[140px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[20px] left-[108px] top-[33px] w-[199px]">
      <p className="[word-break:break-word] absolute font-['Mont:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c1919] text-[12px] top-0 whitespace-nowrap">© 2026 Clarus. All rights reserved.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]">
      <div aria-hidden className="absolute border-black border-r border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1c1919] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis">Privacy Policy</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[137px]">
      <div aria-hidden className="absolute border-black border-r border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1c1919] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis">Terms of Use</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[165px]">
      <div className="[word-break:break-word] flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1c1919] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis">Contact Support</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[46px] items-center left-[876px] top-[31px]">
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function FooterFrame() {
  return (
    <div className="absolute bg-white drop-shadow-[4px_10px_4px_rgba(0,0,0,0.25)] inset-[25.86%_0_0_0]">
      <div className="absolute inset-[25.58%_94.1%_25.09%_2.78%]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" height="42.4199" preserveAspectRatio="none" viewBox="0 0 45 42.4199" width="45">
          <path d={svgPaths.p362e3500} fill="url(#paint0_linear_0_71)" id="Union" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_71" x1="22.4052" x2="45" y1="16.5206" y2="16.5206">
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
      <Frame7 />
      <Frame6 />
      <div className="absolute h-0 left-0 top-0 w-[1440px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1440 1" width="1440">
            <line id="Line 49" stroke="#DDE3E8" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute h-[116px] left-0 top-[791px] w-[1440px]" data-name="Footer">
      <FooterFrame />
    </div>
  );
}

function Field({ label, value, placeholder, onChange }: { label: string; value: string; placeholder: string; onChange: (v: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Email label container">
        <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1919] text-[14px] whitespace-nowrap">{label}</p>
      </div>
      <div className="bg-white h-[44px] relative rounded-[6px] shrink-0 w-full" data-name="input">
        <div aria-hidden className="absolute border border-[#dde3e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[9px] relative size-full">
            <input
              type="text"
              value={value}
              onChange={e => onChange(e.target.value)}
              placeholder={placeholder}
              className="w-full bg-transparent outline-none font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] text-[#1c1919] text-[14px] placeholder:text-[#8a95a1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Search</p>
    </div>
  );
}

export default function PolicySearchDefault({ values, onChange, onSearch }: Props) {
  const set = (key: keyof PolicySearchValues) => (v: string) => onChange({ ...values, [key]: v });

  return (
    // Fixed 1440×907px canvas — matches the Figma frame exactly
    <div className="bg-[#f4f6f9] relative size-full" data-name="Policy Search default">
      {/* Background image */}
      <div className="absolute h-[741px] left-0 top-[80px] w-[1440px]" data-name="abstract-asthetic-hd-wallpaper-background-banner-design-multipurpose 1">
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-1.46%] max-w-none top-0 w-[102.92%]" src={imgAbstractAstheticHdWallpaperBackgroundBannerDesignMultipurpose1} />
        </div>
      </div>

      {/* Heading */}
      <div className="absolute content-stretch flex flex-col h-[72px] items-center left-[284px] top-[144px] w-[624px]" data-name="Container">
        <div className="relative shrink-0 w-full" data-name="Heading 1">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#1c1919] text-[20px] whitespace-nowrap">Policy Search</p>
          </div>
        </div>
        <div className="h-[24px] relative shrink-0 w-[624px]" data-name="Paragraph">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#252e38] text-[14px] whitespace-nowrap">{`Search for the patient's active policy to begin a new claim.`}</p>
          </div>
        </div>
      </div>

      <DesktopTopNav />
      <Footer />

      {/* Form card */}
      <div className="absolute bg-white gap-x-[32px] gap-y-[20px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] left-[284px] p-[24px] rounded-[10px] top-[240px] w-[872px]">
        <div aria-hidden className="absolute border border-[#dde3e8] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Input container / L">
          <div className="overflow-clip rounded-[inherit] size-full">
            <Field label="Client's name" value={values.clientName} placeholder="Enter Client's name" onChange={set("clientName")} />
          </div>
        </div>
        <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Input container / L">
          <div className="overflow-clip rounded-[inherit] size-full">
            <Field label="Address" value={values.address} placeholder="Enter Client's address" onChange={set("address")} />
          </div>
        </div>
        <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Input container / L">
          <div className="overflow-clip rounded-[inherit] size-full">
            <Field label="Policy number" value={values.policyNumber} placeholder="Enter policy number" onChange={set("policyNumber")} />
          </div>
        </div>
        <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Input container / L">
          <div className="overflow-clip rounded-[inherit] size-full">
            <Field label="Insurer" value={values.insurer} placeholder="Enter insurer" onChange={set("insurer")} />
          </div>
        </div>
        <div className="col-1 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Input container / L">
          <div className="overflow-clip rounded-[inherit] size-full">
            <Field label="Pet's name (optional)" value={values.petName} placeholder="Enter pet's name" onChange={set("petName")} />
          </div>
        </div>
      </div>

      {/* Search button */}
      <div
        className="absolute bg-[#fc4d22] h-[44px] left-[876px] rounded-[6px] top-[570px] w-[280px] cursor-pointer"
        data-name="Button"
        onClick={onSearch}
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
            <Frame1 />
          </div>
        </div>
      </div>
    </div>
  );
}
