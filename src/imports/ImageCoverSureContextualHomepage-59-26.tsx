import imgImage909170 from "figma:asset/2875a377e0e2c3dbd6124dc87f0373b6afb68c0d.png";
import imgImage909168 from "figma:asset/18cf82040c2cded6ee1a5171636d917590647f64.png";
import imgImage909169 from "figma:asset/3c1924a1cec44e110b82e649a2e5d20944b69fb7.png";
import imgImage909171 from "figma:asset/e53b7b7c289c818f3fad2a15b3cca5791c234741.png";
import imgImageCoverSureContextualHomepage from "figma:asset/f48f3eb2ac06a00e21ccd2f3d5f883b1e9864ccc.png";
import imgRectangle from "figma:asset/7dae5cd12d4eea734018c7be1cf37141cc377a04.png";

function Group1() {
  return (
    <div className="absolute contents left-[208px] top-[252px]">
      <div className="absolute h-[95px] left-[208px] top-[252px] w-[137px]" data-name="image 909170">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage909170} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[203px] top-[54px]">
      <div className="absolute h-[189px] left-[203px] top-[54px] w-[150px]" data-name="image 909168">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage909168} />
      </div>
      <div className="absolute h-[106px] left-[363px] top-[58px] w-[126px]" data-name="image 909169">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage909169} />
      </div>
      <div className="absolute h-[163px] left-[363px] top-[183px] w-[126px]" data-name="image 909171">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage909171} />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[203px] top-[54px]">
      <Group1 />
      <Group />
    </div>
  );
}

export default function ImageCoverSureContextualHomepage() {
  return (
    <div className="relative size-full" data-name="Image (CoverSure - Contextual Homepage)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#c4c4c4] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImageCoverSureContextualHomepage} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImageCoverSureContextualHomepage} />
      </div>
      <div className="absolute h-[362px] left-[32px] top-[18.5px] w-[153px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[198.22%] left-[-213.6%] max-w-none top-[-48.78%] w-[523.32%]" src={imgRectangle} />
        </div>
      </div>
      <Group2 />
    </div>
  );
}