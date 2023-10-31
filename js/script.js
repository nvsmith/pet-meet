const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

// Factory function for pets
const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5, // Scale from 1 (refreshed) to 10 (exhausted)

        sleep: function () {
            console.log(`${this.name} needs a nap. ZZZ...`);
            this.isTired = 1;
        },

        play: function () {
            if (this.isTired === 10) {
                console.log(`Too tired to play.`);
                this.sleep();
            } else {
                console.log(`Yay! ${this.name} loves to play.`);
                this.isTired += 1;
            }
        },
    };
    return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

// clover.sleep();
// baxter.play();
// console.log(sora, clover, baxter);

clover.isTired = 8;
francine.isTired = 9;

// Create array of our pet objects
allPets = [sora, clover, baxter, cleo, francine];
console.log(allPets);

// Display pets in the browser
const showPets = function (petArray) {
    // empty list
    pets.innerHTML = "";

    for (let pet of petArray) {
        let status = "ready to play";
        if (pet.isTired >= 7) {
            status = "is sleeping";
        }

        const li = document.createElement("li");
        li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
        pets.append(li);
    }
};

statusButton.addEventListener("click", function () {
    showPets(allPets);
});
