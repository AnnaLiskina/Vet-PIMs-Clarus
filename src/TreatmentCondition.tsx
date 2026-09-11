import { useState } from "react";
import svgPaths from "./imports/TreatmentCondition/svg-rdttyip4wo";
import sdPaths from "./imports/SupportingDocuments/svg-cxu6p7lasj";
import imgBg from "./imports/TreatmentCondition/b1910e2f1d722830fba3abdae39207eb2a78d09b.png";
import { imgChevronDownSmall, imgChevronDownSmall1, imgSouth } from "./imports/TreatmentCondition/svg-dx8pz";
import { imgUpload } from "./imports/SupportingDocuments/svg-17qty";

type Props = {
  onGoBack: () => void;
  onReview: () => void;
};

const CONDITIONS: Record<number, string[]> = {
  0: ["Hip dysplasia", "Elbow dysplasia", "Cruciate ligament tear", "Fracture", "Luxating patella"],
  1: ["Preventive Treatment", "Routine wellness", "Dental cleaning", "Vaccination", "Parasite control"],
  2: ["Allergic Dermatitis", "Atopic dermatitis", "Food allergy", "Contact allergy", "Skin infection"],
  3: ["Arthritis", "Osteoarthritis", "Joint inflammation", "Degenerative joint disease", "Rheumatoid arthritis"],
};
const DEFAULT_CONDITIONS = ["Hip dysplasia", "Preventive Treatment", "Allergic Dermatitis", "Arthritis"];

// ─── Condition dropdown ───────────────────────────────────────────────────────
function ConditionSelect({ rowIdx, value, onChange }: { rowIdx: number; value: string; onChange: (v: string) => void }) {
  return (
    <div className="bg-white h-[26px] relative rounded-[2px] shrink-0 w-[170px]">
      <div aria-hidden className="absolute border border-[#6e7a87] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="absolute left-[10px] top-[6px] right-[22px] overflow-hidden">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] text-[#1c1919] text-[10.5px] whitespace-nowrap truncate">{value}</p>
      </div>
      <div className="absolute left-[150px] size-[12px] top-[7px]" style={{ pointerEvents: "none" }}>
        <div className="absolute inset-[35.1%_26.77%_37.6%_26.77%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.425px_-8.425px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgChevronDownSmall}")` }}>
          <svg className="absolute block inset-0 size-full" fill="none" height="3.275" preserveAspectRatio="none" viewBox="0 0 5.575 3.275" width="5.575">
            <path d={svgPaths.p7df3e00} fill="#1C1919" />
          </svg>
        </div>
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
      >
        {CONDITIONS[rowIdx].map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

// ─── Treatment table row ──────────────────────────────────────────────────────
type RowData = { date: string; treatmentName: string; treatmentType: string; onsetDate: string };

function TreatmentRow({ row, rowIdx, condition, onConditionChange }: {
  row: RowData; rowIdx: number; condition: string; onConditionChange: (v: string) => void;
}) {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[810px]">
      <div className="content-stretch flex items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="h-[64px] relative shrink-0 w-[809px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pr-[18px] py-[16px] relative size-full">
            <div className="content-stretch flex items-center justify-center pl-[16px] relative shrink-0 w-[129px]">
              <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] text-[#1a1d23] text-[12px] w-[97px]">{row.date}</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[224px]">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[17.5px] min-w-px text-[#1a1d23] text-[12px]">{row.treatmentName}</p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] text-[#6b7280] text-[12px]">{row.treatmentType}</p>
              </div>
            </div>
            <div className="content-stretch flex items-center px-[8px] py-[20px] relative shrink-0 w-[112px]">
              <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] text-[#1a1d23] text-[12px] w-[88px]">{row.onsetDate}</p>
            </div>
            <div className="content-stretch flex items-center py-[20px] relative shrink-0 w-[150px]">
              <div className="bg-[#eff6ff] relative rounded-[16px] shrink-0">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[2px] items-center px-[8px] py-[6px] relative size-full">
                    <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[18px] text-[#0b5ed7] text-[12px] text-center whitespace-nowrap">Auto matched</p>
                  </div>
                </div>
              </div>
            </div>
            <ConditionSelect rowIdx={rowIdx} value={condition} onChange={onConditionChange} />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e6ec] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

const ROWS: RowData[] = [
  { date: "Jan 3, 2026", treatmentName: "Radiograph – Bilateral Hips", treatmentType: "General Exam", onsetDate: "Jan 2, 2026" },
  { date: "Jan 2, 2026", treatmentName: "Vaccination — Annual Booster", treatmentType: "Preventive Care", onsetDate: "Jan 2, 2026" },
  { date: "Jan 1, 2026", treatmentName: "Gabapentin 100mg (100 capsules)", treatmentType: "Prescription", onsetDate: "Jan 1, 2026" },
  { date: "Dec 29, 2026", treatmentName: "Arthrocam Cat 15ml", treatmentType: "Medication", onsetDate: "Dec 29, 2026" },
];

// ─── Logo paths (used inline to avoid duplicate SVG gradient IDs) ─────────────
function LogoClarusInline() {
  return (
    <div className="absolute h-[42px] left-[40px] overflow-clip top-[25px] w-[140px]">
      <div className="absolute inset-[0.96%_72.86%_0_0]">
        <svg className="absolute block inset-0 size-full" fill="none" height="79.2327" preserveAspectRatio="none" viewBox="0 0 71.6474 79.2327" width="71.6474">
          <path d={svgPaths.p3cee3e00} fill="url(#tc_logo_g1)" />
          <defs><linearGradient gradientUnits="userSpaceOnUse" id="tc_logo_g1" x1="4.00305" x2="46.763" y1="30.8916" y2="74.7432">
            <stop offset="0.223634" stopColor="#F57418" /><stop offset="0.893493" stopColor="#FBA43B" />
          </linearGradient></defs>
        </svg>
      </div>
      <div className="absolute inset-[0_68.26%_22.08%_15.8%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="62.3333" preserveAspectRatio="none" viewBox="0 0 42.0685 62.3333" width="42.0685">
          <path d={svgPaths.p5960b00} fill="url(#tc_logo_g2)" />
          <defs><linearGradient gradientUnits="userSpaceOnUse" id="tc_logo_g2" x1="62.9128" x2="67.9258" y1="36.3899" y2="23.1187">
            <stop offset="0.0892416" stopColor="#FBA43B" /><stop offset="1" stopColor="#F57418" />
          </linearGradient></defs>
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

export default function TreatmentCondition({ onGoBack, onReview }: Props) {
  const [conditions, setConditions] = useState<string[]>(DEFAULT_CONDITIONS);
  const [reviewHovered, setReviewHovered] = useState(false);
  const [docsExpanded, setDocsExpanded] = useState(false);

  const setCondition = (i: number, v: string) =>
    setConditions((prev) => prev.map((c, idx) => (idx === i ? v : c)));

  // Content area = 907 − 80 (header) − 80 (footer) = 747px visible; inner content ~981px → scrolls ~234px
  // All absolute tops inside the content area are (original Figma top − 80).

  return (
    // 907px flex-column shell — header fixed, content scrolls, footer fixed
    <div style={{ display: "flex", flexDirection: "column", width: 1440, height: 907, overflow: "hidden", background: "#f8fafb" }}>

      {/* ── Fixed Header ── */}
      <div className="bg-white drop-shadow-[0px_1.517px_6.069px_rgba(28,25,25,0.05)]"
        style={{ flexShrink: 0, height: 80, position: "relative", zIndex: 50 }}>
        <div className="absolute h-[12px] left-0 top-0 w-[1440px]"
          style={{ backgroundImage: "linear-gradient(90deg,rgb(252,77,34) 0%,rgb(252,82,35) 16%,rgb(253,121,44) 51%,rgb(254,154,53) 75%,rgb(255,190,62) 100%)" }} />
        <LogoClarusInline />
        <div className="absolute content-stretch flex gap-[4px] h-[32px] items-center justify-center left-[1295px] top-[30px]">
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20">
              <mask id="tc_help" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" height="20" x="0" y="0">
                <rect fill="#D9D9D9" width="20" height="20" />
              </mask>
              <g mask="url(#tc_help)"><path d={svgPaths.p28dd2c00} fill="#1C1919" /></g>
            </svg>
          </div>
          <p className="font-['Mont:SemiBold',sans-serif] text-[#1c1919] text-[14px] leading-[20px] whitespace-nowrap">Need Help?</p>
        </div>
        <div className="absolute bg-[#dde3e8] h-px left-0 top-[79px] w-[1440px]" />
      </div>

      {/* ── Scrollable content area ── */}
      <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden", position: "relative", minHeight: 0 }}>

        {/* Background watermark */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 1440, height: 1138, pointerEvents: "none", overflow: "hidden", opacity: 0.2, zIndex: 0 }}>
          <img alt="" src={imgBg} style={{ position: "absolute", top: 0, left: "-47.36%", width: "185.11%", height: "116.98%", maxWidth: "none" }} />
        </div>

        {/* Spacer: covers all absolutely-positioned content through the bottom of the treatment table (273+339=612px) */}
        <div style={{ height: 612, position: "relative" }}>

      {/* ── Stepper — Figma top-[140px] → content top-[60px] ── */}
      <div className="absolute content-stretch flex items-center justify-between left-[313px] top-[60px] w-[815px]" style={{ zIndex: 1 }}>
        {/* Step 1 — completed */}
        <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[126px]">
          <div className="bg-[#0d6efd] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[20px] shrink-0 size-[40px]">
            <div className="relative shrink-0 size-[24px]">
              <div className="absolute inset-[26.56%_17.81%_26.67%_17.76%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.262px_-6.375px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgChevronDownSmall1}")` }}>
                <svg className="absolute block inset-0 size-full" fill="none" height="11.225" preserveAspectRatio="none" viewBox="0 0 15.463 11.225" width="15.463">
                  <path d={svgPaths.p34dbb470} fill="white" />
                </svg>
              </div>
            </div>
            <div className="absolute bg-[#0d6efd] h-[2px] left-[40px] top-[20px] w-[99px]" />
            <div className="absolute bg-[#0d6efd] h-[2px] left-[139px] top-[20px] w-[99px]" />
            <div className="absolute bg-[#a8b2bc] h-[2px] left-[378px] top-[20px] w-[100px]" />
          </div>
          <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[#0d6efd] text-[16px] leading-[24px] text-center w-[120px]">Claim creation</p>
        </div>
        {/* Step 2 — active */}
        <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[276px]">
          <div className="relative rounded-[20px] shrink-0 size-[40px]">
            <div aria-hidden className="absolute border-2 border-[#0d6efd] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <div className="flex flex-col items-center justify-center size-full">
              <div className="bg-[#0d6efd] relative rounded-[10px] shrink-0 size-[16px]" />
            </div>
          </div>
          <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[#0d6efd] text-[16px] leading-[24px] text-center w-[282px]">{`Treatment & Condition assignment`}</p>
        </div>
        {/* Step 3 */}
        <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[149px]">
          <div className="relative rounded-[20px] shrink-0 size-[40px]">
            <div aria-hidden className="absolute border-2 border-[#a8b2bc] border-solid inset-0 pointer-events-none rounded-[20px]" />
          </div>
          <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] text-[#6e7a87] text-[16px] leading-[24px] text-center w-[147px]">Review and submit</p>
          <div className="absolute bg-[#a8b2bc] h-[2px] left-[-250px] top-[20px] w-[305px]" />
          <div className="absolute bg-[#0d6efd] h-[2px] left-[-436px] top-[20px] w-[147px]" />
        </div>
      </div>

      {/* ── Section headings — Figma top-[296px] → content top-[216px] ── */}
      <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[28px] left-[89px] text-[#1c1919] text-[20px] top-[216px] whitespace-nowrap" style={{ zIndex: 1 }}>Policy and pet details</p>
      <div className="absolute content-stretch flex flex-col items-start left-[528px] top-[216px] w-[674px]" style={{ zIndex: 1 }}>
        <p className="font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[28px] text-[#1c1919] text-[20px] whitespace-nowrap">{`Treatment & Condition`}</p>
      </div>

      {/* ── Vet details card — Figma top-[353px] → content top-[273px] ── */}
      <div className="absolute content-stretch flex flex-col items-start left-[89px] rounded-[10px] top-[273px] w-[381px]" style={{ zIndex: 1 }}>
        <div aria-hidden className="absolute border border-[#dde3e8] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
        <div className="bg-[#eff6ff] h-[40px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-full">
          <div aria-hidden className="absolute border-[#f1f4f7] border-b border-solid inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pl-[24px] relative size-full">
              <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[normal] text-[#1c1919] text-[16px] whitespace-nowrap">Vet details</p>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[8px] h-[117px] items-start justify-center overflow-clip px-[16px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-[381px]">
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between overflow-clip py-[16px] relative rounded-[inherit] size-full">
              <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 w-[349px] whitespace-nowrap">
                <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] text-[#6e7a87] text-[14px] tracking-[-0.056px] leading-[normal]">Email</p>
                <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[#403f47] text-[16px] tracking-[-0.064px] leading-[normal]">xxx3@clarustechnology.com</p>
              </div>
            </div>
            <div aria-hidden className="absolute border-[#f1f4f7] border-b border-solid inset-0 pointer-events-none" />
          </div>
          <div className="content-stretch flex items-center justify-between overflow-clip py-[11px] relative shrink-0 w-full">
            <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 w-[349px] whitespace-nowrap">
              <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] text-[#6e7a87] text-[14px] tracking-[-0.056px] leading-[normal]">Vet ID</p>
              <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[#1c1919] text-[16px] tracking-[-0.064px] leading-[normal]">46712478</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Policy information card — Figma top-[534px] → content top-[454px] ── */}
      <div className="absolute content-stretch flex flex-col h-[527px] items-start left-[89px] rounded-[10px] top-[454px] w-[381px]" style={{ zIndex: 1 }}>
        <div aria-hidden className="absolute border border-[#dde3e8] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
        <div className="bg-[#eff6ff] h-[40px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-full">
          <div aria-hidden className="absolute border-[#f1f4f7] border-b border-solid inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pl-[24px] relative size-full">
              <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[normal] text-[#1c1919] text-[16px] whitespace-nowrap">Policy Information</p>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[8px] h-[487px] items-start justify-center overflow-clip px-[16px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-[381px]">
          {[
            { label: "Policy Number", value: "PB-2024-847291" },
            { label: "Brand", value: "One Step Insurance" },
            { label: "Policy holder e-mail", value: "morgan@ghost.com" },
            { label: "Policy holder surname", value: "Morgan" },
            { label: "Post code", value: "EH14 5AN" },
            { label: "Pet name", value: "Milo" },
            { label: "Pet type", value: "Cat" },
            { label: "Payment receiver", value: "Vet" },
          ].map((item, i, arr) => (
            <div key={item.label} className="relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between overflow-clip py-[16px] relative rounded-[inherit] size-full">
                <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 w-[349px] whitespace-nowrap">
                  <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] text-[#6e7a87] text-[14px] tracking-[-0.056px] leading-[normal]">{item.label}</p>
                  <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[#403f47] text-[16px] tracking-[-0.064px] leading-[normal]">{item.value}</p>
                </div>
              </div>
              {i < arr.length - 1 && <div aria-hidden className="absolute border-[#f1f4f7] border-b border-solid inset-0 pointer-events-none" />}
            </div>
          ))}
        </div>
      </div>

      {/* ── Treatment table — Figma top-[353px] → content top-[273px] ── */}
      <div className="absolute content-stretch flex flex-col items-start left-[528px] top-[273px] w-[810px]" style={{ zIndex: 1 }}>
        {/* Header row */}
        <div className="content-stretch flex flex-col items-start relative rounded-[10px] shrink-0 w-full">
          <div aria-hidden className="absolute border border-[#d8ecfb] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
          <div className="bg-[#eff6ff] h-[51px] relative rounded-[10px] shrink-0 w-full">
            <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[15px] left-[23px] text-[#3e4b57] text-[10px] top-[11px] tracking-[0.5px] uppercase w-[92px]">Date of Treatment</p>
            <div className="absolute content-stretch flex items-center justify-center left-[131px] top-[18px]">
              <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[15px] text-[#3e4b57] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">Treatment</p>
            </div>
            <div className="absolute content-stretch flex items-center justify-center left-[365px] top-[11px]">
              <div className="font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[0] text-[#3e4b57] text-[10px] tracking-[0.5px] uppercase w-[72px]">
                <p className="leading-[15px] mb-0">onset</p>
                <p className="leading-[15px]">date</p>
              </div>
            </div>
            <div className="absolute content-stretch flex items-center justify-center left-[471px] top-[18px]">
              <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[15px] text-[#3e4b57] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">status</p>
            </div>
            <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[15px] left-[617px] text-[#3e4b57] text-[10px] top-[18px] tracking-[0.5px] uppercase whitespace-nowrap">Condition</p>
          </div>
        </div>
        {/* Data rows */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full mt-[8px]">
          {ROWS.map((row, i) => (
            <TreatmentRow key={i} row={row} rowIdx={i} condition={conditions[i]} onConditionChange={(v) => setCondition(i, v)} />
          ))}
        </div>
      </div>

        </div>{/* end spacer */}

        {/* ── Supporting Documents + buttons in normal flow — pushed down below the treatment table ── */}
        {/* margin-left: 528px matches the right column; width: 810px matches the design; margin-top: 31px is the gap from table bottom to accordion top */}
        <div style={{ marginLeft: 528, marginTop: 31, width: 810, position: "relative", zIndex: 1 }}>

          {/* Accordion */}
          <div className="bg-white border border-[rgba(15,23,42,0.09)] border-solid rounded-[10px]">
            <button
              type="button"
              onClick={() => setDocsExpanded((v) => !v)}
              className="w-full text-left cursor-pointer"
              style={{ height: 44, position: "relative", background: "transparent", border: "none", borderRadius: 10 }}
            >
              <div className="absolute flex items-center gap-[6px]" style={{ left: 15, top: 11.5 }}>
                <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[14px] leading-[normal] text-[#1c1919] whitespace-nowrap">Supporting Documents</p>
                <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[14px] leading-[normal] text-[#6e7a87] whitespace-nowrap">(2 files)</p>
              </div>
              <div className="absolute size-[24px]" style={{ left: 759, top: 9 }}>
                <div className="absolute inset-[35.1%_26.77%_37.6%_26.77%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.425px_-8.425px] mask-size-[24px_24px]"
                  style={{ maskImage: `url("${imgChevronDownSmall1}")`, transform: docsExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 250ms ease", transformOrigin: "center" }}>
                  <svg className="absolute block inset-0 size-full" fill="none" height="6.55" preserveAspectRatio="none" viewBox="0 0 11.15 6.55" width="11.15">
                    <path d={svgPaths.p4c30680} fill="#1C1919" />
                  </svg>
                </div>
              </div>
            </button>
            <div style={{ overflow: "hidden", maxHeight: docsExpanded ? 200 : 0, transition: "max-height 250ms ease" }}>
              <div className="border-t border-[rgba(15,23,42,0.09)]">
                {/* File row 1 — Pet Clinical History.pdf */}
                <div className="flex items-center gap-[15px] px-[15px] pt-[17px] pb-[8px]">
                  <div className="bg-[#eff6ff] flex items-center justify-center relative rounded-[3.75px] shrink-0 size-[26.25px]">
                    <div className="relative shrink-0 size-[13.125px]">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13.125" preserveAspectRatio="none" viewBox="0 0 13.125 13.125" width="13.125">
                        <path d={sdPaths.p73bed00} stroke="#0D6EFD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
                        <path d="M7.65625 4.375H4.375" stroke="#0D6EFD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
                        <path d="M8.75 6.5625H4.375" stroke="#0D6EFD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
                        <path d="M7.10938 8.75H4.375" stroke="#0D6EFD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[13px] leading-[16.25px] text-[#1c1919] flex-1">Pet Clinical History.pdf</p>
                  <div className="bg-[#f8fafb] flex gap-[5px] items-center px-[11px] py-[6px] relative rounded-[6px] shrink-0">
                    <div aria-hidden className="absolute border border-[#dde3e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                        <path d={sdPaths.p1dcd500} stroke="#556270" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={sdPaths.p24092800} stroke="#556270" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[11px] leading-[16.5px] text-[#556270] whitespace-nowrap">View</p>
                  </div>
                </div>
                {/* File row 2 — Notes.doc */}
                <div className="flex items-center gap-[15px] px-[15px] pb-[8px]">
                  <div className="bg-[#f0f9ee] flex items-center justify-center relative rounded-[3.75px] shrink-0 size-[26.25px]">
                    <div className="relative shrink-0 size-[13.125px]">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13.125" preserveAspectRatio="none" viewBox="0 0 13.125 13.125" width="13.125">
                        <path d={sdPaths.p17da5f80} stroke="#28A047" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
                        <path d={sdPaths.p2fa24980} stroke="#28A047" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
                        <path d="M6.5625 6.01562H8.75" stroke="#28A047" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
                        <path d="M6.5625 8.75H8.75" stroke="#28A047" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
                        <path d="M4.375 6.01562H4.38047" stroke="#28A047" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
                        <path d="M4.375 8.75H4.38047" stroke="#28A047" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[13px] leading-[16.25px] text-[#1c1919] flex-1">Notes.doc</p>
                  <div className="bg-[#f8fafb] flex gap-[5px] items-center px-[11px] py-[6px] relative rounded-[6px] shrink-0">
                    <div aria-hidden className="absolute border border-[#dde3e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                        <path d={sdPaths.p1dcd500} stroke="#556270" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={sdPaths.p24092800} stroke="#556270" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[11px] leading-[16.5px] text-[#556270] whitespace-nowrap">View</p>
                  </div>
                </div>
                {/* Upload a new document */}
                <div className="flex items-center gap-[5px] px-[15px] pb-[16px] cursor-pointer">
                  <div className="size-[16px] relative shrink-0">
                    <div className="absolute inset-[18.44%_16.67%_16.67%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4.425px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgUpload}")` }}>
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.3833" preserveAspectRatio="none" viewBox="0 0 10.6667 10.3833" width="10.6667">
                        <path d={sdPaths.p3a523700} fill="#0D6EFD" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[12px] leading-[20px] text-[#0d6efd] whitespace-nowrap">Upload a new document</p>
                </div>
              </div>
            </div>
          </div>

          {/* Go Back + Review — 32px below accordion bottom, justify-between over the same 810px width */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 32, paddingBottom: 48 }}>
            <button
              type="button"
              onClick={onGoBack}
              className="content-stretch flex gap-[4px] h-[44px] items-center justify-center pl-[20px] pr-[24px] py-[16px] rounded-[6px] w-[115px] cursor-pointer"
              style={{ background: "transparent" }}
            >
              <div className="flex items-center justify-center relative shrink-0 size-[20px]">
                <div className="flex-none rotate-90 relative size-[20px]">
                  <div className="absolute inset-[8.33%_22.6%_10.1%_22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgSouth}")` }}>
                    <svg className="absolute block inset-0 size-full" fill="none" height="16.3125" preserveAspectRatio="none" viewBox="0 0 10.9583 16.3125" width="10.9583">
                      <path d={svgPaths.pf7a3500} fill="#FC4D22" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] text-[#fc4d22] text-[14px] whitespace-nowrap">Go Back</p>
            </button>
            <button
              type="button"
              onClick={onReview}
              onMouseEnter={() => setReviewHovered(true)}
              onMouseLeave={() => setReviewHovered(false)}
              className="h-[44px] rounded-[6px] w-[182px] cursor-pointer flex items-center justify-center"
              style={{ background: reviewHovered ? "#d93e1a" : "#fc4d22" }}
            >
              <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] text-white text-[14px] whitespace-nowrap">Review</p>
            </button>
          </div>

        </div>{/* end flow block */}
      </div>{/* end scrollable content area */}

      {/* ── Fixed Footer ── */}
      <div className="bg-white drop-shadow-[4px_10px_4px_rgba(0,0,0,0.25)]"
        style={{ flexShrink: 0, height: 80, position: "relative", zIndex: 2 }}>
        <div className="absolute" style={{ left: 40, top: 20, width: 45, height: 42 }}>
          <svg className="absolute block inset-0 size-full" fill="none" height="42.4199" preserveAspectRatio="none" viewBox="0 0 45 42.4199" width="45">
            <path d={svgPaths.p362e3500} fill="url(#tc_footer_g)" />
            <defs><linearGradient gradientUnits="userSpaceOnUse" id="tc_footer_g" x1="22.4052" x2="45" y1="16.5206" y2="16.5206">
              <stop stopColor="#FC4D22" /><stop offset="0.16" stopColor="#FC5223" /><stop offset="0.36" stopColor="#FC6026" />
              <stop offset="0.58" stopColor="#FD792C" /><stop offset="0.8" stopColor="#FE9A35" /><stop offset="1" stopColor="#FFBE3E" />
            </linearGradient></defs>
          </svg>
        </div>
        <p className="absolute font-['Mont:Regular',sans-serif] text-[#1c1919] text-[12px] leading-[20px] whitespace-nowrap" style={{ left: 108, top: 33 }}>© 2026 Clarus. All rights reserved.</p>
        <div className="absolute flex gap-[46px] items-center" style={{ left: 876, top: 31 }}>
          {["Privacy Policy", "Terms of Use", "Contact Support"].map((label) => (
            <p key={label} className="font-['Be_Vietnam_Pro:Medium',sans-serif] text-[#1c1919] text-[14px] leading-[24px] whitespace-nowrap">{label}</p>
          ))}
        </div>
        <div className="absolute h-0 left-0 top-0 w-[1440px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block" fill="none" height="1" width="1440" viewBox="0 0 1440 1">
              <line stroke="#DDE3E8" x2="1440" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
