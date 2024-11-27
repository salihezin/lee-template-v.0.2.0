import { Button } from "primereact/button";
import { Image } from "primereact/image";

const Partners = ({ src, href }) => {
  return (
    <div className="col-sm-6 col-md-3 wow fadeIn" style={{ visibility: "hidden", animationName: "none" }} >
      <Button className="link-image" href={href}>
        <Image src={src} alt="" width={126} height={68} />
      </Button>
    </div>
  );
}

export default Partners;
