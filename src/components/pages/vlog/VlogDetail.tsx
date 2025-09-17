/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
// import logo2 from "../../../assets/logo2.png";
import { Button } from "@/components/ui/button";
import MapShowCase from "@/components/common/MapShowCase";

interface PropType {
  vlog: any;
  loading: boolean;
  error: any;
}

const VlogDetail = ({ vlog, loading, error }: PropType) => {
  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error || !vlog) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Vlog not found</h1>
        <p className="text-destructive">{error}</p>
        <Link to="/">
          <Button className="mt-4">Back to Vlogs</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className=" flex flex-col items-start justify-between mb-5">
        {/* Back Button */}
        <Link to="/">
          <Button variant="outline" className="mb-6">
            ← Back to Vlogs
          </Button>
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-bold">{vlog?.title}</h1>

        {/* Meta Information */}
        <div className="flex items-center text-muted-foreground mt-2">
          <span>Updated At</span>
          <span className="mx-2">•</span>
          <span>{new Date(vlog?.created_at).toLocaleDateString()}</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className=" w-full flex gap-5">
        {vlog?.images?.map((image: string, i: number) => (
          <div key={i} className=" w-80 h-64 md:h-96 overflow-hidden rounded-xl mb-6">
            <img
              src={image}
              alt={vlog.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* <img
          src={vlog.images[0] || logo2}
          alt={vlog.title}
          className="w-full h-full object-cover"
        /> */}

      {/* Description */}
      <p className="text-lg text-muted-foreground mb-6">{vlog?.desc}</p>
      {vlog?.contactPh &&
        vlog?.contactPh.map((ph: string) => (
          <p className="text-lg text-muted-foreground mb-6">{ph}</p>
        ))}
      {vlog?.address &&
        vlog?.address.map((address: string) => (
          <p className="text-lg text-muted-foreground mb-6">{address}</p>
        ))}
      <p className="text-lg text-muted-foreground mb-6">{vlog?.openingTime}</p>

      {vlog?.location && <MapShowCase location={vlog?.location} />}

      {/* Content */}
      <div
        className="prose max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: vlog.content }}
      />

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        <Button>Share</Button>
        <Button>View Facebook Page</Button>
        {/* <Button variant="outline">Save for Later</Button> */}
      </div>
    </div>
  );
};

export default VlogDetail;


{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.869679706358!2d96.12559543257434!3d16.828500370518032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19535fae8f8bd%3A0xad9c85f4eca730af!2sThe%20Hideout%20(Hledan)!5e1!3m2!1sen!2sus!4v1758099034582!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}