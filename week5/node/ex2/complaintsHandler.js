const {EMOTIONS,FINANCE,WEATHER} = require('./consts')

const complaintTypesMap = {
    [EMOTIONS] : 'It’ll pass, as all things do, with time.',
    [WEATHER] : 'It is the way of nature. Not much to be done.',
    [FINANCE] : 'Money doesn’t grow on trees, you know.',
}

function handleComplaint(complaint){//{text : string ; type : 'finance' | 'weather' | 'emotions'} 
    console.log(complaintTypesMap[complaint.type]);

}

module.exports = {handleComplaint}