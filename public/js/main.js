const toggleDiv = document.querySelector('#container');
const btnCl = document.querySelector('.buttonOne').onclick = () => {
    toggleDiv.classList.toggle('redBorder');
};
const btnTwo = document.querySelector('.buttonTwo');

fetchData = () => {
    axios.get('/list')
        .then(response => {
            const title = response.data.title;
            console.log(`GET title`, title);
            btnTwo.innerText = title;
        })
        .catch(error => console.error(error));
  };
  
btnTwo.onclick = () => {
    fetchData();
};


