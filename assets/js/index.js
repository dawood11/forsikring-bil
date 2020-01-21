const rules = {
    regNr: {
        pattern: /[a-zA-Z]{2}\d{4,5}$/,
        message: 'Skriv inn en gyldig epostaddresse'
    },
    fNr: {
        pattern: /(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])(\d\d)(\d{5})/,
        message: 'Skriv inn en gyldig registreringsnummer'
    },
    fornavn: {
        pattern: /[a-zA-Z]{2,}/,
        message: 'Fornavn må være på minst 2 bokstaver. Kun bokstaver.'
    },
    etternavn: {
        pattern: /[a-zA-Z]{2,}/,
        message: 'Etternavn må være på minst 2 bokstaver. Kun bokstaver.'
    },
    epost: {
        pattern: /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}/,
        message: 'Skriv inn en gyldig epostaddresse'
    },
};

function validate(element) {
    const value = document.getElementById(element.id).value;
    const patterMatch = rules[element.id].pattern.test(value);
    
    const oldErrorMessage = document.getElementById("error-" + element.id);
    if (oldErrorMessage) {
        oldErrorMessage.remove();
    }
    if (!patterMatch) {
        const errorMessage = document.createElement("span");
        errorMessage.appendChild(document.createTextNode(rules[element.id].message));
        errorMessage.setAttribute("class", "error-text");
        errorMessage.setAttribute("id", "error-" + element.id);
        element.parentNode.insertBefore(errorMessage, element.nextSibling);

        return false;
    }

}