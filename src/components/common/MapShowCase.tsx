import React from "react";

const MapShowCase = () => {
  const extractCoordinates = (url: string) => {
    const match = url.match(/@([0-9.-]+),([0-9.-]+)/);
    return match ? `${match[1]},${match[2]}` : "";
  };

  const coordinates = extractCoordinates("");

  return (
    <div>
      {coordinates && (
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
      )}
    </div>
  );
};

export default MapShowCase;
