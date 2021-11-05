//search function
const countriesList = document.getElementById('countriesList');
const searchBar = document.getElementById('searchBar');


let allCountries = [];


function getPriority(value, searchTerm){
    if (value == searchTerm){
        return 2;
    }else if(value.startsWith(searchTerm)){
        return 1;
    }else if (value.includes(searchTerm)){
        return 0;
    }else {
        return -1;
    }

}

searchBar.addEventListener('keyup', (event) => {

    const value = event.target.value.toLowerCase();

    const filteredCountries = allCountries.filter((country) => {

        return (country.country.toLowerCase().includes(value));

    });

    showCountries(filteredCountries);

});

const addCountries = async () => {

    try {

        const res = await fetch('https://v1.nocodeapi.com/jf900/supabase/LJDZtWOqdjXFFFMP?tableName=countries');

        allCountries = await res.json();
        showCountries(allCountries);

    } catch (err) {
        console.error(err);
    }

};

const showCountries = (countries) => {

    const htmlString = countries
        .map((country) => {
            return `
            <li class="country">
                <h2>${country.country}</h2>
               
            </li>
        `;
        })
        .join('');
    countriesList.innerHTML = htmlString;
};

addCountries();
