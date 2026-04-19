import svgPaths from "./svg-94r51mopnr";
import svgPathsNykaa from "./svg-ycueha9h7x";
import imgPharmEasyLogo1 from "figma:asset/021d4f83385dfc0ecaa3302fbc4a4c40b087f6f2.png";
import imgSection11080X6531 from "figma:asset/356618f488f2d70e9ccd6966a98a0611258fcb9b.png";
import imgImage3 from "figma:asset/790c3412d750525d2542ac612b9248cc87c75068.png";
import imgOracleLogoSvg1 from "figma:asset/ef83257247b961c8fb79327be95c2180652a96f1.png";

// CoverSure Logo
function CoverSureLogo() {
  return (
    <div className="h-[72px] relative shrink-0 w-[58px] scale-[0.7]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 72">
        <g>
          <path d={svgPaths.p5be1600} fill="#1D55FE" />
          <path d={svgPaths.p2a93c180} fill="#1D55FE" />
          <path d={svgPaths.p2df69880} fill="#1D55FE" />
          <path d={svgPaths.p37812100} fill="#144AF3" fillOpacity="0.717647" />
        </g>
      </svg>
    </div>
  );
}

// Fynd Logo
function FyndLogo() {
  return (
    <div className="h-[64.111px] relative shrink-0 w-[66.711px] scale-[0.7]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.7107 64.1109">
        <g>
          <path d={svgPaths.p3d245200} fill="black" />
          <path d={svgPaths.p3a5780f0} fill="white" />
        </g>
      </svg>
    </div>
  );
}

// Nykaa Logo
function NykaaLogo() {
  return (
    <div className="relative shrink-0 size-[80px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g>
          <path d={svgPathsNykaa.p2eaeeb00} fill="#FC2779" fillOpacity="0.12" />
        </g>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="block size-full scale-[0.7]" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <g>
            <path d={svgPathsNykaa.p3dd6ce00} fill="#FC2779" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Zycus Logo
function ZycusLogo() {
  return (
    <div className="h-[42px] relative shrink-0 w-[58px] scale-[0.7]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 42">
        <g>
          <path d={svgPaths.p29b7a340} fill="#156BA8" />
          <path d={svgPaths.p47e3000} fill="#21BBD3" />
          <path d={svgPaths.p3def5380} fill="#156BA8" />
          <path d={svgPaths.p9450980} fill="#10408A" />
          <path d={svgPaths.p2aa46700} fill="#1894C3" />
          <path d={svgPaths.p31516b00} fill="#23D5C1" />
          <path d={svgPaths.p326c8000} fill="#21BBD3" />
          <path d={svgPaths.p1eac1400} fill="#1894C3" />
          <path d={svgPaths.p21b14df0} fill="#10408A" />
          <path d={svgPaths.p30fe7600} fill="#156BA8" />
        </g>
      </svg>
    </div>
  );
}

// Reusable Card Component
function ExperienceCard({ 
  company, 
  position, 
  period, 
  description, 
  logo, 
  bgColor, 
  isLast = false 
}: {
  company: string;
  position: string;
  period: string;
  description: string;
  logo: React.ReactNode;
  bgColor?: string;
  isLast?: boolean;
}) {
  return (
    <div className={`bg-white h-[366.75px] relative rounded-[14px] ${isLast ? 'flex-[1_0_0] min-h-px min-w-px' : 'shrink-0'} w-[380px]`}>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        {/* Logo Container */}
        <div className="absolute content-stretch flex items-center justify-center left-[33px] top-[33px] w-[314px] h-[80px]">
          <div 
            className="relative rounded-[16px] shrink-0 size-[80px] flex items-center justify-center" 
            style={{ backgroundColor: bgColor || 'transparent' }}
          >
            {logo}
          </div>
        </div>
        
        {/* Company Name */}
        <div className="absolute h-[30px] left-[33px] top-[137px] w-[314px]">
          <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[30px] left-1/2 not-italic text-[#1a1a1a] text-[24px] text-center top-0 tracking-[0.0703px]">{company}</p>
        </div>
        
        {/* Position */}
        <div className="absolute h-[20px] left-[33px] top-[172px] w-[314px]">
          <p className="-translate-x-1/2 absolute font-['Inter:Semibold',sans-serif] font-semibold leading-[20px] left-1/2 not-italic text-[#404040] text-[13px] text-center top-0 tracking-[-0.05px]">{position}</p>
        </div>
        
        {/* Period */}
        <div className="absolute h-[21px] left-[33px] top-[198px] w-[314px]">
          <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-1/2 not-italic text-[#737373] text-[14px] text-center top-0 tracking-[-0.1504px] whitespace-nowrap">{period}</p>
        </div>
        
        {/* Description */}
        <div className="absolute h-[113.75px] left-[33px] top-[240px] w-[314px]">
          <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-1/2 not-italic text-[#525252] text-[14px] text-center top-px tracking-[-0.1504px] w-[297px] whitespace-pre-wrap">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative size-full">
      <ExperienceCard 
        company="CoverSure"
        position="Lead Product Designer"
        period="JAN 2025 — Present"
        description="Redefining how users understand and act on insurance by transforming fragmented policies into a clear, decision-ready experience that drives engagement and trust."
        logo={<CoverSureLogo />}
        bgColor="rgba(29,85,254,0.16)"
      />
      <ExperienceCard 
        company="Fynd"
        position="Product Design Manager"
        period="FEB 2024 — OCT 2024"
        description="Designed AI-powered analytical platforms that turned complex data into intuitive, insight-driven workflows supporting faster, confident decisions."
        logo={<FyndLogo />}
        bgColor="rgba(26,26,26,0.1)"
      />
      <ExperienceCard 
        company="Nykaa"
        position="Lead Product Designer"
        period="MAR 2021 — JUN 2023"
        description="Shaped large-scale B2B commerce systems, designing high-frequency operational journeys that improved retailer efficiency and business performance."
        logo={<NykaaLogo />}
      />
      <ExperienceCard 
        company="PharmEasy"
        position="UX Designer 2"
        period="APR 2019 — FEB 2021"
        description="Reimagined prescription and diagnostics journeys to reduce friction, strengthen user confidence, and improve task completion in high-stakes moments."
        logo={
          <div className="h-[60px] relative shrink-0 w-[62px] scale-[0.7]">
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[485.57%]" src={imgPharmEasyLogo1} />
            </div>
          </div>
        }
        bgColor="rgba(14,143,109,0.17)"
      />
      <ExperienceCard 
        company="IDfy"
        position="UI/UX Designer"
        period="MAR 2018 — MAR 2019"
        description="Designed compliant identity verification experiences that balanced security, usability, and seamless fintech integrations at scale."
        logo={
          <div className="h-[56px] relative shrink-0 w-[58px] scale-[0.7]">
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[161.92%]" src={imgSection11080X6531} />
            </div>
          </div>
        }
        bgColor="rgba(206,16,16,0.15)"
      />
      <ExperienceCard 
        company="Taglr"
        position="UI/UX Designer"
        period="JUN 2017 — MAR 2018"
        description="Built unified commerce experiences bridging online discovery and offline inventory, helping retailers operate more efficiently."
        logo={
          <div className="h-[56px] relative shrink-0 w-[59px] scale-[0.7]">
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[129.21%] left-[-82.7%] max-w-none top-[-15.17%] w-[270.27%]" src={imgImage3} />
            </div>
          </div>
        }
        bgColor="rgba(253,92,99,0.12)"
      />
      <ExperienceCard 
        company="Zycus"
        position="Asst Design Lead"
        period="JUL 2015 — MAY 2017"
        description="Improved enterprise procurement experiences by simplifying complex buyer-supplier workflows across multi-product SaaS systems."
        logo={<ZycusLogo />}
        bgColor="rgba(16,64,138,0.15)"
      />
      <ExperienceCard 
        company="Oracle"
        position="UX Designer (Contract)"
        period="JUL 2013 — JUL 2015"
        description="Transformed banker-facing loan origination workflows into structured, efficient systems improving accuracy and operational speed."
        logo={
          <div className="h-[36px] relative shrink-0 w-[58px] scale-[0.7]">
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[479.4%]" src={imgOracleLogoSvg1} />
            </div>
          </div>
        }
        bgColor="rgba(199,70,52,0.15)"
        isLast
      />
    </div>
  );
}