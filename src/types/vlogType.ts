export interface IVlogType {
  vlog: {
    id: number;
    title: string;
    created_at: Date;
    desc: string;
    categories: string[];
    location: string;
    facilities: string[];
    images: string[];
    address: string[];
    openingTime: string;
    contactPh: string;
  };
}

export type VlogType = Omit<IVlogType, "id">;
