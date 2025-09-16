import { Button } from "../ui/button";
import logo2 from "../../assets/logo2.png";

const VlogCard = ({ vlog }: any) => {

  return (
    <div
      className="bg-card text-card-foreground border border-border w-80 h-[500px] rounded-xl shadow-md 
                    backdrop-blur-md flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
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
      <div className="p-4 flex flex-col gap-3 flex-grow">
        <h3 className="text-lg font-semibold">{vlog.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {vlog.desc}
        </p>

        {/* Buttons */}
        <div className="w-full flex items-center justify-between mt-auto gap-2">
          <Button>Contact</Button>
          <Button>View</Button>
        </div>
      </div>
    </div>
  );
};

export default VlogCard;
