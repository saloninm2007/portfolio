import imgImage909181 from "figma:asset/0b0fa89ebafb878794b659904cb6051a49860ef0.png";
import imgImage909184 from "figma:asset/e6043c76f9f6caa41451b301bc6cb0b7fb6da07f.png";
import imgImage909185 from "figma:asset/9af0fc68e22d3e52f954af570137186a263185ad.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[17px] items-center left-[19.75px] overflow-clip top-[42px]">
      <div className="h-[298px] relative rounded-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] shrink-0 w-[134px]" data-name="image 909181">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage909181} />
      </div>
      <div className="h-[298px] relative rounded-[12px] shadow-[0px_4px_2px_0px_rgba(0,0,0,0.12)] shrink-0 w-[134px]" data-name="image 909184">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage909184} />
      </div>
      <div className="h-[298px] relative rounded-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] shrink-0 w-[134px]" data-name="image 909185">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage909185} />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="overflow-clip relative rounded-[14px] size-full" data-name="Container" style={{ backgroundImage: "linear-gradient(143.13deg, rgb(237, 233, 254) 0%, rgb(206, 250, 254) 100%)" }}>
      <Frame />
    </div>
  );
}