
const sampleJson = [{ id:1, name : 'bazil',phoneNo:9898889, regno:1189, email: 'bazil@mail.com'}, 
{id:2, name : 'varun', phoneNo:9890777, regno:7777, email: 'varun@mail.com'}];

const studentAll = (req,res) =>{
     res.send(sampleJson)
}

const studentSpecific = (req, res) => {
    const specificUser = sampleJson.find(x => x.id === parseInt(req.params.id))
    if(!specificUser) res.send('user not found');
    res.send(specificUser)
}
const studentAdd = (req,res) => {
    const addDetail = {
        id: sampleJson.length + 1,
        name: req.body.name,
        phoneNo: req.body.phoneNo,
        regno: req.body.regno,
        email: req.body.email
    }
    sampleJson.push(addDetail)
    res.send(addDetail)
}
const studentDelete = (req,res) => {
    const specicdelte = sampleJson.find(x => x.id === parseInt(req.params.id))
    const indexSpecificDel = sampleJson.indexOf(specicdelte)
    sampleJson.splice(indexSpecificDel, 1)
    res.send(specicdelte)
}
const studentUpdate = (req,res) => {
    const specificUpdate = sampleJson.find(x => x.id === parseInt(req.params.id))
    specificUpdate.name = req.body.name
    specificUpdate.phoneNo = req.body.phoneNo
    specificUpdate.regno = req.body.regno
    specificUpdate.email = req.body.email
    res.send(specificUpdate)
}
module.exports = {studentAll, studentSpecific, studentAdd, studentDelete, studentUpdate}