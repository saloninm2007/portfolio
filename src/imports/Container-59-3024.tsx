import imgImage909176 from "figma:asset/9d3a994c914b61d0d193d5c3f118b00513946e55.png";
import imgImage909179 from "figma:asset/a4279d6c655102352758e2fec4da9620228628bd.png";
import imgImage909180 from "figma:asset/4c1f2599975edc519bcfafd0e43b5b62b6e91cc0.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[17px] items-center left-[calc(50%-0.5px)] top-[43px] translate-x-[-50%]">
      <div className="h-[297px] relative shrink-0 w-[133px]" data-name="image 909176">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage909176} />
      </div>
      <div className="h-[297px] relative shrink-0 w-[134px]" data-name="image 909179">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage909179} />
      </div>
      <div className="h-[297px] relative shrink-0 w-[133px]" data-name="image 909180">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage909180} />
      </div>
    </div>
  );
}

function Text() {
  return <div className="absolute h-[24px] left-[262.66px] top-[166.31px] w-[116.188px]" data-name="Text" />;
}

export default function Container() {
  return (
    <div className="bg-[rgba(144,150,166,0.17)] overflow-clip relative rounded-[14px] size-full" data-name="Container">
      <Frame />
      <Text />
    </div>
  );
}