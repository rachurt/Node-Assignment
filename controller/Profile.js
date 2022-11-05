const AgentProfile = require('../model/agentModel')
const StudentProfile = require('../model/studentModel')
const User = require('../model/userModel')

exports.signup = async(req, res)=>{
    try{
        const value = await User({
            email:req.body.email,
            password:req.body.password
        })
        const data = await value.save()
        res.send(data)

    }catch(error){
        res.send(error)
    }
}



exports.login = async(req,res)=>{
    try{
            const data = await User.findOne({
                email: req.body.email,
                password: req.body.password
            })
            if (!data) {
                res.status(200).send({ success: true, msg: "Email or Password not found" })
            } else {
                //const value = data.save()
                // res.status(200).send({ success: true, data })
                res.render("agentprofile")
              
            }
    }catch(error){

    }
}

exports.agent_profile = async(req,res)=>{
    try{
        const value = await AgentProfile({
            name: req.body.name,
            place: req.body.place,
            mobile_number: req.body.mobile_number,
            email: req.body.email,
            bank_detail: req.body.bank_detail,

        })
        // if(!value){
            const data = await value.save()
            console.log('gffg');
            res.render("agentprofile")
    }catch(error){
        res.send({success:false, error})
    }
}

exports.get_agent_profile = async(req, res)=>{
    try{
        const data = await AgentProfile.find()
        if(data){
            res.send(data)
        }else{
            res.send({message:'agent not found'})
        }
    }catch(error){
        res.send({success:false, error})
    }

}


//---------------------Student Profile------------------------------

exports.student_profile = async(req,res)=>{
    try{
        // console.log('fregev');
        const value = await StudentProfile({
            name: req.body.name,
            place: req.body.place,
            mobile_number: req.body.mobile_number,
            email: req.body.email,
            past_course: req.body.past_course
        })
        console.log('ui8u');
        const data = await value.save()
        // res.send(data)
        
        res.render("studentprofile")

    }catch(error){
        res.send({success:false, error})
    }
}

exports.get_student_profile = async(req,res)=>{
    try{
        const data = await StudentProfile.find()
        if(data){
            res.send({"data":data})
        }else{
            res.send('no student found')
        }

    }catch(error){
        res.send({success:false, error})
    }
}