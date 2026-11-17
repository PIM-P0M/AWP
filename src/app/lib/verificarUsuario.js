
import { redirect } from "next/navigation";
import { createClient } from "./supServer";

export async function verificarUsuario() {
    const supabase = await createClient();

    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
        redirect("/login");
    }

    return user;
}
