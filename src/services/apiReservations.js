import supabase from "./supabase";

export async function getReservationById(id) {
  const { data: reservation, error } = await supabase
    .from("reservations")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Hotel could not be loaded");
  }

  return reservation;
}

export async function getReservations() {
  const { data: reservations, error } = await supabase
    .from("reservations")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Reservations could not be loaded");
  }

  return reservations;
}

export async function createReservation(reservation) {
  const { error } = await supabase
    .from("reservations")
    .insert({ ...reservation });

  if (error) {
    console.error(error);
    throw new Error("Reservations could not be loaded");
  }
}

export async function deleteReservation() {}

export async function udpateReservation() {}
