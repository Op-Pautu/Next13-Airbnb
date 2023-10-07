import Container from "@/components/Container";
import { categories } from "@/components/navbar/Categories";
import { SafeUser } from "@/types";
import { Listing, Reservation } from "@prisma/client";
import React, { useMemo } from "react";

interface ListingClientProps {
  reservations?: Reservation[];
  listing: Listing;
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  
}, [listing.category]);

  return <Container>
    <div className="max-w-screen-lg mx-auto"></div>
  </Container>;
};

export default ListingClient;
