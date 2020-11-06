
/**
 * Dummy user information just for populating headers
 * 
 * @TODO Delete it once the real API has been defined
 */
export default (req, res) => {
    res.statusCode = 200
    const { query:{ id } } = req
    
    const fooUser = {
        id: id,
        username: 'foobar',
        notifications :[{
            id: 'notf1',
            title : 'foo notification',
            visited: true
        },{
            id: 'notf2',
            title : 'bar notification',
            visited: false
        }, {
            id: 'notf3',
            title : 'fizz notification',
            visited: true
        }, {
            id: 'notf4',
            title : 'buzz notification',
            visited: true
        }],
        searchHistory:[
            'Lorem ipsum dolor sit amet',
            'consectetur adipiscing elit',
            'sed do eiusmod tempor incididunt',
            'ut labore et dolore magna aliqua',
            'Ut enim ad minim veniam',
            'quis nostrud exercitation ullamco laboris',
            'nisi ut aliquip ex ea commodo consequat',
            'Duis aute irure dolor in reprehenderit in voluptate velit',
            'esse cillum dolore eu fugiat nulla pariatur',
            'Excepteur sint occaecat cupidatat non proident',
            'sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ]
    }
    res.json(fooUser)
}