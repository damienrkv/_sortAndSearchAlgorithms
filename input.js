function getNumbers() {
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