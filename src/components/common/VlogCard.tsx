import { Button } from "../ui/button";
import logo2 from "../../assets/logo2.png";
import type { IVlogType } from "@/types/vlogType";
import { Link } from "react-router-dom";

const VlogCard = (props: IVlogType) => {
  const { vlog } = props;
  return (
    <div
      className=" bg-muted text-card-foreground border border-border 
                 w-full max-w-sm sm:max-w-md lg:max-w-lg 
                 h-[400px] rounded-xl shadow-md backdrop-blur-md 
                 flex flex-col overflow-hidden transition-all duration-300 
                 hover:shadow-lg hover:scale-[1.02]"
    >
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={vlog?.images ? vlog.images[0] : logo2}
          alt={vlog.title}
          className="w-full h-full object-cover rounded-t-xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg text-muted-foreground font-semibold line-clamp-1">{vlog.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3 flex-grow">
          {vlog.desc}
        </p>

        {/* Buttons */}
        <div className="w-full flex items-center justify-between mt-auto gap-2">
          <Button className="flex-1">Contact</Button>
          <Link to={`/vlogs/${vlog.id}`} className="flex-1">
            <Button className="w-full">View</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VlogCard;
