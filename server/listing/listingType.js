import { courseTypeVal } from "../course/validate"
import { ValidationError } from "../errors"

export const ListingProps = {
    listing_id: 'listing_id',
    title: 'title',
    course: 'course',
    description: 'description',
    lowest_price: 'lowest_price',
    highest_price: 'highest_price',
    preferred_location: "preferred_location",
    preferred_time: 'preferred_time'
}

export function listingTypeVal(listing) {
    if (!(typeof(listing.listing_id) === Number)) {
        return ValidationError("Incorrect listing_id type")
    }
    if (!(typeof(listing.title) === String)) {
        return ValidationError("Incorrect title type")
    }
    if (!(typeof(listing.description) === String)) {
        return ValidationError("Incorrect description type")
    }
    if (!(typeof(listing.lowest_price) === Number)) {
        return ValidationError("Incorrect lowest_price Type")
    }
    if (!(typeof(listing.highest_price) === Number)) {
        return ValidationError("Incorrect highest_price Type")
    }
    if (!(typeof(listing.preferred_location) === String)) {
        return ValidationError("Incorrect preferred_location Type")
    }
    if (!(typeof(listing.preferred_time) === String)) {
        return ValidationError("Incorrect preferred_time Type")
    }

    courseTypeVal(listing.course);
}