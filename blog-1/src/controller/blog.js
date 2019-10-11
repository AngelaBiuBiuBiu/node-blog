const getList = (author, keyword) => {
    // 先返回假数据（格式是正确的）
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1570768216454,
            author: 'zhangsan'
        }, {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1570768123456,
            author: 'lisi'
        }
    ]
}

const getDetail = id => {
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1570768216454,
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) => {
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog
}