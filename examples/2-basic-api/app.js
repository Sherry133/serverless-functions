//this is on Netlify where SSCOM is running. 

const result = document.querySelector('.result');

const fetchData = async () => {
    try {
        // const {
        //     data
        // } = await axios.get('/api/2-basic-api');
        const {
            data
        } = await axios.get('https://serverless-functions133.netlify.app/examples/2-basic-api/index.html');

        const products = data.map((product) => {
            const {
                image: {
                    url
                },
                name,
                price,
            } = product
            return `<article class="product">
      <img
        src="${url}" alt="${name}"/>
      
      <div class="info">
        <h5 class ="name">${name}</h5>
        <h5 class="price">$${price}</h5>
      </div>
    </article>`
        }).join("")
        result.innerHTML = products
    } catch (error) {
        // result.innerHTML = 'There was an error. Please try again.'
    }

}
fetchData()