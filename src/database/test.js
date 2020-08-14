const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db) => {
    //INSERIR DADOS
    proffyValue = {
        name: 'Cleiton Souza',
        avatar: 'https://avatars1.githubusercontent.com/u/4669899?s=460&u=806503605676192b5d0c363e4490e13d8127ed64&v=4',
        whatsapp: '11987654321',
        bio: 'Químico',
    }

    classValue = {
        subject: 1 ,
        cost: "20", 
        //o proffy id virá pelo bando de dados
    }

    classScheduleValues = [
        // class_id virá pelo bamco de dados, após cadastrar a class
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados inseridos

    //todos os  proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classe de um detrminado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //o horário que a pss trabalha, por exemplo é das 8 as 18
    //o horáro do tm_from 8h precisa ser menor ou igual ao horário solcitado
    //o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"

    `)
    // console.log(selectClassesSchedules)
})