import { NextResponse } from "next/server";

export interface ReservationPayload {
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  specialRequests?: string;
}

const reservations: Array<
  ReservationPayload & {
    reservationCode: string;
    createdAt: string;
  }
> = [];

export async function GET() {
  return NextResponse.json({
    success: true,
    reservations,
  });
}

export async function POST(request: Request) {
  try {
    const body: ReservationPayload = await request.json();

    if (!body.name || !body.email || !body.phone || !body.date || !body.time) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required booking fields." },
        { status: 400 }
      );
    }

    if (body.guests < 1 || body.guests > 20) {
      return NextResponse.json(
        { success: false, error: "Party size must be between 1 and 20 guests." },
        { status: 400 }
      );
    }

    const reservationCode = `TBL-${Math.floor(10000 + Math.random() * 90000)}`;

    const confirmedBooking = {
      ...body,
      reservationCode,
      createdAt: new Date().toISOString(),
    };

    reservations.unshift(confirmedBooking);

    return NextResponse.json(
      {
        success: true,
        reservationCode,
        booking: confirmedBooking,
        message: "Your table has been reserved!",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Unable to process table reservation." },
      { status: 500 }
    );
  }
}
