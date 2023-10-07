import getCurrentUser from "@/actions/getCurrentUser";
import prismadb from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(
    request: Request
) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return NextResponse.error()
    }

    const body = await request.json()
    const {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        guestCount,
        bathroomCount,
        location,
        price
    } = body

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error()
        }
    })

    const listing = await prismadb.listing.create({
        data: {
            title,
            description,
            imageSrc,
            category,
            roomCount,
            guestCount,
            bathroomCount,
            locationValue: location.value,
            price: parseInt(price, 10),
            userId: currentUser.id
        }
    })

    return NextResponse.json(listing)
}