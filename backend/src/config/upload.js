const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, callback) => {
            //Pega a extenção
            const ext = path.extname(file.originalname);
            //Pega o nome e converte tudo pra lower
            const name = path.basename(file.originalname, ext).toLowerCase();
            //TemplateString 
            callback(null, `${name}-${Date.now()}${ext}`)

        }
    })
}