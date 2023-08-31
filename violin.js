const violin = document.querySelector(".violin")

violin.addEventListener("mousedown", e => playNote(e.target.dataset.note))
violin.addEventListener("mouseup", e =>  synth.triggerRelease())

async function playNote(note){
    await Tone.start()  
    synth.triggerAttack(note);
}