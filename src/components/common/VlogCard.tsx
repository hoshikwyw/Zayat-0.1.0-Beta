import { Button } from "../ui/button";

const VlogCard = ({ vlog }: any) => {
  // Extract coordinates from the location URL
  const extractCoordinates = (url: string) => {
    const match = url.match(/@([0-9.-]+),([0-9.-]+)/);
    return match ? `${match[1]},${match[2]}` : "";
  };

  const coordinates = extractCoordinates(vlog.location);

  return (
    <div className="border w-80 h-[500px] rounded-md shadow-md backdrop-blur-md flex flex-col">
      <div className="w-full h-48 rounded-t-md">
        <img
          src={vlog.images[0]}
          alt={vlog.title}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="p-3 flex flex-col gap-3 flex-grow text-black">
        <p className="text-sm">{vlog.desc}</p>
        {coordinates && (
          <div className="w-full h-32">
            <iframe
              src={`https://www.google.com/maps?q=${coordinates}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        )}
        <div className="w-full flex items-center justify-between mt-auto">
          <Button>Contact</Button>
          <Button>Go</Button>
        </div>
      </div>
    </div>
  );
};

export default VlogCard;
