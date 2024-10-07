import supabase from "./supabase";

export async function getReservationById(id) {
  const { data, error } = await supabase
    .from("reservations")
    .select("*, hotels(*)")
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Hotel could not be loaded");
  }

  return data;
}

export async function getReservations() {
  const { data: reservations, error } = await supabase
    .from("reservations")
    .select("*, hotels(*)");

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

export async function deleteReservationById(id) {
  const { error } = await supabase.from("reservations").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Reservation could not be deleted");
  }
}

export async function udpateReservation(id, newReservation) {
  const { data, error } = await supabase
    .from("reservations")
    .update({ ...newReservation })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Reservation could not be updated");
  }

  return data;
}
