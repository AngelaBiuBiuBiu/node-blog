// 与底层业务有关，与server无关
const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json')

    const resData = {
        name: 'Angela',
        site: 'learn_node_blog',
        env: process.env.NODE_ENV
    }

    res.end(JSON.stringify(resData))
}

module.exports = serverHandle