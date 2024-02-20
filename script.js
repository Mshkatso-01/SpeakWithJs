const Playbutton  = document.getElementById('play')
const Pausebutton = document.getElementById('pause')
const Stopbutton  = document.getElementById('stop')
const Textarea    = document.getElementById('textarea')
const Speedbutton = document.getElementById('speed')
let currentchar 
            // addEventListener-1
Playbutton.addEventListener ('click', () => {
    Speech(Textarea.value)
})
            // addEventListener-2
Pausebutton.addEventListener('click', SpeechPause)
            // addEventListener-3
Stopbutton.addEventListener('click', Stopspeech)
            // addEventListener-4
Speedbutton.addEventListener('input', () => {
    Stopspeech()
    Speech(utterance.text.substring(currentchar))
})
const utterance = new SpeechSynthesisUtterance()
            // T2O BOXES OF SPEED
                // BOX-1
utterance.addEventListener('end', () => {
    Textarea.disabled = false
})
                // BOX-2
utterance.addEventListener('boundary', e => {
    currentchar  = e.charIndex
})
            // FUNCTIONS
function Speech(text){
    if (speechSynthesis.speaking && speechSynthesis.pause){
        return speechSynthesis.resume()
    }
    if (speechSynthesis.speaking) return
    utterance.text = text
    utterance.rate = Speedbutton.value || 1
    
        // Textarea.disabled = false
    Textarea.disabled = true
    speechSynthesis.speak(utterance)
    }
    // Textarea.disabled = true
    // speechSynthesis.speak(utterance)
   

function SpeechPause(){
    if (speechSynthesis.speaking) (speechSynthesis.pause())
}
function Stopspeech(){
    speechSynthesis.resume()
    speechSynthesis.cancel()
}