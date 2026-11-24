import { NextResponse } from "next/server";

export interface OrderItemPayload {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface OrderRequestPayload {
  customer: {
    name: string;
    email: string;
    phone: string;
    orderType: "delivery" | "pickup";
    address?: string;
    notes?: string;
  };
  items: OrderItemPayload[];
  subtotal: number;
  deliveryFee: number;
  total: number;
}

const recentOrders: Array<
  OrderRequestPayload & {
    orderNumber: string;
    status: string;
    createdAt: string;
  }
> = [];

export async function GET() {
  return NextResponse.json({
    success: true,
    count: recentOrders.length,
    orders: recentOrders,
  });
}

export async function POST(request: Request) {
  try {
    const body: OrderRequestPayload = await request.json();

    if (!body.customer?.name || !body.customer?.phone) {
      return NextResponse.json(
        { success: false, error: "Customer name and phone number are required." },
        { status: 400 }
      );
    }

    if (
      body.customer.orderType === "delivery" &&
      (!body.customer.address || body.customer.address.trim().length < 5)
    ) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid delivery address." },
        { status: 400 }
      );
    }

    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Your cart is empty." },
        { status: 400 }
      );
    }

    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const orderNumber = `CF-${randomCode}`;
    const estimatedMinutes = body.customer.orderType === "delivery" ? "30–45 mins" : "15–20 mins";

    const newOrder = {
      ...body,
      orderNumber,
      status: "Confirmed & Preparing",
      createdAt: new Date().toISOString(),
    };

    recentOrders.unshift(newOrder);

    return NextResponse.json(
      {
        success: true,
        orderNumber,
        estimatedMinutes,
        status: newOrder.status,
        message: "Order successfully received by the kitchen!",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid order request format." },
      { status: 500 }
    );
  }
}
