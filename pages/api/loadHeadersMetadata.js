
/**
 * Dummy info for populating the headers
 */
export default (req, res) => {
    res.statusCode = 200
    res.json({ 
      appName: 'Callpass'
    })
  }