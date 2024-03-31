import Event from "../models/Event";

export default {
    create: async (
        name: string,
        start_date: Date,
        end_date: Date,
        ubication: string,
        allowed_number: number
    ) => {
    try {

        const event = await Event.create({
            name,
            start_date,
            end_date,
            ubication,
            allowed_number
        });

        return {
            id: event.id,
            event: event.toJSON(),
        };
    } catch (e) {
        console.error(e);
    }
    return {
        error: "Event not registered",
    };
    },
    find: async (
        id?: number
    ) => {
        try {
            if (id) {
                // Si se proporciona un id, buscar un evento específico
                const event = await Event.findByPk(id);
    
                if (!event) {
                    return {
                        error: "Event not found",
                    };
                }
    
                return {
                    event: event.toJSON(),
                };
            } else {
                // Si no se proporciona un id, traer todos los eventos
                const events = await Event.findAll();
    
                if (!events || events.length === 0) {
                    return {
                        error: "No events found",
                    };
                }
    
                return {
                    events: events.toJSON(),
                };
            }
        } catch (e) {
            console.error(e);
            return {
                error: "An error occurred while fetching events",
            };
        }
    },
    update: async (
        id: number,
        name?: string,
        start_date?: Date,
        end_date?: Date,
        ubication?: string,
        allowed_number?: number
    ) => {
    
        try {
            const event = await Event.findByPk(id);
    
            if (!event) {
                return {
                    error: "Event not found",
                };
            }

            event.name = name;
            event.start_date = start_date;
            event.end_date = end_date;
            event.ubication = ubication;
            event.allowed_number = allowed_number;

            await event.save();
    
            return {
                message: "Even Updated succesfully",
                event: event
            };
        } catch (e) {
            console.error(e);
            return {
                error: "An error occurred while updating event"
            };
        }
    },
    delete: async (
        id: number
    ) => {
    
        try {
            const event = await Event.findByPk(id);
    
            if (!event) {
                return {
                    error: "Event not found",
                };
            }

            await event.destroy();

            return {
                message: "Event deleted successfully"
            };
        } catch (e) {
            console.error(e);
            return {
                error: "An error occurred while deleting event",
            };
        }
    },
};
