function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#171717] text-[20px] top-0 tracking-[-0.9492px]">What the Day 1 – Day 5 data signaled:</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[11.859px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#8e51ff] text-[20px] top-0 tracking-[-0.4492px]">–</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[58.5px] relative shrink-0 w-[839.141px]" data-name="Text">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#404040] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[794px]">D1 activation (completing a meaningful action within 24 hours) was significantly lower than industry benchmarks</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[11.859px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#8e51ff] text-[20px] top-0 tracking-[-0.4492px]">–</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[29.25px] relative shrink-0 w-[764.383px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#404040] text-[18px] top-[0.5px] tracking-[-0.4395px]">{`Support requests spiked with variations of "What should I do first?" and "How do I get started?"`}</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[11.859px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#8e51ff] text-[20px] top-0 tracking-[-0.4492px]">–</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-px relative shrink-0" data-name="Text">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic relative shrink-0 text-[#404040] text-[18px] tracking-[-0.4395px]">{`The number of un-installs were also very high `}</p>
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
    <div className="h-[28px] relative shrink-0 w-[11.859px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#8e51ff] text-[20px] top-0 tracking-[-0.4492px]">–</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[29.25px] relative shrink-0 w-[599.82px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#404040] text-[18px] top-[0.5px] tracking-[-0.4395px]">Users who did add a policy early were 3x more likely to return within 7 days</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[11.859px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#8e51ff] text-[20px] top-0 tracking-[-0.4492px]">–</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[58.5px] relative shrink-0 w-[839.141px]" data-name="Text">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#404040] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[811px]">The existing homepage treated all users the same, regardless of whether they were new, returning, or had incomplete tasks</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text8 />
      <Text9 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[315.5px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[50px] px-[50px] relative rounded-[16px] size-full" data-name="Container" style={{ backgroundImage: "linear-gradient(154.198deg, rgb(250, 250, 250) 0%, rgb(245, 245, 245) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Heading />
      <List />
    </div>
  );
}