import { createClient } from '@supabase/supabase-js'

// Configuración de conexión
const supabaseUrl = 'https://vtuouryruhjlymqaklvy.supabase.co'
const supabaseKey = 'sb_publishable_ziSrnKzziBc8C_pP_lbl-g_ZGZ6SyID' 
const supabase = createClient(supabaseUrl, supabaseKey)

async function insertarDatos() {
    console.log("Intentando insertar un nuevo registro...")

    // Inserción de datos para la práctica
    const { data, error } = await supabase
        .from('estudiantes') 
        .insert([
            { Nombre: 'Erick Solis', Carrera: 'IaySI' } 
        ])
        .select()

    if (error) {
        // Si hay un error, lo mostrará aquí
        console.error('Error al insertar:', error.message)
    } else {
        // Si sale este mensaje, ¡ya terminaste!
        console.log('¡Registro insertado con éxito!:', data)
    }
}

insertarDatos()