import { useState } from "react";
import svgPaths from "./imports/FinalScreen/svg-9m9otjl07k";
import imgBg from "./imports/FinalScreen/b1910e2f1d722830fba3abdae39207eb2a78d09b.png";
import { imgCheckCircle } from "./imports/FinalScreen/svg-92r8s";

type Props = { onClose: () => void };

/* ── Header ──────────────────────────────────────────────────────────────── */

function AppHeader() {
  return (
    <div style={{ flexShrink: 0, height: 80, position: "relative", background: "white", boxShadow: "0px 1.517px 6.069px rgba(28,25,25,0.05)", zIndex: 50 }}>
      {/* Gradient top bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 12, backgroundImage: "linear-gradient(90deg,#FC4D22 0%,#FC5223 16%,#FC6026 36%,#FD792C 58%,#FE9A35 80%,#FFBE3E 100%)" }} />
      {/* Bottom rule */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "#DDE3E8" }} />
      {/* Clarus logo – 140×42px clipped container */}
      <div style={{ position: "absolute", left: 40, top: 25, width: 140, height: 42, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0.96%", right: "72.86%", bottom: 0, left: 0 }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 71.6474 79.2327">
            <path d={svgPaths.p3cee3e00} fill="url(#fs_hg1)" />
            <defs>
              <linearGradient id="fs_hg1" gradientUnits="userSpaceOnUse" x1="4.00305" x2="46.763" y1="30.8916" y2="74.7432">
                <stop offset="0.223634" stopColor="#F57418" />
                <stop offset="0.893493" stopColor="#FBA43B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div style={{ position: "absolute", top: 0, right: "68.26%", bottom: "22.08%", left: "15.8%" }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 42.0685 62.3333">
            <path d={svgPaths.p5960b00} fill="url(#fs_hg2)" />
            <defs>
              <linearGradient id="fs_hg2" gradientUnits="userSpaceOnUse" x1="62.9128" x2="67.9258" y1="36.3899" y2="23.1187">
                <stop offset="0.0892416" stopColor="#FBA43B" />
                <stop offset="1" stopColor="#F57418" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div style={{ position: "absolute", top: "28.81%", right: "48.83%", bottom: "28.34%", left: "38.74%" }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 32.812 34.28">
            <path d={svgPaths.p3ac40380} fill="#F57418" />
          </svg>
        </div>
        <div style={{ position: "absolute", top: "27.56%", right: "44.45%", bottom: "29%", left: "54.33%" }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 3.229 34.7548">
            <path d="M0 0H3.229V34.7548H0V0Z" fill="#F57418" />
          </svg>
        </div>
        <div style={{ position: "absolute", top: "38.31%", right: "30.96%", bottom: "28.35%", left: "58.86%" }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 26.873 26.6687">
            <path d={svgPaths.p1f35fa80} fill="#F57418" />
          </svg>
        </div>
        <div style={{ position: "absolute", top: "38.83%", right: "21.69%", bottom: "29%", left: "73.16%" }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 13.579 25.7337">
            <path d={svgPaths.p3a02d900} fill="#F57418" />
          </svg>
        </div>
        <div style={{ position: "absolute", top: "38.94%", right: "10.74%", bottom: "28.35%", left: "80.79%" }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 22.359 26.1647">
            <path d={svgPaths.p3d5f9480} fill="#F57418" />
          </svg>
        </div>
        <div style={{ position: "absolute", top: "38.3%", right: "0.02%", bottom: "28.34%", left: "92.37%" }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 20.095 26.6833">
            <path d={svgPaths.p31b58f00} fill="#F57418" />
          </svg>
        </div>
      </div>
      {/* Need Help? */}
      <div style={{ position: "absolute", left: 1295, top: 30, display: "flex", gap: 4, alignItems: "center", height: 32 }}>
        <div style={{ position: "relative", width: 20, height: 20, flexShrink: 0 }}>
          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" viewBox="0 0 20 20">
            <mask id="fs_hmask" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" as const }} width="20" height="20" x="0" y="0">
              <rect fill="#D9D9D9" width="20" height="20" />
            </mask>
            <g mask="url(#fs_hmask)">
              <path d={svgPaths.p28dd2c00} fill="#1C1919" />
            </g>
          </svg>
        </div>
        <span style={{ fontFamily: "'Mont:SemiBold',sans-serif", fontSize: 14, lineHeight: "20px", color: "#1c1919" }}>Need Help?</span>
      </div>
    </div>
  );
}

/* ── Footer ──────────────────────────────────────────────────────────────── */

function AppFooter() {
  return (
    <div style={{ flexShrink: 0, height: 72, position: "relative", background: "white", boxShadow: "4px 10px 4px rgba(0,0,0,0.25)" }}>
      {/* Top rule */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "#DDE3E8" }} />
      {/* Paw mark */}
      <div style={{ position: "absolute", top: "25.58%", left: "2.78%", right: "94.1%", bottom: "25.09%" }}>
        <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 44.999 42.4199">
          <path d={svgPaths.pb12bf00} fill="url(#fs_fg)" />
          <defs>
            <linearGradient id="fs_fg" gradientUnits="userSpaceOnUse" x1="22.4047" x2="44.999" y1="16.5206" y2="16.5206">
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
      {/* Copyright */}
      <p style={{ position: "absolute", left: 108, top: 26, margin: 0, fontFamily: "'Mont:Regular',sans-serif", fontSize: 12, lineHeight: "20px", color: "#1c1919", whiteSpace: "nowrap" }}>© 2026 Clarus. All rights reserved.</p>
      {/* Nav links */}
      <div style={{ position: "absolute", left: 876, top: 24, display: "flex", gap: 46, alignItems: "center" }}>
        {(["Privacy Policy", "Terms of Use", "Contact Support"] as const).map((label, i) => (
          <div key={label} style={{ position: "relative", display: "flex", alignItems: "center", height: 24 }}>
            {i < 2 && <div aria-hidden style={{ position: "absolute", inset: 0, borderRight: "1px solid black", pointerEvents: "none" }} />}
            <span style={{ fontFamily: "'Be Vietnam Pro:Medium',sans-serif", fontSize: 14, lineHeight: "24px", color: "#1c1919", whiteSpace: "nowrap", paddingRight: i < 2 ? 8 : 0 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main content components ─────────────────────────────────────────────── */

function PaymentPolicyRow() {
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "stretch", borderRadius: 10, width: 672 }}>
      <div aria-hidden style={{ position: "absolute", inset: -1, border: "1px solid #DDE3E8", borderRadius: 11, pointerEvents: "none" }} />
      <div style={{ background: "white", display: "flex", flexDirection: "column", gap: 4, flex: "0 0 331px", alignItems: "flex-start", justifyContent: "center", padding: "12px 13px 12px 24px", position: "relative", borderRadius: "10px 0 0 10px" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, borderRight: "1px solid #f1f4f7", borderRadius: "10px 0 0 10px", pointerEvents: "none" }} />
        <span style={{ fontFamily: "'Inter:Regular',sans-serif", fontSize: 14, lineHeight: "16px", color: "#6e7a87" }}>Gap payment</span>
        <span style={{ fontFamily: "'Inter:Bold',sans-serif", fontWeight: 700, fontSize: 20, lineHeight: "28px", color: "#1c1919" }}>£250</span>
      </div>
      <div style={{ background: "white", display: "flex", flexDirection: "column", gap: 4, flex: 1, alignItems: "flex-end", justifyContent: "center", padding: "12px 24px 12px 12px", borderRadius: "0 10px 10px 0" }}>
        <span style={{ fontFamily: "'Inter:Regular',sans-serif", fontSize: 14, lineHeight: "16px", color: "#6e7a87" }}>Policy Number</span>
        <span style={{ fontFamily: "'Inter:Bold',sans-serif", fontWeight: 700, fontSize: 20, lineHeight: "28px", color: "#1c1919" }}>PB-2024-847291</span>
      </div>
    </div>
  );
}

function DetailsCard({ title, nameLabel, nameValue, detailLabel, detailValue }: {
  title: string;
  nameLabel: string; nameValue: string;
  detailLabel: string; detailValue: string;
}) {
  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", borderRadius: 10, width: 672 }}>
      <div aria-hidden style={{ position: "absolute", inset: -1, border: "1px solid #DDE3E8", borderRadius: 11, pointerEvents: "none" }} />
      <div style={{ background: "#eff6ff", height: 48, borderRadius: "10px 10px 0 0", position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, borderBottom: "1px solid #f1f4f7", borderRadius: "10px 10px 0 0", pointerEvents: "none" }} />
        <span style={{ fontFamily: "'Be Vietnam Pro:Bold',sans-serif", fontSize: 14, lineHeight: "normal", color: "#1c1919", letterSpacing: "0.14px" }}>{title}</span>
        <div style={{ height: 36, width: 84, borderRadius: 8 }} />
      </div>
      <div style={{ background: "white", height: 115, position: "relative", borderRadius: "0 0 10px 10px" }}>
        <div style={{ position: "absolute", left: 24, top: 16, paddingTop: 8, paddingBottom: 8, display: "flex", flexDirection: "column", justifyContent: "space-between", height: 70 }}>
          <span style={{ fontFamily: "'Be Vietnam Pro:Regular',sans-serif", fontSize: 16, lineHeight: "24px", color: "#6e7a87" }}>{nameLabel}</span>
          <span style={{ fontFamily: "'Be Vietnam Pro:SemiBold',sans-serif", fontWeight: 600, fontSize: 16, lineHeight: "24px", color: "#1c1919" }}>{nameValue}</span>
        </div>
        <div style={{ position: "absolute", left: 384, top: 16, right: 24, paddingTop: 8, paddingBottom: 8, display: "flex", flexDirection: "column", justifyContent: "space-between", height: 80 }}>
          <span style={{ fontFamily: "'Be Vietnam Pro:Regular',sans-serif", fontSize: 16, lineHeight: "24px", color: "#6e7a87" }}>{detailLabel}</span>
          <span style={{ fontFamily: "'Be Vietnam Pro:SemiBold',sans-serif", fontWeight: 600, fontSize: 16, lineHeight: "24px", color: "#1c1919", display: "block", width: 249 }}>{detailValue}</span>
        </div>
      </div>
    </div>
  );
}

function ClaimStatusRow() {
  return (
    <div style={{ position: "relative", background: "white", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderRadius: 10, width: 672 }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, border: "1px solid #DDE3E8", borderRadius: 10, pointerEvents: "none" }} />
      <span style={{ fontFamily: "'Be Vietnam Pro:Regular',sans-serif", fontSize: 16, lineHeight: "24px", color: "#6e7a87" }}>Claim Status</span>
      <div style={{ background: "#f0f9ee", height: 34, borderRadius: 57, border: "1px solid #3bb561", display: "flex", alignItems: "center", padding: "0 12px", gap: 8 }}>
        <div style={{ position: "relative", width: 20, height: 20, flexShrink: 0 }}>
          <div style={{
            position: "absolute", top: "8.33%", right: "8.33%", bottom: "8.33%", left: "8.33%",
            WebkitMaskImage: `url("${imgCheckCircle}")`, maskImage: `url("${imgCheckCircle}")`,
            WebkitMaskSize: "24px 24px", maskSize: "24px 24px",
            WebkitMaskPosition: "-2px -2px", maskPosition: "-2px -2px",
            WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
          }}>
            <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
              <path d={svgPaths.p3e492f00} fill="#28A047" />
            </svg>
          </div>
        </div>
        <span style={{ fontFamily: "'Be Vietnam Pro:Medium',sans-serif", fontSize: 14, lineHeight: "24px", color: "#252e38" }}>Approved</span>
      </div>
    </div>
  );
}

/* ── Screen ──────────────────────────────────────────────────────────────── */

export default function FinalScreen({ onClose }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 1440, height: 907, overflow: "hidden", background: "#f8fafb" }}>
      <AppHeader />

      <main style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", overflow: "hidden" }}>
        {/* Background watermark */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.2, overflow: "hidden", pointerEvents: "none" }}>
          <img alt="" src={imgBg} style={{ position: "absolute", top: 0, left: "-13.6%", width: "127.19%", height: "99.75%", maxWidth: "none" }} />
        </div>

        {/* Content column */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 37 }}>
          {/* Heading */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ margin: 0, fontFamily: "'Be Vietnam Pro:Bold',sans-serif", fontWeight: 700, fontSize: 20, lineHeight: "28px", color: "#1c1919" }}>Claim Accepted!</p>
            <p style={{ margin: 0, fontFamily: "'Be Vietnam Pro:Regular',sans-serif", fontSize: 14, lineHeight: "20px", color: "#3e4b57" }}>One Step Insurance has received and accepted your claim for processing.</p>
          </div>

          {/* Reference badge */}
          <div style={{ marginTop: 12, background: "#f0f9ee", padding: "8px 16px", borderRadius: 9999, display: "flex", alignItems: "center", gap: 8 }}>
            <svg fill="none" width="14" height="14" viewBox="0 0 14 14">
              <path d="M2.33398 5.25H11.6673" stroke="#135427" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              <path d="M2.33398 8.75H11.6673" stroke="#135427" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              <path d="M5.83268 1.75L4.66602 12.25" stroke="#135427" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              <path d="M9.33268 1.75L8.16602 12.25" stroke="#135427" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </svg>
            <span style={{ fontFamily: "'Inter:Semi Bold',sans-serif", fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "#135427" }}>Reference: CLM-2024-0892</span>
          </div>

          {/* Payment / Policy row */}
          <div style={{ marginTop: 12 }}>
            <PaymentPolicyRow />
          </div>

          {/* Customer Details */}
          <div style={{ marginTop: 8 }}>
            <DetailsCard
              title="Customer Details"
              nameLabel="Customer's name" nameValue="Alex Morgan"
              detailLabel="Address" detailValue="5 Cherry Tree Avenue, Balerno, EH14 5AN"
            />
          </div>

          {/* Pet Details */}
          <div style={{ marginTop: 8 }}>
            <DetailsCard
              title="Pet Details"
              nameLabel="Pet's name" nameValue="Milo"
              detailLabel="Pet type" detailValue="Cat"
            />
          </div>

          {/* Claim Status */}
          <div style={{ marginTop: 24 }}>
            <ClaimStatusRow />
          </div>

          {/* Close button */}
          <div style={{ marginTop: 12 }}>
            <button
              type="button"
              onClick={onClose}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                width: 247,
                height: 44,
                borderRadius: 6,
                border: hovered ? "none" : "1px solid #fc4d22",
                background: hovered ? "#fc4d22" : "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontFamily: "'Be Vietnam Pro:Medium',sans-serif", fontSize: 14, lineHeight: "24px", color: hovered ? "#fff" : "#fc4d22" }}>Close</span>
            </button>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
