let newCity;
let team;
let league;

const getNewCity = () => {
    let listOfCities = ["San Franciso", "Chicago", "New York", "Miami", "London", "Melbourne", "Sydney", "Washington", "Los Angeles", "Las Vegas"];
    let indexNumber = (Math.floor(Math.random() * listOfCities.length));
    newCity = listOfCities[indexNumber];
    return newCity;
}

const getTeam = () => {
    let listOfTeams = ["Bulldogs", "Hawks", "Magpies", "Blues", "Tigers", "Saints", "Lions", "Demons", "Swans", "Cats"];
    let indexNumber = (Math.floor(Math.random() * listOfTeams.length));
    team = listOfTeams[indexNumber];
    return team;
}

const getLeague = () => {
    let listOfLeagues = ["NBA", "NFL", "MLB", "MLS", "NHL"];
    let indexNumber = (Math.floor(Math.random() * listOfLeagues.length));
    league = listOfLeagues[indexNumber];
    return league;
}

getNewCity();
getTeam();
getLeague();

console.log(newCity);
console.log(team);
console.log(league);


// Print the randomised message
console.log(`BREAKING NEWS: The ${team} have announced they are relocating to ${newCity} to join the ${league} as the ${newCity} ${team}`);