import {Router} from 'express';

const router = Router();
const publicPath = `${process.cwd()}`;

router.get('/bemvindo/:nome', (req,res) =>{
    res.send(req.params.nome);
});

router.get('/page', (req,res)=>{
    res.sendFile(`${publicPath}/html/index`)
})

export default router ;