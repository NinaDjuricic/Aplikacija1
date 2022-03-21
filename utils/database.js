import { Sequelize } from 'sequelize'; 

const sequelize = new Sequelize('mysql://user:usr34passwd56@163.172.166.126:13306/db', {
}); 


export default sequelize;