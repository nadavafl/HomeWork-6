let q = [['First Name:'],['Midle Name:'],['Last Name:'],['Day of birth:'],['Month of borth:'],['Year of brith:'],['ID number:'],['Country of birth:'],['City of brith:'],['Your full adress:']];

let id = [];

for (i=0; i<q.length; i++){
    id.push(prompt('Enter your '+ q[i]));
}

let a = [[q[0]+' '+id[0]],[q[1]+' '+id[1]],[q[2]+' '+id[2]],[q[3]+' '+id[3]],[q[4]+' '+id[4]],[q[5]+' '+id[5]],[q[6]+' '+id[6]],[q[7]+' '+id[7]],[q[0]+' '+id[8]],[q[9]+' '+id[9]]];

function info(details){
    console.log(details);
}
a.forEach(info);