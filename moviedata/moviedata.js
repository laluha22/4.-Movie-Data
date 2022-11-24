let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');
let movieData = [
    { name: 'The Darjeeling Limited', runtime: 151, year: '2007', cast: '"Jason Schwartzman", "Owen Wilson", "Adrien Brody"', plot:'A year after their fathers funeral, three brothers travel across India by train in an attempt to bond with each other', rating: 7.2 },
    { name: 'The Royal Tenenbaums', runtime: 170, year: '2001', cast: '"Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"', plot:'The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons', rating: 7.6 },
    { name: 'Fantastic Mr. Fox', runtime: 147, year: '2009', cast: '"George Clooney","Meryl Streep" "Bill Murray", "Jason Schwartzman"', plot:'An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers retaliation.', rating: 7.9 },
    { name: 'The Grand Budapest Hotel', runtime: 159, year: '2014', cast: '"Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"', plot:'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotels glorious years under an exceptional concierge.', rating: 8.1 }
]
let headers = ['Name', 'Runtime', 'Year', 'Cast', 'Plot', 'Rating'];
btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    movieData.forEach(emp => {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    myTable.appendChild(table);
});

/* 

let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let runtimeInput = document.querySelector('#runtime');
let yearInput = document.querySelector('#year');
let castInput = document.querySelector('#cast');
let plotInput = document.querySelector('#plot');
let ratingInput = document.querySelector('#rating');
btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let runtime= runtimeInput.value;
    let year = yearInput.value;
    let cast = castInput.value;
    let plot = plotInput.value;
    let rating = ratingInput.value;
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${runtime}</td>
                    <td>${year}</td>
                    <td>${cast}</td>
                    <td>${plot}</td>
                    <td>${rating}</td>
                </tr>`;
    table.innerHTML += template;
}); 

*/