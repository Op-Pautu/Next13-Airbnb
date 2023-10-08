"use client";

import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { SafeReservation, SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ReservationsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  return (
    <Container>
      <Heading title="Reservations" subtitle="Bookings on your properties" />
    </Container>
  );
};

export default ReservationsClient;
