import {z} from 'Zod';

const schema = z.object({
    name: z.string().min(3)
})

export default schema;