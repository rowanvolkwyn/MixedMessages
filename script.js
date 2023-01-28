let newCity;
let team = [];
let league;

const getNewCity = () => {
    let listOfCities = ["San Franciso", "Chicago", "New York", "Miami", "Boston", "Philadelphia", "Houston", "Washington", "Los Angeles", "Las Vegas"];
    let indexNumber = (Math.floor(Math.random() * listOfCities.length));
    newCity = listOfCities[indexNumber];
    return newCity;
}

const getTeam = () => {
    let listOfTeams = [
        {
            name: "Bulldogs",
            location: "Western"
        }, 
        {
            name: "Hawks",
            location: "Hawthorn"
        },
        {
            name: "Magpies",
            location: "Collingwood"
        },
        {
            name: "Blues",
            location: "Carlton"
        },
        {   
            name:"Tigers",
            location: "Richmond"
        },
        {
            name: "Saints",
            location: "St. Kilda"
        },
        {
            name: "Lions",
            location: "Brisbane"
        },
        {   name: "Demons",
            location: "Melbourne"
        },
        {
            name: "Swans",
            location: "Sydney"
        },
        {
            name: "Cats",
            location: "Geelong"
        }];
    let indexNumber = (Math.floor(Math.random() * listOfTeams.length));
    team.push(listOfTeams[indexNumber].name);
    team.push(listOfTeams[indexNumber].location);
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
console.log(`BREAKING NEWS: The ${team[1]} ${team[0]} have announced they are relocating to ${newCity} to join the newly expanded ${league} as the ${newCity} ${team[0]}`);