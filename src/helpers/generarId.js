export const generarId = () => {
    const aleatorio = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36).substring(2)
    const newId = aleatorio+fecha
    return newId
}