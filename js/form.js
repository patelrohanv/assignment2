function checkForm() {
    var characterfirstname = document.assignment_form.firstname.value;
    var lastname = document.assignment_form.lastname.value;
    var publisher = document.assignment_form.publisher.value;
    var character = document.assignment_form.character.value;
    var lastcomic = document.assignment_form.lastcomic.value;
    var quantity = document.assignment_form.quantity.value;
    if (quantity < 0 || containsNum(firstname) || containsNum(lastname) || containsNum(character)) {
        document.getElementById("output").innerHTML = "failure";
    } else {
        document.getElementById("output").innerHTML = "success";
    }
}

function reset() {
    document.getElementById("output").innerHTML = "";
    document.assignment_form.firstname.value = "";
    document.assignment_form.lastname.value = "";
    document.assignment_form.publisher.value = "";
    document.assignment_form.character.value = "";
    document.assignment_form.lastcomic.value = "";
    document.assignment_form.quantity.value = "";
}

function containsNum(word) {
    if (word.includes("1")) {
        return true;
    }
    if (word.includes("2")) {
        return true;
    }
    if (word.includes("3")) {
        return true;
    }
    if (word.includes("4")) {
        return true;
    }
    if (word.includes("5")) {
        return true;
    }
    if (word.includes("6")) {
        return true;
    }
    if (word.includes("7")) {
        return true;
    }
    if (word.includes("8")) {
        return true;
    }
    if (word.includes("9")) {
        return true;
    }
    if (word.includes("0")) {
        return true;
    }
    return false;
}