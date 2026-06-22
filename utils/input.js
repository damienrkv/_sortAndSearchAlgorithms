export function getNumbers() {
    let numbers = [];
    let input;

    while (true) {

        input = prompt("Enter a number or press Enter to stop");

        if (input === "") {
            break;
        }

        let number = Number(input);

        if (isNaN(number)) {
            console.log("Please enter a valid number.");
            continue;
        }

        numbers.push(number);
    }

    return numbers;
}

export function getTarget() {
    const input = prompt("Wenn du eine Zahl suchen möchtest, gib sie hier ein:");

    if (input === null || input === "") {
        console.log("keine Zahl eingegeben");
        return null;
    }

    const target = Number(input);

    if (isNaN(target)) {
        console.log("Bitte eine gültige Zahl eingeben.");
        return null;
    }

    return target;
}