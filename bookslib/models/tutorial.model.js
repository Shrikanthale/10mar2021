

const tutorial = (sequelize,Sequelize)=>{
    const Tutorial = sequelize.define("tutorial",{
        title : {
            type : Sequelize.STRING
        },
        description : {
            type : Sequelize.STRING
        },
        published : {
            type : Sequelize.STRING
        }
    },{
        timestamps:true
    })
    return Tutorial
}
export default tutorial