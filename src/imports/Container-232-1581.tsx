import svgPaths from "./svg-ycueha9h7x";

function Container2() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Container">
          <path d={svgPaths.p2eaeeb00} fill="var(--fill-0, #FC2779)" fillOpacity="0.12" />
          <path d={svgPaths.p3dd6ce00} fill="var(--fill-0, #FC2779)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-start justify-center left-[32px] top-[32px] w-[314px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[30px] left-[32px] top-[136px] w-[314px]" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[30px] left-[156.7px] not-italic text-[#1a1a1a] text-[24px] text-center top-0 tracking-[0.0703px]">Nykaa</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[21px] left-[32px] top-[174px] w-[314px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[157.72px] not-italic text-[#737373] text-[14px] text-center top-0 tracking-[-0.1504px]">March 2021 — June 2023</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[113.75px] left-[32px] top-[219px] w-[314px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[157.09px] not-italic text-[#525252] text-[14px] text-center top-px tracking-[-0.1504px] w-[304px] whitespace-pre-wrap">Shaped large-scale B2B commerce systems, designing high-frequency operational journeys that improved retailer efficiency and business performance.</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white border border-[#e5e5e5] border-solid relative rounded-[14px] size-full" data-name="Container">
      <Container1 />
      <Heading />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}