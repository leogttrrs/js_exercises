function tratadorDeCliqueExercicio2() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Horário: 8 PM : 40m : 28s
    console.log(`Horário: ${hours}:${minutes}:${seconds}`)
}