import express from 'express';

const router = express.Router();

const  accounts = [
    {
        id :1,
        Username :'Ronaldo',
        Password: '1'
    },
    {
        id :2,
        Username :'Messi',
        Password: '2'
    },
    {
        id :3,
        Username :'Pogba',
        Password: '3'
    }
]


//get all
router.get('/',(req,res)=>{
    res.status(200).send(accounts);
})

//get one 
router.get('/:id',(req,res)=>{
    const account = accounts.find(account=>account.id===+req.params.id);
    res.status(200).send(account);
})

//create
router.post('/',(req,res)=>{
    const isChecker = accounts.some((acc)=>acc.Username===req.body.Username)
    if(isChecker){
        res.send('Tài khoản đã tồn tại')
    }else{
        accounts.push(req.body)
        res.send(accounts)
    }
})

//update
router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const newAccount = accounts.map((item)=>{
        if(item.id===+id){
            return req.body;
        }
        return item;
    })
    res.json(newAccount)
})

//delete
router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    const newListAcc = accounts.filter((item)=>item.id !== +id);
    res.json(newListAcc);
})

export default router