const pgconfig = {
    HOST : "localhost",
    Port : "5432",
    USER : "postgres",
    PASSWORD : "Shri@12345",
    DB : "tuts",
    dialect : "postgres",
    pool : {
        max:5,
        min:0,
        acquire:300000,
        idle:10000
    }
};

export default pgconfig