const MapShowCase = ({ location }: { location: string }) => {
  return (
    <div>
      <div className=" w-fit h-fit rounded-md overflow-hidden border border-border">
        <div
          dangerouslySetInnerHTML={{
            __html: location,
          }}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default MapShowCase;
