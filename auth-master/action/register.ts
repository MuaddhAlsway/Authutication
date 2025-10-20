'use server';

import * as z from 'zod';
import { revalidatePath, revalidateTag } from "next/cache";
import { RegisterScheme } from '@/schemas';

export const register = async (values: z.infer<typeof RegisterScheme>) =>{
    const validatedFields = RegisterScheme.safeParse(values);

    if(!validatedFields.success){
        return{error: 'Invalid fields!'};
    }

    return {success: 'Email sent!'}
}
