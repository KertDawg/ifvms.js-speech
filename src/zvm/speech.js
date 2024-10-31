
const speech = {
    speak: function(text)
    {
        var CorrectedText = text;

        //  Remove unneeded spaces and the end ">" from the speech output.
        CorrectedText = CorrectedText.replaceAll(">", "");
        CorrectedText = CorrectedText.trim();

        return new Promise(function (resolve, reject)
        {
            const Utterance = new SpeechSynthesisUtterance(CorrectedText);
            Utterance.lang = "en-GB";
            Utterance.rate = 1.0;
            Utterance.pitch = 1.0;
    
            Utterance.onend = () => resolve();
            Utterance.onerror = (error) => reject(error);
            
            speechSynthesis.speak(Utterance);
        });
    },
};

module.exports = speech;
