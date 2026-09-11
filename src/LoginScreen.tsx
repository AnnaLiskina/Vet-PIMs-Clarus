import { useState } from "react";
import svgPaths from "./imports/LoginScreen/svg-bvkklva5de";
import { imgChevronDown } from "./imports/LoginScreen/svg-y9rhe";

const CLINICS = [
  "Willow Creek Veterinary Clinic",
  "Green Valley Veterinary Clinic",
  "Riverside Animal Hospital",
];

type Props = {
  onSignIn: () => void;
};

export default function LoginScreen({ onSignIn }: Props) {
  const [clinic, setClinic] = useState(CLINICS[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    if (email.trim() && password.trim()) {
      onSignIn();
    }
  }

  return (
    <div className="bg-[#fffcf5] relative size-full" data-name="Login screen">
      {/* LoginScreen1 */}
      <div className="absolute bg-[#fffcf5] content-stretch flex h-[907px] items-start left-0 overflow-clip right-0 top-0" data-name="LoginScreen">
        {/* Container */}
        <div className="flex-[827_0_0] h-full min-w-px relative" data-name="Container">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[32px] relative size-full">

              {/* Form content */}
              <div className="h-[329px] relative shrink-0 w-[420px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  {/* Heading */}
                  <div className="relative shrink-0 w-full" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                      <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1c1919] text-[24px] whitespace-nowrap">Welcome back</p>
                    </div>
                  </div>
                  {/* Paragraph */}
                  <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
                      <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#252e38] text-[14px] whitespace-nowrap">Sign in to continue</p>
                    </div>
                  </div>
                  {/* Fields */}
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[32px] relative size-full">

                      {/* Clinic selector */}
                      <div className="h-[44px] relative shrink-0 w-[420px]" data-name="Input container / M">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="bg-white h-[44px] relative rounded-[6px] shrink-0 w-full cursor-pointer" data-name="input" onClick={() => setDropdownOpen(o => !o)}>
                            <div aria-hidden className="absolute border border-[#dde3e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[9px] relative size-full">
                                {/* domain icon */}
                                <div className="relative shrink-0 size-[16px]" data-name="domain">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                                    <g id="domain">
                                      <mask height="16" id="mask0_login" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                        <rect fill="#D9D9D9" height="16" id="Bounding box" width="16" />
                                      </mask>
                                      <g mask="url(#mask0_login)">
                                        <path d={svgPaths.p5422880} fill="#1C1B1F" id="domain_2" />
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                                {/* selected clinic + chevron */}
                                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative">
                                  <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c1919] text-[14px] whitespace-nowrap">{clinic}</p>
                                  <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                                    <div className="-rotate-90 flex-none">
                                      <div className="relative size-[16px]">
                                        <div className="absolute inset-[12.51%_29.17%_12.53%_31.7%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.002px_-7px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgChevronDown}")` }}>
                                          <svg className="absolute block inset-0 size-full" fill="none" height="11.9942" preserveAspectRatio="none" viewBox="0 0 6.2615 11.9942" width="6.2615">
                                            <path d={svgPaths.p3cca8300} fill="#1C1919" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Dropdown list */}
                            {dropdownOpen && (
                              <div className="absolute left-0 right-0 top-[46px] bg-white border border-[#dde3e8] border-solid rounded-[6px] z-10 shadow-sm">
                                {CLINICS.map(c => (
                                  <div
                                    key={c}
                                    className={`px-[16px] py-[10px] text-[14px] font-['Be_Vietnam_Pro:Regular',sans-serif] text-[#1c1919] cursor-pointer hover:bg-[#f5f5f5] ${c === clinic ? "font-semibold" : ""}`}
                                    onClick={e => { e.stopPropagation(); setClinic(c); setDropdownOpen(false); }}
                                  >
                                    {c}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Email field */}
                      <div className="relative shrink-0 w-[420px]" data-name="Input container / L">
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
                          <div className="h-[18px] relative shrink-0 w-[97px]">
                            <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1c1919] text-[14px] top-0 whitespace-nowrap">Email Address</p>
                          </div>
                          <div className="bg-white h-[44px] relative rounded-[6px] shrink-0 w-full">
                            <div aria-hidden className="absolute border border-[#dde3e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex items-center px-[16px] py-[9px] relative size-full">
                                <input
                                  type="email"
                                  value={email}
                                  onChange={e => setEmail(e.target.value)}
                                  placeholder="emily.rodriguez@email.com"
                                  className="w-full bg-transparent outline-none font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] text-[#1c1919] text-[14px] placeholder:text-[#8a95a1]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Password field */}
                      <div className="h-[82px] relative shrink-0 w-[420px]" data-name="Input container / L">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 top-0 w-[420px]">
                            <div className="h-[18px] relative shrink-0 w-[97px]">
                              <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1c1919] text-[14px] top-0 whitespace-nowrap">Password</p>
                            </div>
                            <div className="content-stretch flex flex-col gap-[6px] h-[62px] items-start relative shrink-0 w-full">
                              <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[6px] w-full">
                                <div aria-hidden className="absolute border border-[#dde3e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                                    <input
                                      type="password"
                                      value={password}
                                      onChange={e => setPassword(e.target.value)}
                                      placeholder="Enter your password"
                                      className="w-full bg-transparent outline-none font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] text-[#1c1919] text-[14px] placeholder:text-[#8a95a1]"
                                    />
                                  </div>
                                </div>
                              </div>
                              <p
                                className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#556270] text-[12px] w-full cursor-pointer"
                                onClick={() => {/* forgot password — wired in future sprint */}}
                              >
                                Forgot password?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sign in button */}
                      <div
                        className="bg-[#fc4d22] h-[44px] relative rounded-[6px] shrink-0 w-[420px] cursor-pointer hover:bg-[#e5431e]"
                        data-name="Button"
                        onClick={handleSignIn}
                      >
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
                            <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Sign in</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Group — bottom-right arcs */}
              <div className="absolute inset-[60.97%_-5.85%_-15.76%_69.72%]" data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height="496.955" preserveAspectRatio="none" viewBox="0 0 520.25 496.955" width="520.25">
                  <g id="Group">
                    <path d={svgPaths.p35d93640} fill="url(#paint0_linear_0_50)" fillOpacity="0.15" />
                    <path d={svgPaths.p3a187100} fill="url(#paint1_linear_0_50)" fillOpacity="0.15" />
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_50" x1="0" x2="444.95" y1="250.804" y2="250.804">
                      <stop stopColor="#FC4D22" /><stop offset="0.16" stopColor="#FC5223" /><stop offset="0.36" stopColor="#FC6026" />
                      <stop offset="0.58" stopColor="#FD792C" /><stop offset="0.8" stopColor="#FE9A35" /><stop offset="1" stopColor="#FFBE3E" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_50" x1="259.029" x2="520.25" y1="193.541" y2="193.541">
                      <stop stopColor="#FC4D22" /><stop offset="0.16" stopColor="#FC5223" /><stop offset="0.36" stopColor="#FC6026" />
                      <stop offset="0.58" stopColor="#FD792C" /><stop offset="0.8" stopColor="#FE9A35" /><stop offset="1" stopColor="#FFBE3E" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Decorative Group — top-left arcs */}
              <div className="absolute inset-[-17.64%_73.96%_65.4%_-8.4%]" data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height="473.791" preserveAspectRatio="none" viewBox="0 0 496 473.791" width="496">
                  <g id="Group">
                    <path d={svgPaths.p2a174480} fill="url(#paint0_linear_0_45)" fillOpacity="0.05" />
                    <path d={svgPaths.pb17b180} fill="url(#paint1_linear_0_45)" fillOpacity="0.05" />
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_45" x1="0" x2="424.21" y1="239.114" y2="239.114">
                      <stop stopColor="#FC4D22" /><stop offset="0.16" stopColor="#FC5223" /><stop offset="0.36" stopColor="#FC6026" />
                      <stop offset="0.58" stopColor="#FD792C" /><stop offset="0.8" stopColor="#FE9A35" /><stop offset="1" stopColor="#FFBE3E" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_45" x1="246.955" x2="496" y1="184.52" y2="184.52">
                      <stop stopColor="#FC4D22" /><stop offset="0.16" stopColor="#FC5223" /><stop offset="0.36" stopColor="#FC6026" />
                      <stop offset="0.58" stopColor="#FD792C" /><stop offset="0.8" stopColor="#FE9A35" /><stop offset="1" stopColor="#FFBE3E" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Logo / Clarus */}
              <div className="absolute h-[71px] left-[60px] top-[60px] w-[206px]" data-name="Logo / Clarus">
                <svg className="absolute block inset-0 size-full" fill="none" height="71" preserveAspectRatio="none" viewBox="0 0 206 71" width="206">
                  <g id="Logo / Clarus">
                    <path d={svgPaths.p1fe2dd80} fill="url(#paint0_linear_0_35)" />
                    <path d={svgPaths.p36451600} fill="#F57418" />
                    <path d={svgPaths.p46bfb00} fill="#F57418" />
                    <path d={svgPaths.p24403f80} fill="#F57418" />
                    <path d={svgPaths.p3a9b7c0} fill="#F57418" />
                    <path d={svgPaths.p2bc31380} fill="#F57418" />
                    <path d={svgPaths.pb8a8500} fill="#F57418" />
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_35" x1="65.0688" x2="68.129" y1="33.3462" y2="25.4868">
                      <stop offset="0.0892416" stopColor="#FBA43B" />
                      <stop offset="1" stopColor="#F57418" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
