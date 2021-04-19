//domain/.netlify/functions/1-hello NOTE: THE DOMAIN IS OUR IFSG SERVER BUT FOR TUTORIALS ITS LOCALHOST 8888:
// const person = {
//     name: 'john'
// }

exports.handler = async (event, context) => {


    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        // body: JSON.stringify(person),
        body: 'Our first netlify function example',
    }
}