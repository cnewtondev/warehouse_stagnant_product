import Papa from 'papaparse';
import sData from './data/sampleShippedData.csv'



let shippedInfo = [];
//load quote data
const response = fetch(sData)
.then(response => response.text())
.then(v => Papa.parse(v))
.catch(err => console.log(err))
 response.then(v => {
   for(let x = 0; x < v.data.length; x++){
    let sData = v.data[x].toString().split(",")
    let shippedItem = {product: sData[0], quantityShipped: parseInt(sData[1]), dateShipped: new Date(sData[2]), company: sData[3]}
    shippedInfo.push(shippedItem)
   }
 })

export default shippedInfo