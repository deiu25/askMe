"use server"

import { connectToDetabase } from "../mongoose"

export async function createQuestion(params: any) {
    try {
        connectToDetabase();
    } catch (error) {
        
    }
}