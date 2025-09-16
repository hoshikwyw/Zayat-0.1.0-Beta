import { Button } from "../ui/button";

const VlogCard = ({ vlog }: any) => {
  // Extract coordinates from the location URL
  // const extractCoordinates = (url: string) => {
  //   const match = url.match(/@([0-9.-]+),([0-9.-]+)/);
  //   return match ? `${match[1]},${match[2]}` : "";
  // };

  // const coordinates = extractCoordinates(vlog.location);

  return (
    <div className="bg-card text-card-foreground border border-border w-80 h-[500px] rounded-xl shadow-md 
                    backdrop-blur-md flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={vlog.images[0]}
          alt={vlog.title}
          className="w-full h-full object-cover rounded-t-xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 flex-grow">
        <h3 className="text-lg font-semibold">{vlog.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">{vlog.desc}</p>

        {/* Map */}
        {/* {coordinates && (
          <div className="w-full h-32 rounded-md overflow-hidden border border-border">
            <iframe
              src={`https://www.google.com/maps?q=${coordinates}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        )} */}

        {/* Buttons */}
        <div className="w-full flex items-center justify-between mt-auto gap-2">
          <Button
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground 
                       shadow-md px-4 py-2 rounded-md transition-all duration-300 
                       hover:opacity-90 hover:scale-105 active:scale-95"
          >
            Contact
          </Button>
          <Button
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground 
                       shadow-md px-4 py-2 rounded-md transition-all duration-300 
                       hover:opacity-90 hover:scale-105 active:scale-95"
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VlogCard;
