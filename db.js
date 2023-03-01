import mongoose from "mongoose"

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: 'furkano',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Veritabanı bağlantısı başarılı")
    }).catch((err) => {
        console.log(`Veritabanı Bağlantısı Başarısız: ${err}`)
    })
}

export default conn