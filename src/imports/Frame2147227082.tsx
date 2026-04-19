function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Inter:Black',sans-serif] font-black relative shrink-0 text-[#a5a5a5] text-[24px] uppercase w-full">What is CoverSure ?</p>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#262626] text-[24px] w-full">{`CoverSure is an insurance management app where users organize policies, track renewals, and access support. `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Inter:Black',sans-serif] font-black relative shrink-0 text-[#a5a5a5] text-[24px] uppercase w-full">Problem statement</p>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#262626] text-[24px] w-full">{`After launching, the team noticed that many users who installed the app never completed a core action like adding a policy or filing a claim. The homepage showed everything at once, but it wasn't clear where someone should start or what they were supposed to do. This unclear entry point created hesitation, and users either abandoned the app or reached out to support to ask what to do next.`}</p>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[48.75px] not-italic relative size-full tracking-[0.3955px]">
      <Frame />
      <Frame1 />
    </div>
  );
}