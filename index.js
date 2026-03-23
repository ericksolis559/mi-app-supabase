import { createClient } from '@supabase/supabase-js'

// --- REEMPLAZA ESTOS DATOS ---
const supabaseUrl = 'https://vtuouryruhjlymqaklvy.supabase.co'
const supabaseKey = 'sb_publishable_ziSrnKzziBc8C_pP_lbl-g_ZGZ6SyID'
// -----------------------------

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes() {
    console.log("Conectando a Supabase...")
    const { data, error } = await supabase
        .from('estudiantes')
        .select('*')

    if (error) {
        console.log('Error de conexión:', error.message)
    } else {
        console.log('Conexión exitosa. Datos de la tabla:', data)
    }
}

obtenerEstudiantes()