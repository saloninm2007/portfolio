function Heading() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Heading 2">
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-tight md:leading-[56px] not-italic relative shrink-0 text-[#171717] text-3xl md:text-[48px] tracking-[0.3516px] max-w-full md:w-[878px]">Understanding User Behaviour - D1 to D5 of Installation</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-relaxed md:leading-[32.5px] not-italic text-[#404040] text-base md:text-[20px] tracking-[-0.4492px]">New users opened the app and saw a dashboard multiple actions: portfolio, risk, share, know your policy, etc. Everything was visible, but nothing felt actionable. There was no clear starting point, no sense of progress, and no guidance on what mattered most at that moment.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-relaxed md:leading-[32.5px] not-italic text-[#404040] text-base md:text-[20px] tracking-[-0.4492px]">{`Returning users faced a similar issue. Whether they had added one policy or five, the homepage looked static. It didn't reflect where they were in their journey or suggest what to do next. This lack of contextual relevance made the app feel disconnected from their actual needs.`}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic text-[#171717] text-[20px] tracking-[-0.9492px]">What the Day 1 – Day 5 data signaled:</p>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-3" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic text-[#8e51ff] text-[20px] tracking-[-0.4492px]">–</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-1 relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic text-[#404040] text-[18px] tracking-[-0.4395px]">D1 activation (completing a meaningful action within 24 hours) was significantly lower than industry benchmarks</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-3" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic text-[#8e51ff] text-[20px] tracking-[-0.4492px]">–</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-1 relative shrink-0" data-name="Text">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic text-[#404040] text-[18px] tracking-[-0.4395px]">{`Support requests spiked with variations of "What should I do first?" and "How do I get started?"`}</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0 w-3" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic text-[#8e51ff] text-[20px] tracking-[-0.4492px]">–</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-px relative shrink-0" data-name="Text">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic relative text-[#404040] text-[18px] tracking-[-0.4395px] flex-1">{`The number of un-installs were also very high `}</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0 w-3" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic text-[#8e51ff] text-[20px] tracking-[-0.4492px]">–</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-1 relative shrink-0" data-name="Text">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic text-[#404040] text-[18px] tracking-[-0.4395px]">Users who did add a policy early were 3x more likely to return within 7 days</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0 w-3" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic text-[#8e51ff] text-[20px] tracking-[-0.4492px]">–</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-1 relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic text-[#404040] text-[18px] tracking-[-0.4395px]">The existing homepage treated all users the same, regardless of whether they were new, returning, or had incomplete tasks</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <Text8 />
      <Text9 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="min-h-[467.5px] relative rounded-[16px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(154.198deg, rgb(250, 250, 250) 0%, rgb(245, 245, 245) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-8 md:pt-[50px] px-4 md:px-[50px] relative size-full">
        <Heading1 />
        <List />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Heading />
      <Container />
      <Container1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame1 />
    </div>
  );
}