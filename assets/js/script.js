function jugarCachipun() {
    const opciones = ["piedra", "papel", "tijera"];
    const vecesJugar = parseInt(prompt("¿Cuántas veces deseas jugar contra la computadora?")); 
    for (var i = 0; i < vecesJugar; i++) {
        const jugadaUsuario = prompt("Elige tu jugada: Piedra, Papel o Tijera").toLowerCase();
        
        // Validar la entrada del usuario
         if (!opciones.includes(jugadaUsuario)) {
            prompt("Por favor, introduce una opción válida.");
            continue;
        }

        // Generar la jugada de la máquina
        const jugadaMaquina = opciones[Math.floor(Math.random() * opciones.length)];

        alert(`Jugada de la computadora es: ` + jugadaMaquina );

        // Determinar el ganador
        if (jugadaUsuario === jugadaMaquina) {
            var ganador = 2
        } else if (
            (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
            (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
            (jugadaUsuario === "tijera" && jugadaMaquina === "papel")            
        ) {
            ganador = 1         
        } else {
            ganador = 0
        }
        document.write("Elegiste: " + jugadaUsuario + "<br>" + "La maquina eligio: " + jugadaMaquina + "<br>"+ "<br>")
        if (ganador == 1){
            document.write("Felicidades Has Ganado !!" + "<br>" + "<br>") 
        } if (ganador == 2) {    
            document.write("Es un Empate !! " + "<br>" + "<br>")
        } if(ganador == 0) {
            document.write("Lo siento Has Perdido !! " + "<br>"+ "<br>")
        }
    }
}
