module.exports =
{
    Query: {
        teas: (parent, args, {dataSources}, info) => {
            return dataSources.TeaAPI.getTeas(args)
        },
        teaById: (parent, {id}, {dataSources}, indo) => {
            return dataSources.TeaAPI.getTeaById(id)
        }
    }
}