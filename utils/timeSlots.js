function buildTimeSlots() {
    const startHour = Number(process.env.BOOKING_START_HOUR || 9);
    const endHour = Number(process.env.BOOKING_END_HOUR || 18);
    const slots = [];

    for (let hour = startHour; hour <= endHour; hour += 1) {
        const formattedHour = String(hour).padStart(2, "0");

        slots.push(`${formattedHour}:00`);
        slots.push(`${formattedHour}:30`);
    }

    return slots;
}

module.exports = buildTimeSlots;